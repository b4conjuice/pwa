import Link from 'next/link'

import { Main, Title } from '@/components/ui'

export default function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Title>pwa</Title>
        <ul>
          <Link href='/links' className='text-cb-pink hover:text-cb-pink/75'>
            links
          </Link>
        </ul>
      </div>
    </Main>
  )
}
