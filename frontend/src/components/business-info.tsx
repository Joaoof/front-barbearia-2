import { MapPin, Clock, CreditCard, Instagram, MessageCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { businessInfo } from "@/data/businessData";

interface BusinessInfoProps {
  className?: string;
}

export function BusinessInfo({ className }: BusinessInfoProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um horário na Barbearia Stylo.");
    window.open(`https://wa.me/${businessInfo.socialMedia.whatsapp}?text=${message}`, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${businessInfo.socialMedia.instagram?.replace('@', '')}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${businessInfo.phone}`, '_self');
  };

  return (
    <Card className={`p-6 bg-surface-elevated border-border hover-glow ${className}`}>
      <div className="space-y-6">
        {/* Localização */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Localização
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {businessInfo.address.street}
          </p>
        </div>

        <Separator className="bg-border" />

        {/* Horário de atendimento */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Horário de atendimento
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Seg-Sex</span>
              <span className="text-foreground">{businessInfo.hours.weekdays}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sábado</span>
              <span className="text-foreground">{businessInfo.hours.saturday}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Domingo</span>
              <span className="text-foreground">{businessInfo.hours.sunday}</span>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Formas de pagamento */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-primary" />
            Formas de pagamento
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {businessInfo.paymentMethods.map((method, index) => (
              <span key={index} className="text-muted-foreground">
                {method}
              </span>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Redes Sociais */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Redes Sociais</h3>
          <div className="flex gap-2">
            <Button
              variant="outline" 
              size="sm"
              onClick={handleInstagram}
              className="flex-1 hover:bg-surface-hover border-border"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
            <Button
              variant="outline"
              size="sm" 
              onClick={handleWhatsApp}
              className="flex-1 hover:bg-surface-hover border-border"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Contato */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Contato
          </h3>
          <Button
            variant="outline"
            onClick={handleCall}
            className="w-full justify-start hover:bg-surface-hover border-border"
          >
            <Phone className="w-4 h-4 mr-2" />
            {businessInfo.phone}
          </Button>
        </div>
      </div>
    </Card>
  );
}