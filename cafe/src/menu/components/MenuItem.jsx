import React from 'react'

const MenuItem = (props) => {
    const{title,description}=props
  return (
    <>
     <div className="p-4 space-x-4 rounded-md bg-gray-100 hover:bg-gray-200">
        <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 text-left">{description}</p>
    </div>
 </>
  )
}

export default MenuItem