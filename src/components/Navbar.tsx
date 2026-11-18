import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenTickets: () => void;
}

const NAV_LINKS = [
  { href: '#evento', label: 'Evento' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#ingressos', label: 'Ingressos' },
];

export function Navbar({ onOpenTickets }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 bg-[#020B1C]/82 backdrop-blur-md border-b border-[#D4AC5A]/15">
      <div className="max-w-[1200px] mx-auto h-full px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#hero"
          className="font-serif text-sm sm:text-base font-bold tracking-[0.14em] text-[#E9C878] hover:text-[#F5DE9B] transition-colors whitespace-nowrap shrink-0"
        >
          RED BULL SYMPHONIC
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#D6E0EE] hover:text-[#E9C878] transition-colors relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#D4AC5A] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenTickets}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#E4003A] hover:bg-[#FF1952] active:scale-[0.98] text-white text-xs font-semibold px-5 py-2.5 transition-all duration-150 shadow-[0_4px_18px_rgba(228,0,58,0.35)] cursor-pointer whitespace-nowrap shrink-0"
          >
            Garanta seu ingresso
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#E9C878] hover:bg-white/5 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#030F24]/98 border-b border-[#D4AC5A]/25 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3" aria-label="Navegação móvel">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-base font-medium text-[#E6ECF5] hover:text-[#E9C878] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenTickets();
              }}
              className="mt-2 w-full rounded-full bg-[#E4003A] hover:bg-[#FF1952] text-white text-sm font-semibold py-3 px-6 transition-colors cursor-pointer"
            >
              Garanta seu ingresso
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
