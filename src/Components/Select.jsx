import React from 'react'

const Select = ({id, label, name, value, onChange, options, error, defaultOption}) => {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" hidden>
            {defaultOption}
          </option>
          {
            options.map((option, i) => <option key={i} value={option}>{option}</option> )
          }
          
        </select>
        <p className="errormsg">{error}</p>
      </div>
  )
}

export default Select
