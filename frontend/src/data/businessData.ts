import { BusinessInfo, Service, Barber } from '../types';

export const businessInfo: BusinessInfo = {
  name: "Barbearia Stylo",
  logo: "/lovable-uploads/5a19cc12-6276-4d98-bc37-dd2453735a1e.png",
  address: {
    street: "Rua dos Estilistas, 123 - Copacabana, Campinas - SP",
    city: "Campinas",
    zipCode: "13024-456"
  },
  phone: "+55 (19) 99999-9999",
  hours: {
    weekdays: "09:00 - 19:00",
    saturday: "08:00 - 18:00", 
    sunday: "09:00 - 15:00"
  },
  paymentMethods: [
    "Cartão de Débito",
    "Cartão de Crédito", 
    "Pix",
    "Dinheiro"
  ],
  socialMedia: {
    instagram: "@barbearia_stylo",
    whatsapp: "+5519999999999"
  }
};

export const services: Service[] = [
  {
    id: "1",
    name: "CORTE SOCIAL",
    price: 30.00,
    duration: 20,
    category: "hair",
    barberId: "1"
  },
  {
    id: "2",
    name: "Degradê",
    price: 45.00,
    duration: 60,
    category: "hair",
    barberId: "2"
  },
  {
    id: "3",
    name: "surfista",
    price: 50.00,
    duration: 50,
    category: "hair",
    barberId: "2"
  },
  {
    id: "4",
    name: "corte na tesoura",
    price: 40.00,
    duration: 45,
    category: "hair",
    barberId: "1"
  },
  {
    id: "5",
    name: "Americano",
    price: 45.00,
    duration: 55,
    category: "hair",
    barberId: "3"
  },
  {
    id: "6",
    name: "corte militar",
    price: 35.00,
    duration: 40,
    category: "hair",
    barberId: "4"
  },
  {
    id: "7",
    name: "degradê + barba",
    price: 65.00,
    duration: 90,
    category: "combo",
    barberId: "2"
  },
  {
    id: "8",
    name: "degradê + sombrancelha",
    price: 55.00,
    duration: 75,
    category: "combo",
    barberId: "2"
  },
  {
    id: "9",
    name: "corte social + barba",
    price: 65.00,
    duration: 90,
    category: "combo",
    barberId: "1"
  },
  {
    id: "10",
    name: "corte social + sombrancelha",
    price: 55.00,
    duration: 75,
    category: "combo",
    barberId: "1"
  },
  {
    id: "11",
    name: "Low fade",
    price: 55.00,
    duration: 60,
    category: "hair",
    barberId: "2"
  },
  {
    id: "12",
    name: "low fade + barba",
    price: 75.00,
    duration: 95,
    category: "combo",
    barberId: "2"
  },
  {
    id: "13",
    name: "LOW fade + barba + sobrancelha",
    price: 85.00,
    duration: 110,
    category: "combo",
    barberId: "2"
  },
  {
    id: "14",
    name: "degradê + barba + sobrancelha",
    price: 75.00,
    duration: 105,
    category: "combo",
    barberId: "2"
  },
  {
    id: "15",
    name: "social + barba + sobrancelha",
    price: 75.00,
    duration: 105,
    category: "combo",
    barberId: "1"
  },
  {
    id: "16",
    name: "Mid fade",
    price: 55.00,
    duration: 60,
    category: "hair",
    barberId: "3"
  },
  {
    id: "17",
    name: "Mid fade + barba + sobrancelha",
    price: 85.00,
    duration: 110,
    category: "combo",
    barberId: "3"
  },
  {
    id: "18",
    name: "Mid fade + Sobrancelha",
    price: 65.00,
    duration: 80,
    category: "combo",
    barberId: "3"
  },
  {
    id: "19",
    name: "Taper fade",
    price: 55.00,
    duration: 60,
    category: "hair",
    barberId: "4"
  },
  {
    id: "20",
    name: "Taper fade + Sobrancelha",
    price: 65.00,
    duration: 80,
    category: "combo",
    barberId: "4"
  },
  {
    id: "21",
    name: "Mullet",
    price: 65.00,
    duration: 70,
    category: "hair",
    barberId: "3"
  },
  {
    id: "22",
    name: "Barba",
    price: 30.00,
    duration: 30,
    category: "beard",
    barberId: "3"
  },
  {
    id: "23",
    name: "Moicano disfarçado",
    price: 55.00,
    duration: 65,
    category: "hair",
    barberId: "3"
  },
  {
    id: "24",
    name: "Sobrancelha",
    price: 15.00,
    duration: 20,
    category: "styling",
    barberId: "4"
  },
  {
    id: "25",
    name: "Pezinho do cabelo",
    price: 20.00,
    duration: 25,
    category: "styling",
    barberId: "4"
  },
  {
    id: "26",
    name: "Low fade + sobrancelha",
    price: 65.00,
    duration: 80,
    category: "combo",
    barberId: "2"
  }
];

export const barbers: Barber[] = [
  {
    id: "1",
    name: "EDJALMA",
    specialties: ["Corte Social", "Degradê", "Barba"],
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "2", 
    name: "Luan",
    specialties: ["Surfista", "Low Fade", "Styling"],
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "3",
    name: "Carlos",
    specialties: ["Americano", "Mullet", "Barba"],
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "4",
    name: "Anderson",
    specialties: ["Corte Militar", "Degradê", "Sobrancelha"],
    rating: 4.7,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
  }
];

// Combined data object for easier import
export const businessData = {
  info: businessInfo,
  barbers,
  services
};