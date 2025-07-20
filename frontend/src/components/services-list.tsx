import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ServiceCard } from "./service-card";
import { services, barbers } from "@/data/businessData";
import { ServiceWithBarber } from "@/types";

interface ServicesListProps {
  className?: string;
}

export function ServicesList({ className }: ServicesListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);

  // Combine services with barber data
  const servicesWithBarbers: ServiceWithBarber[] = services.map(service => ({
    ...service,
    barber: barbers.find(barber => barber.id === service.barberId)
  }));

  // Filter services
  const filteredServices = servicesWithBarbers.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.barber?.name.toLowerCase().includes(searchTerm.toLowerCase() || "");
    
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    const matchesBarber = !selectedBarber || service.barberId === selectedBarber;

    return matchesSearch && matchesCategory && matchesBarber;
  });

  const categories = [
    { value: 'hair', label: 'Cabelo', count: services.filter(s => s.category === 'hair').length },
    { value: 'beard', label: 'Barba', count: services.filter(s => s.category === 'beard').length },
    { value: 'styling', label: 'Styling', count: services.filter(s => s.category === 'styling').length },
    { value: 'combo', label: 'Combos', count: services.filter(s => s.category === 'combo').length },
  ];

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedBarber(null);
    setSearchTerm("");
  };

  const hasActiveFilters = selectedCategory || selectedBarber || searchTerm;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar serviços ou profissionais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-border hover:bg-surface-hover">
                  <Filter className="w-4 h-4 mr-2" />
                  {selectedCategory ? 
                    categories.find(c => c.value === selectedCategory)?.label : 
                    'Categoria'
                  }
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-surface border-border">
                <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                  Todas as categorias
                </DropdownMenuItem>
                {categories.map(category => (
                  <DropdownMenuItem 
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {category.label} ({category.count})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Barber Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-border hover:bg-surface-hover">
                  <Filter className="w-4 h-4 mr-2" />
                  {selectedBarber ? 
                    barbers.find(b => b.id === selectedBarber)?.name : 
                    'Profissional'
                  }
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-surface border-border">
                <DropdownMenuItem onClick={() => setSelectedBarber(null)}>
                  Todos os profissionais
                </DropdownMenuItem>
                {barbers.map(barber => (
                  <DropdownMenuItem 
                    key={barber.id}
                    onClick={() => setSelectedBarber(barber.id)}
                  >
                    {barber.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Filtros ativos:</span>
            {selectedCategory && (
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {categories.find(c => c.value === selectedCategory)?.label}
              </Badge>
            )}
            {selectedBarber && (
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {barbers.find(b => b.id === selectedBarber)?.name}
              </Badge>
            )}
            {searchTerm && (
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                "{searchTerm}"
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Limpar filtros
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredServices.length} serviço{filteredServices.length !== 1 ? 's' : ''} encontrado{filteredServices.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-3">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-surface-elevated rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Nenhum serviço encontrado
            </h3>
            <p className="text-muted-foreground mb-4">
              Tente ajustar os filtros ou termo de busca.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}