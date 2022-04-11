import React from 'react'

import Logo from '../components/Logo'

export default function Home () {

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      fontSize: '30px'
  }

  return (
    <div style={style}>
        <Logo />
        <hr style={{margin: '20px'}} />
        <h2>Tela Home</h2>
    </div>
  )
}
