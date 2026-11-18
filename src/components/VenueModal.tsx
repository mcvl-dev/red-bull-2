import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CalendarPlus, Clock, MapPin, TrainFront, X } from 'lucide-react';
import { downloadEventIcs } from '../utils/calendar';

interface VenueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTickets: () => void;
}

export function VenueModal({ isOpen, onClose, onOpenTickets }: VenueModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#010612]/82 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="venue-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-[#041126] border border-[#D4AC5A]/45 shadow-[0_24px_70px_rgba(0,0,0,0.75)] overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5 border-b border-[#D4AC5A]/20">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#E9C878] uppercase">
                  Informações do local
                </p>
                <h2 id="venue-modal-title" className="mt-1 text-xl font-bold text-white lowercase">
                  auditório simón bolívar
                </h2>
                <p className="mt-1 text-xs text-[#C4D1E4]">
                  Memorial da América Latina · São Paulo
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar informações do local"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-[#C4D1E4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-5 text-sm text-[#D6E0EE]">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#E9C878] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Endereço</p>
                  <p className="mt-0.5 text-[#C4D1E4] leading-relaxed">
                    Av. Mário de Andrade, 664 — Barra Funda, São Paulo – SP, 01156-001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#E9C878] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Horários · 08 de agosto</p>
                  <p className="mt-0.5 text-[#C4D1E4]">
                    Abertura dos portões: 19h30 · Início do espetáculo: 21h00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <TrainFront className="w-5 h-5 text-[#E9C878] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Como chegar</p>
                  <p className="mt-0.5 text-[#C4D1E4] leading-relaxed">
                    Acesso facilitado a 3 minutos a pé da Estação Palmeiras-Barra Funda (Linha
                    3-Vermelha do Metrô e linhas CPTM). Acessibilidade completa na plateia e
                    mezanino.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D4AC5A]/20 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={downloadEventIcs}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AC5A]/70 hover:border-[#F3D992] hover:bg-[#D4AC5A]/10 text-[#E9C878] text-xs font-semibold px-5 py-3 transition-colors cursor-pointer"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Salvar 08 de agosto (.ics)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenTickets();
                  }}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-[#E4003A] hover:bg-[#FF1952] text-white text-xs font-semibold px-5 py-3 transition-colors cursor-pointer"
                >
                  Garanta seu ingresso
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
