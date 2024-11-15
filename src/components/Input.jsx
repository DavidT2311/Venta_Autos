import React from 'react'

const Input = ({type,id,name,place }) => {
  return (
    <div>
      <input type={type} id={id} name={name} placeholder={place} />
    </div>
  )
}

export default Input