import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import {
  BeamedNoteSvg,
  EqualizerGoldIcon,
  MicrophoneGoldIcon,
  TrebleClefSvg,
  ViolinGoldIcon,
} from './SymphonicOrnaments';

interface ExperiencePillar {
  id: 'performance' | 'orquestra' | 'imersao';
  title: string;
  summary: string;
  details: string;
  highlights: string[];
  icon: React.ReactNode;
}

interface ExperienceSectionProps {
  onOpenTickets: () => void;
}

const PILLARS: ExperiencePillar[] = [
  {
    id: 'performance',
    title: 'performance ao vivo',
    summary: 'show com repertório especial e leitura orquestrada',
    details:
      'mc hariel sobe ao palco do auditório simón bolívar com sucessos marcantes de sua trajetória reimaginados em três atos narrativos — unindo a cadência do funk paulista à intensidade dramática da sala de concerto.',
    highlights: [
      'repertório inédito arranjado exclusivamente para a edição brasil',
      'transições entre beats graves, voz em primeiro plano e coro sinfônico',
      'participações e momentos acústicos criados para a noite de 08 de agosto',
    ],
    icon: <MicrophoneGoldIcon className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />,
  },
  {
    id: 'orquestra',
    title: 'orquestra de fluxo',
    summary: 'músicos e arranjos que ampliam a experiência sonora',
    details:
      'sob direção musical e regência de xuxa levy, a formação reúne naipes completos de cordas, metais, sopros e percussão sinfônica em diálogo contínuo com as linhas rítmicas das periferias de são paulo.',
    highlights: [
      'regência e arranjos originais assinados por xuxa levy',
      'cordas, metais, percussão clássica e coral em formação especial',
      'dinâmica sonora pensada para a acústica do memorial da américa latina',
    ],
    icon: <ViolinGoldIcon className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />,
  },
  {
    id: 'imersao',
    title: 'imersão visual',
    summary: 'cenografia, luz e direção artística para um espetáculo marcante',
    details:
      'desenho de luz arquitetural, projeções atmosféricas e elementos cênicos da cultura urbana transformam o palco em uma narrativa audiovisual contínua do primeiro acorde ao bis.',
    highlights: [
      'iluminação volumétrica sincronizada em tempo real com a regência',
      'cenografia autoral conectando referências das ruas à arquitetura de oscar niemeyer',
      'direção artística concebida para experiência presencial única em são paulo',
    ],
    icon: <EqualizerGoldIcon className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />,
  },
];

export function ExperienceSection({ onOpenTickets }: ExperienceSectionProps) {
  const [selectedId, setSelectedId] = useState<ExperiencePillar['id'] | null>(null);

  const selectedPillar = PILLARS.find((p) => p.id === selectedId) ?? null;

  const handleToggle = (id: ExperiencePillar['id']) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="experiencia"
      className="relative bg-[#020B1C] py-16 sm:py-20 lg:py-24 scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Ornate Musical Header: Treble Clef —— experiência —— Beamed Note */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-[820px] mx-auto mb-11 sm:mb-14">
          <TrebleClefSvg className="w-5 h-7 sm:w-6 sm:h-8 shrink-0" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AC5A]/80 via-[#D4AC5A]/55 to-[#D4AC5A]/20" />
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight text-white lowercase px-1 sm:px-2">
            experiência
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-[#D4AC5A]/80 via-[#D4AC5A]/55 to-[#D4AC5A]/20" />
          <BeamedNoteSvg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
        </div>

        {/* 3 Ornate Gold-Bordered Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {PILLARS.map((pillar) => {
            const isActive = selectedId === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => handleToggle(pillar.id)}
                aria-expanded={isActive}
                className={`group text-left rounded-xl border px-5 sm:px-6 py-6 sm:py-7 transition-all duration-200 cursor-pointer flex items-center gap-4 sm:gap-5 ${
                  isActive
                    ? 'bg-[#081D3E]/90 border-[#F3D992] shadow-[0_0_26px_rgba(233,200,120,0.16)]'
                    : 'bg-[#041229]/75 border-[#D4AC5A]/60 hover:border-[#F0D182] hover:bg-[#061836]/85'
                }`}
              >
                <div className="transition-transform duration-200 group-hover:scale-105">
                  {pillar.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-[17px] font-bold text-white lowercase tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-[#E9C878]/75 shrink-0 transition-transform duration-200 ${
                        isActive ? 'rotate-180 text-[#F3D992]' : 'group-hover:text-[#E9C878]'
                      }`}
                    />
                  </div>
                  <p className="mt-1.5 text-sm text-[#CDD8E9] leading-relaxed lowercase">
                    {pillar.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Detail Drawer when a card is selected */}
        <AnimatePresence mode="wait">
          {selectedPillar && (
            <motion.div
              key={selectedPillar.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 rounded-xl border border-[#D4AC5A]/40 bg-[#05142C]/90 px-6 sm:px-8 py-6 sm:py-7"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#E9C878] uppercase">
                    bastidores da experiência
                  </p>
                  <h4 className="mt-1.5 text-xl font-bold text-white lowercase">
                    {selectedPillar.title}
                  </h4>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#D7E1F0] leading-relaxed lowercase">
                    {selectedPillar.details}
                  </p>
                </div>

                <div className="lg:col-span-6 lg:border-l lg:border-[#D4AC5A]/25 lg:pl-7 flex flex-col justify-between gap-5">
                  <ul className="space-y-2.5">
                    {selectedPillar.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#E4ECF7] leading-relaxed lowercase"
                      >
                        <span className="mt-2 h-[1.5px] w-3 bg-[#E9C878] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-2 border-t border-[#D4AC5A]/15">
                    <button
                      type="button"
                      onClick={onOpenTickets}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#E9C878] hover:text-[#F5DE9B] transition-colors cursor-pointer lowercase"
                    >
                      <span>garanta seu lugar neste espetáculo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      className="text-xs text-[#A9BAD3] hover:text-white transition-colors cursor-pointer lowercase"
                    >
                      fechar detalhes
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle golden hairline separating Experience from Orchestra Finale */}
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8 mt-16 sm:mt-20">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AC5A]/55 to-transparent" />
      </div>
    </section>
  );
}
