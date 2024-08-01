'use client'

import { Button } from '@/components/ui'
import useLocalStorage from '@/lib/useLocalStorage'

type Link = {
  href: string
  text: string
}

export default function Links() {
  const [links, setLinks] = useLocalStorage<Link[]>('links', [])
  return (
    <>
      {links?.length > 0 && (
        <ul className='space-y-4'>
          {links?.map(({ href, text }, index) => (
            <li key={index} className='flex w-full flex-col space-y-2'>
              <input
                className='bg-cobalt text-cb-white'
                type='text'
                value={href}
                onChange={e => {
                  setLinks(
                    links.map((link, i) =>
                      i === index ? { ...link, href: e.target.value } : link
                    )
                  )
                }}
              />
              <input
                className='bg-cobalt text-cb-white'
                type='text'
                value={text}
                onChange={e => {
                  setLinks(
                    links.map((link, i) =>
                      i === index ? { ...link, text: e.target.value } : link
                    )
                  )
                }}
              />
              <Button href={href} backgroundColorClassName={'bg-cb-blue'}>
                {text}
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Button
        onClick={() => {
          setLinks([
            {
              href: 'https://example.com',
              text: 'link text',
            },
            ...links,
          ])
        }}
      >
        add link
      </Button>
      <Button
        onClick={() => {
          setLinks([])
        }}
        disabled={links?.length === 0}
        className='disabled:pointer-events-none disabled:opacity-25'
      >
        reset
      </Button>
    </>
  )
}
