
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { StoreItem, StyleResult } from "../types";

// Always use the standard initialization format with the process.env.API_KEY variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Uses gemini-2.5-flash-image (Nano Banana) to perform precision garment replacement.
 */
export async function styleImage(
  imageBase64: string, 
  prompt: string, 
  inventory: StoreItem[],
  mimeType: string = 'image/jpeg'
): Promise<StyleResult> {
  
  // 1. Text Analysis for aesthetic insight
  const analysisResponse = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are an elite AI Fashion Critic at Lumina Atelier. 
      Analyze the user's manual ensemble selection and provide a high-end, evocative fashion critique.
      Focus on texture, color theory, and the specific vibe of the curated items.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          suggestion: { 
            type: Type.STRING,
            description: "A deeply insightful commentary on the ensemble."
          }
        },
        required: ["suggestion"]
      }
    },
    contents: `Analysis Request: "${prompt}". Provide a professional atelier-level fashion insight.`
  });

  const analysis = JSON.parse(analysisResponse.text || '{}');
  const suggestion = analysis.suggestion || "A bespoke ensemble curated with precision.";

  // 2. Precision Image Synthesis with Nano Banana
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: imageBase64.split(',')[1],
            mimeType: mimeType,
          },
        },
        {
          text: `ACT AS A MASTER DIGITAL TAILOR. 
                 TASK: RE-DRESS THE PERSON IN THIS IMAGE.
                 
                 STRICT INSTRUCTION: Replace the person's current outfit with the specific garments described in the style intent below.
                 
                 STYLE INTENT:
                 "${prompt}"
                 
                 TECHNICAL REQUIREMENTS:
                 - WEARABILITY: The garments must be realistically fitted to the person's body shape and current pose. 
                 - TEXTURE: Render fabrics (silk, denim, wool, etc.) with high-fidelity photorealism and accurate folds.
                 - SILHOUETTE: Keep the original person's face, body, hair, and background completely UNCHANGED. Only modify the clothing layer.
                 - SEAMLESS INTEGRATION: The new clothes must have realistic shadows and contact points with the person's skin.
                 
                 OUTPUT ONLY THE FINAL MODIFIED IMAGE.`,
        },
      ],
    },
  });

  let styledImageUrl = '';
  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      styledImageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
    }
  }

  if (!styledImageUrl) {
    throw new Error("Failed to generate styled image.");
  }

  return {
    imageUrl: styledImageUrl,
    suggestion: suggestion,
    matchedItemIds: [] 
  };
}
