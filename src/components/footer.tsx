'use client'

import {
  ArrowDownOnSquareIcon,
  Bars2Icon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  ListBulletIcon,
  PencilSquareIcon,
  ShareIcon,
  TrashIcon,
  WrenchIcon,
} from '@heroicons/react/20/solid'

export default function Footer() {
  return (
    <footer className='sticky bottom-0 flex items-center justify-between bg-cb-dusty-blue px-2 pb-6 pt-2'>
      <div className='flex space-x-6'>
        <button
          className='relative flex text-cb-yellow hover:text-cb-yellow/75 disabled:pointer-events-none disabled:text-cb-light-blue'
          type='button'
          onClick={() => {
            alert('menu')
          }}
        >
          <span className='-translate-1/2 absolute left-1/2 top-1/2 size-12 [@media(pointer:fine)]:hidden'></span>
          <Bars2Icon className='h-6 w-6' />
        </button>
      </div>
      <div className='flex space-x-6'>
        <button
          className='text-cb-yellow hover:text-cb-yellow/75 disabled:pointer-events-none disabled:text-cb-light-blue'
          type='button'
          onClick={() => {
            alert('share')
          }}
        >
          <span className='-translate-1/2 absolute left-1/2 top-1/2 size-12 [@media(pointer:fine)]:hidden'></span>
          <ShareIcon className='h-6 w-6' />
        </button>
        <button
          className='text-cb-yellow hover:text-cb-yellow/75 disabled:pointer-events-none disabled:text-cb-light-blue'
          type='button'
          onClick={() => {
            alert('list')
          }}
        >
          <span className='-translate-1/2 absolute left-1/2 top-1/2 size-12 [@media(pointer:fine)]:hidden'></span>
          <ListBulletIcon className='h-6 w-6' />
        </button>
        <button
          className='text-cb-yellow hover:text-cb-yellow/75 disabled:pointer-events-none disabled:text-cb-light-blue'
          type='button'
          onClick={() => {
            alert('settings')
          }}
        >
          <span className='-translate-1/2 absolute left-1/2 top-1/2 size-12 [@media(pointer:fine)]:hidden'></span>
          <Cog6ToothIcon className='h-6 w-6' />
        </button>
        <button
          className='text-cb-yellow hover:text-cb-yellow/75 disabled:pointer-events-none disabled:text-cb-light-blue'
          type='button'
          onClick={() => {
            alert('tools')
          }}
        >
          <span className='-translate-1/2 absolute left-1/2 top-1/2 size-12 [@media(pointer:fine)]:hidden'></span>
          <WrenchIcon className='h-6 w-6' />
        </button>
        <button
          className='text-cb-yellow hover:text-cb-yellow/75 disabled:pointer-events-none disabled:opacity-25'
          onClick={() => {
            alert('default')
          }}
        >
          <span className='-translate-1/2 absolute left-1/2 top-1/2 size-12 [@media(pointer:fine)]:hidden'></span>
          <PencilSquareIcon className='h-6 w-6' />
        </button>
      </div>
    </footer>
  )
}
