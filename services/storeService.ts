
import { StoreItem } from '../types';

const STORE_STORAGE_KEY = 'wardrobe_store_inventory_v2';

const MOCK_ITEMS: StoreItem[] = [
  // --- WOMEN'S WEAR ---
  { 
    id: 'w-t-1', 
    name: 'Embroidered Silk Blouse', 
    gender: 'Women', 
    category: 'Tops', 
    price: 89.99, 
    rating: 4.8, 
    imageUrl: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?auto=format&fit=crop&q=80&w=600', 
    description: 'Intricate floral embroidery on premium silk.',
    variants: [
      { color: 'Cream', size: 'S' },
      { color: 'Cream', size: 'M' },
      { color: 'Lavender', size: 'M' }
    ]
  },
  { id: 'w-t-2', name: 'Satin Wrap Shirt', gender: 'Women', category: 'Tops', price: 45.00, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=600', description: 'Elegant emerald green satin wrap-around shirt.' },
  { id: 'w-t-3', name: 'Linen Boat Neck Tee', gender: 'Women', category: 'Tops', price: 29.50, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1523381235208-255f7d4d1e00?auto=format&fit=crop&q=80&w=600', description: 'Breathable organic linen with a modern boat neckline.' },
  { id: 'w-t-4', name: 'Oversized Pastel Knit', gender: 'Women', category: 'Tops', price: 75.00, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600', description: 'Chunky knit sweater in soft lavender wool.' },
  
  // Bottoms
  { id: 'w-b-1', name: 'Tailored Palazzo Pants', gender: 'Women', category: 'Bottoms', price: 110.00, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600', description: 'High-waisted wide-leg trousers in charcoal crepe.' },
  { id: 'w-b-2', name: 'Pleated A-Line Skirt', gender: 'Women', category: 'Bottoms', price: 68.00, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600', description: 'Classic accordion pleats in a navy metallic finish.' },
  
  // Dresses
  { id: 'w-d-1', name: 'Midnight Silk Slip Dress', gender: 'Women', category: 'Dresses', price: 135.00, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600', description: 'Minimalist bias-cut dress for evening elegance.' },
  { 
    id: 'w-d-2', 
    name: 'Ethereal Square-Neck Gown', 
    gender: 'Women', 
    category: 'Dresses', 
    price: 320.00, 
    rating: 5.0, 
    imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600', 
    description: 'A breathtaking floor-length white gown featuring a square neckline and ethereal puffed long sleeves.',
    variants: [{ size: 'XS' }, { size: 'S' }, { size: 'M' }]
  },
  { 
    id: 'w-d-3', 
    name: 'Ruby Sequin One-Shoulder Gown', 
    gender: 'Women', 
    category: 'Dresses', 
    price: 450.00, 
    rating: 4.9, 
    imageUrl: 'https://images.unsplash.com/photo-1539008835657-9e8e9680fe0a?auto=format&fit=crop&q=80&w=600', 
    description: 'Luxurious burgundy satin gown featuring a sparkling sequined one-shoulder bodice and a structured floor-length skirt.',
    variants: [{ color: 'Burgundy', size: 'S' }, { color: 'Burgundy', size: 'L' }]
  },
  { 
    id: 'w-d-4', 
    name: 'Rosé Lace Cocktail Dress', 
    gender: 'Women', 
    category: 'Dresses', 
    price: 95.00, 
    rating: 4.7, 
    imageUrl: 'https://images.unsplash.com/photo-1518049360730-3245f0c11d23?auto=format&fit=crop&q=80&w=600', 
    description: 'Charming knee-length dress in dusty rose with a delicate lace bodice and a playful ruffled chiffon skirt.',
    variants: [{ size: 'S' }, { size: 'M' }, { size: 'XL' }]
  },
  
  // --- MEN'S WEAR ---
  { id: 'm-t-1', name: 'Oxford Button-Down', gender: 'Men', category: 'Tops', price: 55.00, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600', description: 'Classic light blue cotton oxford with a tailored fit.' },
  { 
    id: 'm-f-1', 
    name: 'Heritage Leather Boots', 
    gender: 'Men', 
    category: 'Footwear', 
    price: 210.00, 
    rating: 4.9, 
    imageUrl: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=600', 
    description: 'Durable full-grain leather boots with a Goodyear welt.',
    variants: [
      { size: '9' }, { size: '10' }, { size: '11' }
    ]
  },

  // --- CHILDREN'S WEAR ---
  { id: 'c-t-1', name: 'Animated Graphic Tee', gender: 'Children', category: 'Tops', price: 18.00, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1519235106638-30cc49b4f444?auto=format&fit=crop&q=80&w=600', description: 'Soft cotton tee with a playful hand-drawn illustration.' }
];

export const getStoreInventory = (): StoreItem[] => {
  const saved = localStorage.getItem(STORE_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return MOCK_ITEMS;
    }
  }
  return MOCK_ITEMS;
};

export const saveStoreInventory = (items: StoreItem[]) => {
  localStorage.setItem(STORE_STORAGE_KEY, JSON.stringify(items));
};
