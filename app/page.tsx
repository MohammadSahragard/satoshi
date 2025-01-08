'use client';

//* Import components
import Image from 'next/image';

//* Import hooks
import useMediaQuery from '@/hooks/use-media-query';

export default function Home() {
  // Hooks
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? (
        <Image
          alt='main ui'
          src='/mobile.png'
          fill
          className='!h-min'
        />
      ) : (
        <Image
          alt='main ui'
          src='/desktop.png'
          fill
          className='!h-min'
        />
      )}
    </div>
  );
}
