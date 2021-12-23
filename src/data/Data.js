import About from '../images/about.svg';
import Road from '../images/roadmap.svg';
import Mint from '../images/mint.svg';
import FAQ from '../images/faq.svg';
import BikiniSteadss from '../images/bikiLogo.png';

export const heroObj = {
    id: 'home',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'BkS',
    headLine: 'Welcome',
    description: 'Down in the deep blue sea, lies the county of Solana bottom. 3 Neighborhoods fight for power, honor, and greed. Corruption lives on every corner and in every office.  Money is king and everyone wants a piece of the action. Only the Mayors mansion can contain all the chaos, because with great power, comes even greater corruption. Deep in the heart of the city lies Shell Bank. Every deal, racket, and dime bag, a piece gets kicked back to the bank. If you think otherwise, the mayor will send a couple of the boys to put your paper hands in a vice and your pearls in a clamp. If you gonna make it in this city, you better not be a fool.',
    buttonLabel: 'Mint',
    imgStart: true,
    img: BikiniSteadss,
    alt: 'kami',
    dark: false,
    primary: false,
    darkText: false,
    show: true,
};

export const aboutObj = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Premium Kami',
    headLine: 'Kami is da wae brudahs',
    description: 'We are Kami, passionate about the Universe and all its forms of expression',
    buttonLabel: 'Mint',
    imgStart: true,
    img: About,
    alt: 'kami',
    dark: true,
    primary: true,
    darkText: true,
    show: true,
};

export const RoadmapObj = {
    id: 'roadmap',
    lightBg: false,
    DarkText: false,
    lightText: true,
    img: Road,
    alt: 'road',
    imgStart: false,
};

export const mintObj = {
    id: 'mint',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Limited Supply',
    headLine: 'Mint your Kami, be Kami',
    description: 'Dis is da wae',
    buttonLabel: 'Mint',
    imgStart: true,
    img: Mint,
    alt: 'mint',
    dark: true,
    primary: true,
    darkText: true,
    show: false,
};

export const faqObj = {
    id: 'faq',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'FAQ',
    headLine: 'Mint your Kami, be Kami',
    span: 'x',
    description: 'Dis is da wae',
    buttonLabel: 'Mint',
    imgStart: false,
    img: FAQ,
    alt: 'faqs',
    dark: true,
    primary: true,
    darkText: true,
    show: false,
};