import Link from 'next/link'

import { Main, Title } from '@/components/ui'
import Footer from '@/components/footer'

export default function FooterPage() {
  return (
    <>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>pwa</Title>
          <ul>
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
              <Link
                href='/notif'
                className='text-cb-pink hover:text-cb-pink/75'
              >
                notif
              </Link>
            </li>
          </ul>
        </div>
      </Main>
      <Footer />
    </>
  )
}
