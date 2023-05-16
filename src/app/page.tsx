import { Rocket } from '@/components/LottieAnimation'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Yisy API | Easy Access Ultimate API Hub',
  description: 'Free & easy-access APIs for learning and testing',
}

export default function Home() {
  return (
    <div className='relative h-screen flex justify-center items-center overflow-x-auto'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size='lg' className='three-d text-black dark:text-light-theme-color'>Free. <br /> Easy Access APIs. <br />For Learning.</LargeHeading>
          <Paragraph className='max-w-xl lg:text-left'>With the Yisy API, you can easily test out different APIs during the learning, testing, developing process with a free{' '}
            <Link href='/login' className='underline underline-offset-2 text-black dark:text-light-theme-color'>
              API key
            </Link>
            .
          </Paragraph>
          <div className='relative w-full max-w-lg lg:max-w-xl lg:left-1/2 aspect-square lg:absolute'>
            <Rocket />
            <Image priority className='img-shadow md:invisible' quality={100} style={{ objectFit: 'contain' }} fill src='/space.svg' alt='rocket' />
          </div>
        </div>
      </div>
    </div>
  )
}