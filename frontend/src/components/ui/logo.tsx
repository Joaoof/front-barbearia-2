import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center border-2 border-gold">
          <span className="text-2xl font-bold text-black">S</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-background"></div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <h1 className="text-xl font-display font-bold text-foreground">
            Barbearia
          </h1>
          <span className="text-lg font-display text-gold tracking-wide">
            STYLO
          </span>
        </div>
      )}
    </div>
  );
}