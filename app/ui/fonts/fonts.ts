import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const futureTense = localFont({
  src: './FutureTense-Regular.woff2',
})