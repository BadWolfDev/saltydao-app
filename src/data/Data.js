import About from '../images/about.svg';
import Road from '../images/roadmap.svg';
import Mint from '../images/mint.svg';
import FAQ from '../images/faq.svg';
import BikiniSteadss from '../assets/images/SaltyBadge.png';

export const heroObj = {
    id: 'home',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: '',
    headLine: 'Welcome',
    description: 'Welcome to SaltyDAO - R.U.G.S Insurance and Launchpad. You have been chosen to join the elite community known as SaltyDAO. We are the first DAO of its kind to offer R.U.G.S insurance, that’s Rugs Undermining the Growth of Solana. We have chosen you because you are part of the Solana community who has fallen victim to rugs or are a member who serves our community with integrity and is firmly against them.',
    buttonLabel: 'Mint',
    imgStart: true,
    img: BikiniSteadss,
    alt: 'salty',
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
    topLine: 'As a member of SaltyDAO you will enjoy many benefits including:',
    headLine: '',
    description: "- 1 vote for every community vote held regarding the selection process of our launchpad, projects approved for our alpha channel, and any votes regarding the future of our DAO. - You will receive airdrops, WL, or other benefits provided by our launchpad and its partnerships. <br> - Insurance coverage through our approved alpha channel. \n- Launchpad VIP access- if you have a project you’d like to launch or need help with building, your project will be brought to the front of the line for review.  \n - You will receive full coverage in your insurance policy by all projects approved by the SaltySeal or funded by SaltyDAO. \n - More benefits to come!",
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