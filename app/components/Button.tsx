'use client'

import React from 'react'

export type ButtonProps = {
    name: string;
    select: (e:React.MouseEvent) => void
}

function Button(props:ButtonProps) {
  return (
    <button className='btn btn-primary' onClick={props.select}>{props.name}</button>
  )
}

export default Button