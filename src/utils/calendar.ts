/**
 * Generates and triggers download of an iCalendar (.ics) file
 * for the Red Bull Symphonic Brasil event on August 8th.
 */
export function downloadEventIcs() {
  const year = new Date().getFullYear();
  const nextAug8 = new Date(year, 7, 8, 21, 0, 0);
  const eventYear = nextAug8.getTime() < Date.now() ? year + 1 : year;

  const pad = (n: number) => String(n).padStart(2, '0');
  const dtStamp = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}Z$/, 'Z');

  const dtStart = `${eventYear}0808T210000`;
  const dtEnd = `${eventYear}0808T233000`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Red Bull Symphonic Brasil//PT-BR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:redbull-symphonic-brasil-${eventYear}@symphonicbrasil.local`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    'SUMMARY:Red Bull Symphonic Brasil — MC Hariel, Xuxa Levy e Orquestra',
    'DESCRIPTION:O encontro entre o funk paulista e a música clássica. MC Hariel, maestro Xuxa Levy e orquestra ao vivo em São Paulo.',
    'LOCATION:Auditório Simón Bolívar - Memorial da América Latina, Av. Mário de Andrade, 664 - Barra Funda, São Paulo - SP',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `red-bull-symphonic-brasil-${eventYear}-${pad(8)}-${pad(8)}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
