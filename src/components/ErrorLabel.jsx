import React from 'react'

export default function ErrorLabel (props) {

    const style = {
        background: '#eb4034',
        padding: '15px',
        width: '100%',
        borderRadius: '14px',
        margin: '20px',
        color: 'white',
        display: props.shouldDisplay ? 'block' : 'none'
      };

    return (
        <div style={style}>
            <p>{props.message}</p>
        </div>
  )
}
