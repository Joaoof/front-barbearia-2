// Type definitions for Barbearia Stylo

export interface Barber {
  id: string;
  name: string;
  avatar: string;
  specialties: string[];
  rating: number;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  description?: string;
  barberId?: string;
  category: 'hair' | 'beard' | 'styling' | 'combo';
}

export interface ServiceWithBarber extends Service {
  barber?: Barber;
}

export interface BusinessInfo {
  name: string;
  logo: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  phone: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  paymentMethods: string[];
  socialMedia: {
    instagram?: string;
    whatsapp?: string;
    facebook?: string;
  };
}

export interface Appointment {
  id: string;
  serviceId: string;
  barberId: string;
  date: Date;
  time: string;
  customerName: string;
  customerPhone: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface TimeSlot {
  time: string;
  available: boolean;
}