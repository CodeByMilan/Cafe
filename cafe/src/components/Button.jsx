import React from 'react'

export default function Button(props) {
    const {content}=props
  return (
    <>
    <button className='ml-4 px-6 py-2 bg-orange-400 rounded-lg shadow-md '>
     {content}
    </button>
    </>
  )
}
