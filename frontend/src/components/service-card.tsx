import { useState } from "react";
import { User, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceWithBarber } from "@/types";
import { barbers } from "@/data/businessData";
import { BookingModal } from "./booking-modal";

interface ServiceCardProps {
  service: ServiceWithBarber;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const [showBooking, setShowBooking] = useState(false);
  
  const barber = barbers.find(b => b.id === service.barberId);
  const hasBarberImage = barber?.avatar;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0 && mins > 0) {
      return `${hours}h ${mins}min`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${mins}min`;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hair': return 'bg-blue-500/20 text-blue-300';
      case 'beard': return 'bg-orange-500/20 text-orange-300';
      case 'styling': return 'bg-purple-500/20 text-purple-300';
      case 'combo': return 'bg-green-500/20 text-green-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Card className={`service-card border-border bg-card hover:border-primary/30 ${className}`}>
        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            {/* Service Info */}
            <div className="flex items-start gap-3 flex-1">
              {/* Barber Avatar */}
              <div className="relative">
                {hasBarberImage ? (
                  <img 
                    src={barber?.avatar} 
                    alt={barber?.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-surface-elevated border-2 border-primary/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>

              {/* Service Details */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-foreground capitalize">
                    {service.name}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getCategoryColor(service.category)}`}
                  >
                    {service.category === 'combo' ? 'Combo' :
                     service.category === 'hair' ? 'Cabelo' :
                     service.category === 'beard' ? 'Barba' : 'Styling'}
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {barber?.name || 'Profissional'}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDuration(service.duration)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(service.price)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col items-end gap-2">
              <Button 
                onClick={() => setShowBooking(true)}
                variant="gold"
                size="sm"
              >
                Agendar
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <BookingModal
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        service={service}
        barber={barber}
      />
    </>
  );
}