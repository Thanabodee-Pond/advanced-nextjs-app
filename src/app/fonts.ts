import {K2D, Sarabun, Kanit} from 'next/font/google';

const k2d = K2D({
    subsets: ['thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-k2d'
});

const sarabun = Sarabun({
    subsets: ['thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-sarabun'
});

const kanit = Kanit({
    subsets: ['thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-kanit'
});

export { k2d, sarabun, kanit};
