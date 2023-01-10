import React from 'react'
import classes from '../../container/Login/Login.module.css'

function Input(props){
     const{isValid, id, label, type, value, onChange, onBlur}=props

    return <div
    className={`${classes.control} ${
      isValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
}

export default Input
