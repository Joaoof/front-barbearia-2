import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { BusinessInfo } from "@/components/business-info";
import { ServicesList } from "@/components/services-list";
import { LoginModal } from "@/components/login-modal";

const Index = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                Meus Agendamentos
              </Button>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                Minhas Assinaturas
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsLoginOpen(true)}
                className="border-border hover:bg-surface-hover"
              >
                Login
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-border">
                    <Menu className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-surface border-border p-0">
                  <BusinessInfo className="m-4" />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="fade-in">
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                  Nossos Serviços
                </h2>
                <p className="text-muted-foreground">
                  Escolha o serviço ideal e agende seu horário com nossos profissionais.
                </p>
              </div>
              
              <ServicesList />
            </div>
          </div>

          {/* Business Info Sidebar - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <BusinessInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Desktop Info Modal */}
      <Sheet open={isInfoOpen} onOpenChange={setIsInfoOpen}>
        <SheetContent side="right" className="bg-surface border-border p-0">
          <BusinessInfo className="m-4" />
        </SheetContent>
      </Sheet>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      {/* Footer */}
      <footer className="border-t border-border bg-surface/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo showText={false} />
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Barbearia Stylo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
