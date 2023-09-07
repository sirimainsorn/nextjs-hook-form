import React from 'react'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export default function MainLayout({ children }: Props) {
  return <div className='min-h-screen bg-white'>{children}</div>
}
