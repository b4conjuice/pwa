'use client'

import { Button, Main, Title } from '@/components/ui'
import copyToClipboard from '@/lib/copyToClipboard'
import copyToClipboardOld from '@/lib/copyToClipboard-old'

export default function CopyPage() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Title>copy</Title>
        <section>
          <h2>copyToClipboard</h2>
          <p>
            <Button
              onClick={() => {
                copyToClipboard('copyToClipboard')
              }}
            >
              copy
            </Button>
          </p>
        </section>
        <section>
          <h2>copyToClipboard old</h2>
          <p>
            <Button
              onClick={() => {
                copyToClipboardOld('copyToClipboard old')
              }}
            >
              copy
            </Button>
          </p>
        </section>
      </div>
    </Main>
  )
}
