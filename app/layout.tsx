import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Satoshi crypto',
  description: 'Satoshi crypto is the best crypto exchange in the world',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
    >
      <body>
        <main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>{children}</main>
      </body>
    </html>
  );
}
