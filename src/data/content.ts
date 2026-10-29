// Tot conținutul site-ului e aici. Editează textele, contactele și linkurile fără să atingi componentele.

export const site = {
  name: 'Mr B Sax',
  artist: 'Bogdan Roman Alexandru',
  tagline: 'Sound with distinction',
  phone: '+40 700 000 000', // TODO: număr real
  whatsapp: '40700000000', // TODO: fără + și fără spații
  email: 'contact@mrbsax.ro', // TODO: email real
}

// TODO: înlocuiește cu paginile reale ale artistului (acum duc la prima pagină a rețelei).
export const socials = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/' },
] as const

// Textul butoanelor principale. Alternative: 'Rezervă un show', 'Hai să colaborăm', 'Planifică evenimentul', 'Cere disponibilitatea'.
export const cta = 'Solicită o ofertă'

export type Slide = {
  script: string; title: string; text: string; button: string; href: string
  side: 'left' | 'right' // pe ce parte stă textul
  focus: string // ce parte din poză se vede pe mobil
}

export const slides: Slide[] = [
  { script: 'Când muzica', title: 'devine emoție', text: 'Un sunet inconfundabil. O prezență aparte. Un spectacol care transformă fiecare eveniment într-o experiență memorabilă.', button: 'Descoperă povestea mea', href: '#despre', side: 'left', focus: '68% 50%' },
  { script: 'Ritmul care cucerește.', title: 'Sunetul care rămâne.', text: 'De la melodii care ating sufletul până la ritmuri care ridică invitații în picioare, saxofonul aduce acel ceva special pe care îl vei simți, nu doar îl vei auzi.', button: 'Descoperă experiența live', href: '#live', side: 'right', focus: '22% 50%' },
  { script: 'Un instrument', title: 'O mie de emoții.', text: 'Prin pasiune, expresivitate și interpretări live, fiecare apariție devine un moment deosebit. Mr B Sax – muzica autentică, cu personalitate.', button: 'Explorează conceptul', href: '#despre', side: 'right', focus: '22% 50%' },
  { script: 'Povestea evenimentului tău', title: 'merită un sunet special.', text: 'Nunți, petreceri private sau evenimente corporate – Bogdan aduce farmecul saxofonului live și creează o atmosferă pe care invitații o vor ține minte.', button: 'Hai să creăm un moment memorabil', href: '#contact', side: 'right', focus: '22% 50%' },
]

export const about = {
  kicker: 'Despre Mr B Sax',
  title: 'Experiență, rafinament și un sunet inconfundabil.',
  lead: 'În spatele fiecărei interpretări memorabile se află ani de studiu, disciplină și pasiune pentru muzică.',
  paragraphs: [
    'Bogdan Roman Alexandru, cunoscut sub numele artistic Mr B Sax, este muzician, saxofonist, dirijor și instructor de muzică militară, cu o carieră construită în jurul profesionalismului, al performanței și al respectului pentru artă.',
    'Experiența sa în muzica militară, activitatea de dirijor și pregătirea muzicală îi oferă o perspectivă complexă asupra sunetului, ritmului și expresivității. De-a lungul carierei, a explorat universuri muzicale diverse, de la muzica clasică și jazz până la pop, evergreen și folclor.',
    'Astăzi, prin proiectul Mr B Sax, această experiență întâlnește energia spectacolelor live și dorința de a transforma fiecare eveniment într-o experiență aparte.',
    'Fie că vorbim despre eleganța unei nunți, atmosfera unui eveniment corporate sau energia unei petreceri private, saxofonul devine elementul care unește muzica, emoția și publicul.',
    'Pentru Mr B Sax, fiecare apariție înseamnă mai mult decât o interpretare. Înseamnă prezență scenică, adaptabilitate și atenție la fiecare moment.',
  ],
  closing: 'Ani de experiență. Un instrument cu personalitate. Emoții care rămân.',
  styles: ['Clasic', 'Jazz', 'Pop', 'Evergreen', 'Folclor'],
}

export type Study = { title: string; place: string; note?: string; logo?: string }
export const education: Study[] = [
  { title: 'Studii universitare de licență', place: 'Universitatea Națională de Muzică din București', note: 'Interpretare muzicală, saxofon' },
  { title: 'Studii universitare de master', place: 'Universitatea Națională de Muzică din București', note: 'Interpretare muzicală, saxofon. Lucrare de disertație: Interpretare muzicală – Saxofon' },
  // TODO logo universitate: pune fișierul în public/logos/ și adaugă aici  logo: '/logos/unmb.png'
]

export const career = {
  title: 'Carieră militară',
  role: 'Ofițer al Muzicilor Militare din cadrul Ministerului Apărării Naționale (MApN)',
  since: 'Din august 2002',
  position: 'Cadru militar activ, muzician în Inspectoratul General al Muzicilor Militare, București',
  duties: [
    'Creare de orchestrații și compoziții muzicale pentru orchestre de suflători: muzică militară, evergreen, jazz big band.',
    'Instructor superior la Centrul de Instruire pentru Muzici Militare: teoria muzicii, armonie, stilistică muzicală, ceremoniale și onoruri militare, dirijor de ansamblu fanfară, instrument muzical (clarinet, saxofon).',
    'Solist instrumentist la saxofon: muzică clasică, jazz, pop, folclor.',
    'Manager și dirijor de orchestră în cadrul Centrului de Instruire pentru Muzici Militare.',
  ],
}

