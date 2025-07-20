import { useState } from "react";
import { Calendar, Clock, User, ChevronLeft, ChevronRight, X } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { businessData } from "@/data/businessData";
import { ServiceWithBarber, Barber, Service } from "@/types";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: ServiceWithBarber;
  barber?: Barber;
}

export function BookingModal({ isOpen, onClose, service, barber }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState<Service | undefined>(
    service ? businessData.services.find(s => s.id === service.id) : businessData.services[0]
  );
  const [selectedBarber, setSelectedBarber] = useState<Barber | undefined>(
    barber || businessData.barbers[0]
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Generate week days starting from today
  const generateWeekDays = (date: Date) => {
    const days = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const [currentWeek, setCurrentWeek] = useState(generateWeekDays(new Date()));

  // Available time slots matching the image
  const timeSlots = ["16:00", "16:20", "16:40", "17:00", "17:20", "17:40"];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDuration = (minutes: number) => {
    return `${minutes} m`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit',
      month: '2-digit'
    });
  };

  const formatDayName = (date: Date) => {
    const days = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'];
    return days[date.getDay()];
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentWeek[0]);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentWeek(generateWeekDays(newDate));
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.toDateString() === date2.toDateString();
  };

  const handleSubmit = async () => {
    if (!selectedService || !selectedBarber || !selectedTime) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, selecione todos os campos necessários.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Agendamento realizado!",
        description: `Seu horário foi agendado para ${formatDate(selectedDate)} às ${selectedTime}.`,
      });
      
      onClose();
      resetForm();
    } catch (error) {
      toast({
        title: "Erro no agendamento",
        description: "Tente novamente em alguns momentos.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedService(service);
    setSelectedBarber(barber);
    setSelectedDate(new Date());
    setSelectedTime("");
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-surface border-border">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-semibold text-foreground">
            Agendamento
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Service Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Serviços</label>
              <Select value={selectedService?.id} onValueChange={(value) => {
                const foundService = businessData.services.find(s => s.id === value);
                setSelectedService(foundService);
              }}>
                <SelectTrigger className="bg-surface-elevated border-border">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  {businessData.services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Duração</label>
              <div className="p-3 bg-surface-elevated border border-border rounded-md">
                <span className="text-sm text-muted-foreground">
                  {selectedService ? `${formatDuration(selectedService.duration)} - ${formatPrice(selectedService.price)}` : '-'}
                </span>
              </div>
            </div>
          </div>

          {/* Add Service Button */}
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="text-primary border-primary">
              Adicionar Serviço
            </Button>
          </div>

          {/* Calendar Navigation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateWeek('prev')}
                className="p-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-1">
                {currentWeek.map((date, index) => (
                  <Button
                    key={index}
                    variant={isSameDay(date, selectedDate) ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedDate(date)}
                    className={`flex flex-col p-2 h-auto min-w-[60px] ${
                      isSameDay(date, selectedDate) 
                        ? 'bg-primary text-primary-foreground' 
                        : isToday(date) 
                        ? 'bg-cyan-500 text-white' 
                        : ''
                    }`}
                  >
                    <span className="text-xs">{formatDayName(date)}</span>
                    <span className="text-sm font-medium">{formatDate(date)}</span>
                  </Button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateWeek('next')}
                className="p-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Barber Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Selecione o Profissional</label>
            <div className="flex gap-4 justify-center">
              {businessData.barbers.map((barberOption) => (
                <div 
                  key={barberOption.id}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedBarber?.id === barberOption.id 
                      ? 'bg-primary/20 border-2 border-primary' 
                      : 'bg-surface-elevated border border-border hover:bg-surface-hover'
                  }`}
                  onClick={() => setSelectedBarber(barberOption)}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={barberOption.avatar} 
                      alt={barberOption.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedBarber?.id === barberOption.id ? 'text-primary' : 'text-foreground'
                  }`}>
                    {barberOption.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Selecione o Horário</label>
            <div className="flex gap-2 flex-wrap justify-center">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(time)}
                  className={`min-w-[80px] ${
                    selectedTime === time 
                      ? 'bg-primary text-primary-foreground' 
                      : 'border-border hover:bg-surface-hover'
                  }`}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              onClick={handleSubmit}
              variant="gold"
              className="w-full"
              disabled={isLoading || !selectedService || !selectedBarber || !selectedTime}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <LoadingSpinner size="sm" />
                  Agendando...
                </div>
              ) : (
                "Confirmar Agendamento"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}