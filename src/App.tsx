/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ExperienceSection } from './components/ExperienceSection';
import { TicketModal } from './components/TicketModal';
import { VenueModal } from './components/VenueModal';
import {
  FooterGoldWaves,
  HeroGoldWave,
  InfoCalendarIcon,
  InfoLocationIcon,
  InfoPeopleIcon,
  InfoTicketIcon,
  RedBullSymphonicCrest,
} from './components/SymphonicOrnaments';
import { downloadEventIcs } from './utils/calendar';

const HERO_STAGE_IMAGE = '/src/assets/images/hero_symphonic_stage_1794952154130.jpg';
const ABOUT_ARTIST_IMAGE = '/src/assets/images/sobre_symphonic_brasil_1795002219478.jpg';
const FOOTER_ORCHESTRA_IMAGE = '/src/assets/images/footer_orchestra_backdrop_1794952156130.jpg';

export default function App() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [venueModalOpen, setVenueModalOpen] = useState(false);
  const [calendarSaved, setCalendarSaved] = useState(false);

  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [aboutImgFailed, setAboutImgFailed] = useState(false);
  const [footerImgFailed, setFooterImgFailed] = useState(false);

  const handleSaveCalendar = () => {
    downloadEventIcs();
    setCalendarSaved(true);
    window.setTimeout(() => setCalendarSaved(false), 3200);
  };

  return (
    <div className="min-h-screen bg-[#020B1C] text-white flex flex-col">
      <Navbar onOpenTickets={() => setTicketModalOpen(true)} />

      <main className="flex-1">
        {/* ================================================================
            SECTION 1: FULL-BLEED CINEMATIC HERO
           ================================================================ */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[#020B1C] pt-8 sm:pt-12 lg:pt-14 pb-20 sm:pb-24 lg:pb-28"
        >
          {/* Hero Stage Photography Layer + Resilient Spotlight Fallback */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            {!heroImgFailed ? (
              <img
                src={HERO_STAGE_IMAGE}
                alt="Palco do Red Bull Symphonic Brasil com motocicleta esportiva, artistas sob holofotes azuis e orquestra ao fundo"
                referrerPolicy="no-referrer"
                onError={() => setHeroImgFailed(true)}
                className="w-full h-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-right opacity-95"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 80% at 75% 35%, rgba(44,125,219,0.42), rgba(2,11,28,0.96) 72%)',
                }}
              />
            )}

            {/* Measured contrast scrims preserving legibility on the left while spotlighting the right stage */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/86 via-42% to-[#020B1C]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C] via-transparent to-[#020B1C]/45" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020B1C] to-transparent" />
          </div>

          {/* Hero Foreground Copy */}
          <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8">
            <div className="max-w-[540px]">
              {/* Ornate Red Bull Symphonic Brasil Crest */}
              <div className="mb-6 sm:mb-7 flex justify-start">
                <RedBullSymphonicCrest />
              </div>

              {/* Primary Display Headline */}
              <h1 className="text-[clamp(2.15rem,4vw,3.35rem)] font-bold leading-[1.06] tracking-tight text-white lowercase [text-wrap:balance]">
                red bull symphonic brasil
              </h1>

              {/* Gold Italic Subtitle */}
              <p className="mt-3 text-lg sm:text-[21px] font-semibold italic text-[#E9C878] leading-snug lowercase">
                o encontro entre o funk paulista e a música clássica
              </p>

              {/* Event Synopsis */}
              <p className="mt-4 sm:mt-5 text-[15px] sm:text-base text-[#DCE4F0] leading-[1.6] max-w-[465px] lowercase">
                mc hariel, xuxa levy e orquestra se unem em uma experiência imersiva que mistura
                performance, arranjos orquestrais e a força do funk paulista.
              </p>

              {/* CTA Row: Crimson Pill Primary Action + Gold-Underlined Secondary Link */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-6 sm:gap-7">
                <button
                  type="button"
                  onClick={() => setTicketModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E4003A] hover:bg-[#FF1952] active:scale-[0.98] text-white text-[15px] font-semibold px-7 sm:px-8 py-3.5 transition-all duration-150 shadow-[0_10px_30px_rgba(228,0,58,0.42)] cursor-pointer lowercase whitespace-nowrap shrink-0"
                >
                  <span>garanta seu ingresso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#sobre"
                  className="inline-flex items-center text-[15px] font-medium text-white hover:text-[#E9C878] transition-colors pb-1 border-b-2 border-[#D4AC5A] lowercase whitespace-nowrap shrink-0"
                >
                  saiba mais
                </a>
              </div>
            </div>
          </div>

          {/* Flowing Multi-Strand Golden Sound-Wave Ribbon */}
          <div className="relative z-10 mt-10 sm:mt-14 lg:mt-16 -mb-20 sm:-mb-24 lg:-mb-28">
            <HeroGoldWave />
          </div>
        </section>

        {/* ================================================================
            SECTION 2: 4-COLUMN EVENT DETAILS BAR
           ================================================================ */}
        <section
          id="evento"
          aria-label="Informações principais do evento"
          className="relative bg-[#030F24] border-b border-[#D4AC5A]/20 py-10 sm:py-12 scroll-mt-16"
        >
          <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {/* 1. QUANDO */}
              <button
                type="button"
                onClick={handleSaveCalendar}
                className="group text-left lg:pr-7 lg:border-r lg:border-[#D4AC5A]/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <InfoCalendarIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.08em] text-[#E9C878] uppercase">
                    QUANDO
                  </span>
                </div>
                <p className="mt-3 text-xl sm:text-[22px] font-bold text-white lowercase tracking-tight group-hover:text-[#F3D992] transition-colors">
                  08 de agosto
                </p>
                <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#9FB3CE] group-hover:text-[#E9C878] transition-colors lowercase">
                  {calendarSaved ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#E9C878]" />
                      <span>lembrete salvo (.ics)</span>
                    </>
                  ) : (
                    <span>salvar na agenda</span>
                  )}
                </span>
              </button>

              {/* 2. ONDE */}
              <button
                type="button"
                onClick={() => setVenueModalOpen(true)}
                className="group text-left lg:px-7 lg:border-r lg:border-[#D4AC5A]/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <InfoLocationIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.08em] text-[#E9C878] uppercase">
                    ONDE
                  </span>
                </div>
                <p className="mt-3 text-[15px] text-[#EEF3FA] leading-[1.55] lowercase group-hover:text-white transition-colors">
                  auditório simón bolívar
                  <br />
                  memorial da américa latina
                  <br />
                  são paulo
                </p>
              </button>

              {/* 3. QUEM PARTICIPA */}
              <a
                href="#sobre"
                className="group text-left lg:px-7 lg:border-r lg:border-[#D4AC5A]/40 transition-colors block"
              >
                <div className="flex items-center gap-2.5">
                  <InfoPeopleIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.08em] text-[#E9C878] uppercase">
                    QUEM PARTICIPA
                  </span>
                </div>
                <p className="mt-3 text-[15px] text-[#EEF3FA] leading-[1.55] lowercase group-hover:text-white transition-colors">
                  mc hariel
                  <br />
                  xuxa levy
                  <br />
                  orquestra
                </p>
              </a>

              {/* 4. INGRESSOS */}
              <button
                type="button"
                onClick={() => setTicketModalOpen(true)}
                className="group text-left lg:pl-7 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <InfoTicketIcon className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.08em] text-[#E9C878] uppercase">
                    INGRESSOS
                  </span>
                </div>
                <p className="mt-3 text-[15px] text-[#EEF3FA] leading-[1.55] lowercase group-hover:text-[#F3D992] transition-colors">
                  disponíveis no canal oficial da red bull e no link oficial de compra
                </p>
              </button>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3: ABOUT — "sobre o red bull symphonic"
           ================================================================ */}
        <section
          id="sobre"
          className="relative overflow-hidden bg-[#041126] border-b border-[#D4AC5A]/15 min-h-[380px] sm:min-h-[430px] lg:min-h-[470px] flex items-center scroll-mt-16"
        >
          {/* Right-Anchored Artist Performance Editorial Photo */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            {!aboutImgFailed ? (
              <img
                src={ABOUT_ARTIST_IMAGE}
                alt="Performance ao vivo de MC Hariel com orquestra e regência no palco do Red Bull Symphonic Brasil"
                referrerPolicy="no-referrer"
                onError={() => setAboutImgFailed(true)}
                className="w-full h-full object-cover object-[72%_20%] sm:object-[70%_20%] lg:object-[75%_center]"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background:
                    'radial-gradient(circle at 78% 45%, rgba(233,200,120,0.22), rgba(4,17,38,0.98) 65%)',
                }}
              />
            )}

            {/* Smooth midnight navy fade across the left text column */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030F24] via-[#030F24]/92 via-45% to-[#030F24]/15" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030F24]/55 via-transparent to-[#020B1C]/75" />
          </div>

          <div className="relative z-10 w-full max-w-[1160px] mx-auto px-5 sm:px-8 py-14 sm:py-16 lg:py-20">
            <div className="max-w-[520px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-white leading-[1.15] lowercase [text-wrap:balance]">
                sobre o red bull symphonic
              </h2>

              {/* Short Gold Accent Line matching the design */}
              <div className="w-14 h-[2px] bg-[#E9C878] mt-4 mb-6" aria-hidden="true" />

              <p className="text-[15px] sm:text-[16.5px] text-[#E4ECF7] leading-[1.68] lowercase">
                o projeto propõe a união entre o funk paulista e a música clássica em um espetáculo
                ao vivo que combina beats, cordas, metais, coral e narrativa visual. mais do que um
                show, é uma experiência musical criada para valorizar repertórios, referências e a
                potência cultural do gênero.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4: EXPERIENCE — "experiência"
           ================================================================ */}
        <ExperienceSection onOpenTickets={() => setTicketModalOpen(true)} />

        {/* ================================================================
            SECTION 5: ORCHESTRA FINALE CTA — "viva essa experiência"
           ================================================================ */}
        <section
          id="ingressos"
          className="relative overflow-hidden bg-[#020B1C] pt-14 sm:pt-20 pb-20 sm:pb-24 scroll-mt-16"
        >
          {/* Full-Bleed Orchestra Silhouettes & Blue Spotlights Backdrop */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            {!footerImgFailed ? (
              <img
                src={FOOTER_ORCHESTRA_IMAGE}
                alt="Músicos da orquestra sinfônica iluminados por feixes de luz azul no palco"
                referrerPolicy="no-referrer"
                onError={() => setFooterImgFailed(true)}
                className="w-full h-full object-cover object-center opacity-85"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background:
                    'radial-gradient(circle at 18% 55%, rgba(29,104,184,0.36), transparent 45%), radial-gradient(circle at 82% 55%, rgba(29,104,184,0.36), transparent 45%)',
                }}
              />
            )}

            {/* Measured center dark vignette so gold headline & crimson button remain crisp */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 52% 68% at 50% 48%, rgba(2,11,28,0.88) 0%, rgba(2,11,28,0.42) 65%, rgba(2,11,28,0.3) 100%)',
              }}
            />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#020B1C] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020B1C] via-[#020B1C]/75 to-transparent" />
          </div>

          {/* Centered CTA Content */}
          <div className="relative z-10 max-w-[780px] mx-auto px-5 sm:px-8 text-center pt-4 pb-16 sm:pb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#E9C878] lowercase [text-wrap:balance]">
              viva essa experiência
            </h2>

            <p className="mt-4 text-[15px] sm:text-lg text-[#E6EEF9] leading-relaxed max-w-[520px] mx-auto lowercase">
              acesse o canal oficial da red bull para consultar informações atualizadas e garantir
              seu ingresso.
            </p>

            <div className="mt-8 sm:mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => setTicketModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E4003A] hover:bg-[#FF1952] active:scale-[0.98] text-white text-base font-semibold px-9 py-4 transition-all duration-150 shadow-[0_12px_34px_rgba(228,0,58,0.48)] cursor-pointer lowercase whitespace-nowrap shrink-0"
              >
                <span>garanta seu ingresso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sweeping Golden Corner Ribbons */}
          <FooterGoldWaves />

          {/* Quiet Signature Footer Bar */}
          <footer className="relative z-10 max-w-[1160px] mx-auto px-5 sm:px-8 pt-6">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <span className="h-[1px] w-10 sm:w-16 bg-[#D4AC5A]/70" aria-hidden="true" />
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.34em] text-[#E6ECF5] uppercase text-center pl-[0.34em]">
                RED BULL SYMPHONIC BRASIL
              </p>
              <span className="h-[1px] w-10 sm:w-16 bg-[#D4AC5A]/70" aria-hidden="true" />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#9BB0CB]">
              <button
                type="button"
                onClick={() => setVenueModalOpen(true)}
                className="hover:text-[#E9C878] transition-colors cursor-pointer lowercase"
              >
                auditório simón bolívar · são paulo
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={handleSaveCalendar}
                className="hover:text-[#E9C878] transition-colors cursor-pointer lowercase"
              >
                08 de agosto · salvar na agenda
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setTicketModalOpen(true)}
                className="hover:text-[#E9C878] transition-colors cursor-pointer lowercase"
              >
                ingressos oficiais
              </button>
            </div>
          </footer>
        </section>
      </main>

      {/* Interactive Modals */}
      <TicketModal isOpen={ticketModalOpen} onClose={() => setTicketModalOpen(false)} />
      <VenueModal
        isOpen={venueModalOpen}
        onClose={() => setVenueModalOpen(false)}
        onOpenTickets={() => setTicketModalOpen(true)}
      />
    </div>
  );
}