export const achievements = [
  'Peste 24 de ani de activitate în cadrul instituțiilor militare, ca instrumentist și muzician profesionist.',
  'Șef de promoție la absolvirea cursului de ofițeri.',
  'Premiul I la Olimpiada Națională de Interpretare Instrumentală, clarinet (2001).',
  'Premiul II la concursul Jeunesses Musicales Competition, secțiunea clarinet.',
  'Colaborări artistice alături de muzicieni consacrați ai scenei jazz: Marius Vernescu, Emil Bîzgă, Cătălin Milea, Tudy Zaharescu și alții.',
  'Participări la festivaluri de jazz naționale și internaționale în Sibiu, Cluj-Napoca, Klagenfurt, Bratislava, Craiova și București.',
  'Câștigător al Marelui Premiu la Concursul de Creație pentru orchestră de suflători „Iosif Ivanovici”, ediția a XVIII-a, mai 2024, București.',
  'Competențe avansate în interpretare instrumentală, coordonare artistică, orchestrare și activitate de ansamblu.',
]

export const servicesIntro = { title: 'Saxofon live pentru momente memorabile', outro: 'Fiecare eveniment are ritmul său. Împreună alegem momentele muzicale potrivite pentru a-i da personalitate.' }

export const mainServices = [
  { name: 'Wedding Sax', icon: 'wedding', subtitle: 'Nunți și evenimente elegante', text: 'Momente muzicale live care completează atmosfera nunții, de la primirea invitaților până la momentele speciale ale serii.' },
  { name: 'Party Sax', icon: 'party', subtitle: 'Petreceri private și aniversări', text: 'Un plus de energie, ritm și personalitate pentru aniversări, petreceri restrânse și evenimente organizate alături de cei dragi.' },
  { name: 'Corporate Sax', icon: 'corporate', subtitle: 'Evenimente corporate', text: 'Prezență muzicală rafinată pentru gale, recepții, lansări de produse, cine festive și evenimente de business.' },
]

// Păstrează doar serviciile pe care Bogdan le oferă efectiv (inclusiv colaborările cu DJ sau formații).
export const moreServices = [
  { icon: 'ceremony', title: 'Momente muzicale pentru ceremonii și recepții', text: 'Interpretări elegante la saxofon, potrivite pentru primirea invitaților, momente romantice și secvențe speciale din cadrul evenimentului.' },
  { icon: 'dance', title: 'Saxofon live pentru petreceri și ringul de dans', text: 'Interpretări dinamice, de la hituri pop și evergreen până la jazz și alte stiluri adaptate atmosferei și preferințelor publicului.' },
  { icon: 'show', title: 'Show-uri muzicale personalizate', text: 'Momente construite în funcție de conceptul evenimentului, repertoriul dorit și atmosfera pe care organizatorii vor să o creeze.' },
  { icon: 'dj', title: 'Colaborări cu DJ și formații live', text: 'Integrarea saxofonului în seturi de DJ sau în programe muzicale live, pentru un spectacol dinamic și o experiență sonoră distinctă.' },
]

export const live = {
  script: 'Live Sax Show',
  title: 'Un saxofon. O scenă. O energie aparte.',
  paragraphs: [
    'Muzica live capătă o nouă dimensiune atunci când sunetul saxofonului întâlnește energia publicului.',
    'Mr B Sax aduce pe scenă un show dinamic, elegant și plin de personalitate, în care fiecare interpretare devine parte dintr-o experiență memorabilă. De la melodii rafinate și sonorități romantice până la ritmuri intense, care transformă ringul de dans, fiecare moment este adaptat atmosferei evenimentului.',
    'Cu prezență scenică, versatilitate muzicală și pasiune pentru interpretarea live, Bogdan creează momente care se simt, se trăiesc și rămân în amintire.',
  ],
  closing: 'Nu este doar muzică. Este spectacolul trăit la intensitate maximă.',
}

// ID-ul din linkul YouTube (youtube.com/watch?v=ID). Listă goală = secțiunea Video nu apare.
export const videos: { id: string; title: string }[] = [
  // { id: 'dQw4w9WgXcQ', title: 'Live la nuntă' },
]

export const eventTypes = ['Nuntă', 'Petrecere privată', 'Eveniment corporate', 'Ceremonie / recepție', 'Altceva']

// Cifre din biografie. Poți adăuga ușor și numărul real de evenimente (ex: { value: 300, suffix: '+', label: 'Evenimente' }).
export const stats = [
  { value: 24, suffix: '+', label: 'Ani de experiență' },
  { value: 6, suffix: '', label: 'Orașe cu festivaluri de jazz' },
  { value: 3, suffix: '', label: 'Premii la concursuri' },
  { value: 5, suffix: '', label: 'Genuri muzicale' },
]
export const statsCaption = 'Experiență, versatilitate și pasiune pentru muzică.'
