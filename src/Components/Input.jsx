import React from 'react'

const Input = ({id, label, name, value, onChange, error}) => {
  return (
    <div className="input-container">
        <label htmlFor="title">{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          
          />
        <p className="errormsg">{error}</p>
      </div>
  )
}

export default Input
