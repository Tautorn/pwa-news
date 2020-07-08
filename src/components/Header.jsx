import React, { memo } from 'react'
import './style.css'

function Header() {

  return (
    <header className="header">
      <h1>The PWA News</h1>
    </header>
  )
}

export default memo(Header)
