import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'

import 'simplebar-react/dist/simplebar.min.css'

interface pageProps { }

export const metadata: Metadata = {
  title: 'Yisy API | Documentation',
  description: 'Free & easy-access APIs for learning and testing'
}

const page: FC<pageProps> = ({ }) => {
  return <div className='container max-w-7xl mx-auto mt-12'>
    <div className='flex flex-col items-center gap-6'>
      <LargeHeading>Making a request</LargeHeading>
      <Paragraph>api/v1/similarity</Paragraph>

      <DocumentationTabs />
    </div>
  </div>
}

export default page