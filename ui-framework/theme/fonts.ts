import {
  Inter,
  Poppins,
  Outfit,
  Rubik,
  Work_Sans,
  Playfair_Display,
  Merriweather,
  Great_Vibes,
  Lobster,
  Pacifico,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
}); // Modern default sans-serif

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
}); // Rounded and friendly UI font

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
}); // Clean and geometric - great for tech and product

export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
}); // Versatile, with personality

export const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-workSans',
  display: 'swap',
}); // Strong, neutral sans

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
}); // Elegant for headlines and holiday moments

export const merriweather = Merriweather({
  subsets: ['latin'],
    weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
}); // Readable serif for seasonal content

export const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-greatVibes',
  display: 'swap',
}); // Fancy cursive - perfect for gift or promo headers

export const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lobster',
  display: 'swap',
}); // Bold handwritten - very attention grabbing

export const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
  display: 'swap',
}); // Fun and relaxed - summer sales, casual vibe

export const fontTokens = {
  body: "font-sans",
  heading: "font-poppins",
  subtitle: "font-casual",
  seasonal: "font-script", 
  playful: "font-bold",
  clean: "font-casual",
  fancy: "font-script", 
};

export type FontFamilyKey = keyof typeof fontTokens;

export const fontFamilyMap: Record<FontFamilyKey, string> = {
  body: "font-inter",           // Default body text
  heading: "font-bold",      // Main titles
  subtitle: "font-rubik",       // Section or product subtitle
  seasonal: "font-playfair",    // Banners, hero areas
  fancy: "font-pacifico",       // For things like “Holiday Sale” or “Limited Edition”
  playful: "font-lobster",      // For fun/promo CTA like “Shop Now!”
  clean: "font-outfit",         // Used in UI or small sections
};


export const fonts = { inter, poppins, outfit, rubik, workSans, playfair, merriweather, greatVibes, lobster, pacifico };
