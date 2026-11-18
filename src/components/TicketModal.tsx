import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  CalendarPlus,
  CheckCircle2,
  MapPin,
  Minus,
  Plus,
  Ticket,
  X,
} from 'lucide-react';
import { downloadEventIcs } from '../utils/calendar';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SectorOption {
  id: string;
  name: string;
  description: string;
  price: number;
  statusLabel: string;
}

const SECTORS: SectorOption[] = [
  {
    id: 'plateia-symphonic',
    name: 'Plateia Symphonic (Frente ao Palco)',
    description: 'Visão frontal privilegiada da orquestra e acústica direta',
    price: 240,
    statusLabel: 'Últimos lugares',
  },
  {
    id: 'plateia-central',
    name: 'Plateia Central',
    description: 'Equilíbrio acústico ideal entre beats e naipes sinfônicos',
    price: 180,
    statusLabel: 'Disponível',
  },
  {
    id: 'mezanino',
    name: 'Mezanino Panorâmico',
    description: 'Vista ampla da cenografia, iluminação volumétrica e orquestra',
    price: 120,
    statusLabel: 'Disponível',
  },
];

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const [selectedSectorId, setSelectedSectorId] = useState<string>(SECTORS[1].id);
  const [quantity, setQuantity] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [reservationCode, setReservationCode] = useState<string | null>(null);

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

  const selectedSector = SECTORS.find((s) => s.id === selectedSectorId) ?? SECTORS[0];
  const totalAmount = selectedSector.price * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 3) {
      setError('Informe seu nome completo para registrar a reserva.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Informe um endereço de e-mail válido para receber o link oficial.');
      return;
    }

    setError(null);
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    setReservationCode(`RBS-SP-${randomSuffix}`);
  };

  const handleResetAndClose = () => {
    setReservationCode(null);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#010612]/82 backdrop-blur-sm"
          onClick={handleResetAndClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ticket-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#041126] border border-[#D4AC5A]/45 shadow-[0_24px_70px_rgba(0,0,0,0.75)]"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 sm:px-7 pt-6 pb-5 border-b border-[#D4AC5A]/20">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#E9C878] uppercase">
                  Canal oficial · Ingressos
                </p>
                <h2
                  id="ticket-modal-title"
                  className="mt-1 text-xl sm:text-2xl font-bold text-white lowercase"
                >
                  red bull symphonic brasil
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#C4D1E4]">
                  <span>08 de agosto · 21h00</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E9C878]" />
                    Auditório Simón Bolívar, São Paulo
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                aria-label="Fechar janela de ingressos"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-[#C4D1E4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {reservationCode ? (
              <div className="px-6 sm:px-7 py-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#E9C878]/15 border border-[#E9C878]/50 flex items-center justify-center text-[#E9C878]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white lowercase">
                  solicitação registrada com sucesso
                </h3>
                <p className="mt-2 text-sm text-[#CDD8E9] max-w-md mx-auto leading-relaxed">
                  Enviamos os detalhes de acesso prioritário e o link oficial de compra para{' '}
                  <strong className="text-white">{email}</strong>.
                </p>

                <div className="mt-6 rounded-xl bg-[#020B1C] border border-[#D4AC5A]/30 px-5 py-4 text-left space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-[#9FB2CC]">Código da reserva</span>
                    <span className="font-mono font-semibold text-[#E9C878] tabular-nums">
                      {reservationCode}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[#9FB2CC]">Setor escolhido</span>
                    <span className="text-white font-medium text-right">{selectedSector.name}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[#9FB2CC]">Quantidade</span>
                    <span className="text-white tabular-nums">
                      {quantity} {quantity === 1 ? 'ingresso' : 'ingressos'}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 pt-2 border-t border-[#D4AC5A]/15">
                    <span className="text-[#9FB2CC]">Valor estimado</span>
                    <span className="text-white font-bold tabular-nums">
                      {formatBRL(totalAmount)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={downloadEventIcs}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AC5A]/70 hover:border-[#F3D992] hover:bg-[#D4AC5A]/10 text-[#E9C878] text-sm font-semibold px-6 py-3 transition-colors cursor-pointer"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    <span>Adicionar à agenda (.ics)</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E4003A] hover:bg-[#FF1952] text-white text-sm font-semibold px-7 py-3 transition-colors cursor-pointer"
                  >
                    Voltar para a página
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="px-6 sm:px-7 py-6 space-y-6">
                {/* Sector selection */}
                <div>
                  <span className="block text-xs font-semibold tracking-[0.16em] text-[#E9C878] uppercase mb-3">
                    1. Escolha o setor
                  </span>
                  <div className="space-y-2.5">
                    {SECTORS.map((sector) => {
                      const active = sector.id === selectedSectorId;
                      return (
                        <button
                          key={sector.id}
                          type="button"
                          onClick={() => setSelectedSectorId(sector.id)}
                          aria-pressed={active}
                          className={`w-full text-left rounded-xl border px-4 py-3.5 transition-all duration-150 cursor-pointer flex items-center justify-between gap-4 ${
                            active
                              ? 'bg-[#081F44] border-[#E9C878] shadow-[0_0_20px_rgba(233,200,120,0.12)]'
                              : 'bg-[#020C1F]/70 border-[#D4AC5A]/25 hover:border-[#D4AC5A]/60'
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white">{sector.name}</p>
                            <p className="text-xs text-[#B6C5DC] mt-0.5">{sector.description}</p>
                            <p className="text-[11px] text-[#E9C878] mt-1 font-medium">
                              {sector.statusLabel}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-base font-bold text-white tabular-nums">
                              {formatBRL(sector.price)}
                            </p>
                            <p className="text-[11px] text-[#9EB0CA]">inteira</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity & Total */}
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[#020B1C] border border-[#D4AC5A]/25 px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-4 h-4 text-[#E9C878]" />
                    <span className="text-sm text-[#D6E0EE] font-medium">Quantidade</span>
                    <div className="inline-flex items-center gap-2 ml-1">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        aria-label="Diminuir quantidade"
                        className="w-8 h-8 rounded-lg border border-[#D4AC5A]/40 inline-flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-40 cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold text-white tabular-nums">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.min(4, q + 1))}
                        disabled={quantity >= 4}
                        aria-label="Aumentar quantidade"
                        className="w-8 h-8 rounded-lg border border-[#D4AC5A]/40 inline-flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-40 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="block text-[11px] text-[#9EB0CA] uppercase tracking-wider">
                      Total estimado
                    </span>
                    <span className="text-lg font-bold text-[#E9C878] tabular-nums">
                      {formatBRL(totalAmount)}
                    </span>
                  </div>
                </div>

                {/* Contact details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="ticket-full-name"
                      className="block text-xs font-medium text-[#CDD8E9] mb-1.5"
                    >
                      Nome completo
                    </label>
                    <input
                      id="ticket-full-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Seu nome"
                      autoComplete="name"
                      className="w-full rounded-lg bg-[#020B1C] border border-[#D4AC5A]/35 px-3.5 py-2.5 text-sm text-white placeholder:text-[#6E83A1] focus:border-[#E9C878] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ticket-email"
                      className="block text-xs font-medium text-[#CDD8E9] mb-1.5"
                    >
                      E-mail para o link oficial
                    </label>
                    <input
                      id="ticket-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="voce@exemplo.com"
                      autoComplete="email"
                      className="w-full rounded-lg bg-[#020B1C] border border-[#D4AC5A]/35 px-3.5 py-2.5 text-sm text-white placeholder:text-[#6E83A1] focus:border-[#E9C878] focus:outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-[#FF6B8B]">
                    {error}
                  </p>
                )}

                <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#9EB0CA] leading-relaxed">
                    Ingressos oficiais sujeitos à disponibilidade no canal da Red Bull Brasil.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E4003A] hover:bg-[#FF1952] active:scale-[0.98] text-white text-sm font-semibold px-7 py-3.5 transition-all shadow-[0_8px_24px_rgba(228,0,58,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>confirmar pré-reserva</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
