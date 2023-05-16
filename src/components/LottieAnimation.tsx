'use client'

import Lottie from 'lottie-react'
import rocket from '@/public/rckt-animation.json'

const Rocket = () => {
  return (
    <div className='scale-50 -mt-40 sm:scale-75 sm:mt-0 lg:ml-40 lg:scale-100 invisible md:visible'><Lottie animationData={rocket} /></div>
  )
}

export { Rocket }