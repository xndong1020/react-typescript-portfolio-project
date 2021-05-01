import React from 'react'

interface MainLayoutProps {
  children: JSX.Element
}

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div>
      <header>Main layout header</header>
      <section>{children}</section>
      <footer>Main layout footer</footer>
    </div>
  )
}
