// app/fonts.ts
import { Roboto, Dancing_Script, Lobster } from 'next/font/google';

// Robotoフォントを定義します。ウェイトとスタイルを指定できます。
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // 通常と太字
  style: ['normal', 'italic'],
  variable: '--font-roboto'
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dancing-script'
})

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lobster'
})

const fonts = {
  roboto,
  dancing_script,
  lobster
}

export default fonts;
