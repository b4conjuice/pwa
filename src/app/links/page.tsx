import Link from 'next/link'

import { Main, Title } from '@/components/ui'
import Links from './links'

export default function LinksPage() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col space-y-4'>
        <Title>
          <Link href='/' className='hover:text-cb-pink/75'>
            pwa
          </Link>
        </Title>
        <h2>links</h2>
        <Links />
      </div>
    </Main>
  )
}
