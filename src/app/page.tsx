import Link from 'next/link'

import { Main, Title } from '@/components/ui'

export default function Home() {
  return (
    <>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>pwa</Title>
          <ul className='space-y-4'>
            <li>
              <Link
                href='/links'
                className='text-cb-pink hover:text-cb-pink/75'
              >
                links
              </Link>
            </li>
            <li>
              <Link
                href='/footer'
                className='text-cb-pink hover:text-cb-pink/75'
              >
                footer
              </Link>
            </li>
            <li>
              <Link href='/copy' className='text-cb-pink hover:text-cb-pink/75'>
                copy
              </Link>
            </li>
          </ul>
        </div>
      </Main>
    </>
  )
}
