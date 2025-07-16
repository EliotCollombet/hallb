"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/ui/dialog";
import { Button } from "@/app/ui/button";

interface TrialPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
  subscribeUrl?: string;
  freeTrialUrl?: string;
  delay?: number;
}

export default function TrialPopup({
  isOpen: controlledIsOpen,
  onClose,
  onOpenChange,
  subscribeUrl = "https://example.com/subscribe",
  freeTrialUrl = "https://example.com/free-trial",
  delay = 5000,
}: TrialPopupProps) {
  const [isOpen, setIsOpen] = useState(
    controlledIsOpen !== undefined ? controlledIsOpen : false,
  );

  useEffect(() => {
    // If component is controlled externally, sync with the controlled state
    if (controlledIsOpen !== undefined) {
      setIsOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  useEffect(() => {
    // Only auto-show if not controlled externally
    if (controlledIsOpen === undefined) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, controlledIsOpen]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
    if (!open && onClose) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-secondary"
        onInteractOutside={(event) => {
            event.preventDefault(); // Empêche la fermeture au clic hors contenu
        }}>
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl font-bold text-center">
            Séance d'essai gratuite
          </DialogTitle>
          <Button
            variant="ghost"
            className="text-primary absolute right-4 top-4 rounded-full p-2 h-auto w-auto"
            onClick={() => handleOpenChange(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <h3 className="text-accent text-xl font-semibold">Essayez notre salle gratuitement !</h3>
            <p className="text-tertiary">
              Découvrez nos installations de pointe et nos coachs experts avec une séance d'essai gratuite. Sans engagement !
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-accent flex-1"
              onClick={() => window.open(subscribeUrl, "_blank")}
            >
              S'abonner
            </Button>
            <Button
              className="flex-1"
              onClick={() => window.open(freeTrialUrl, "_blank")}
            >
              Réserver sa séance d'essai
            </Button>
          </div>

          <p className="text-xs text-center text-tertiary mt-4">
            Offre à durée limitée.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
