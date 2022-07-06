import PropsTypes from 'prop-types';
import React from 'react'

const Button = ({label, backgroundColor='green', size='md', handleClick}) => {
    let scale = 1
    if (size === 'sm') {
        scale = 0.8
    }
    if (size === 'lg') {
        scale = 1.5
    }
    const style = {
        backgroundColor,
        transform: `scale(${scale})`,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border:"none"
    }
  return (
    <button onClick={handleClick} style={style}>{label}</button>
  )
}

Button.propTypes = {
    label: PropsTypes.string,
    backgroundColor: PropsTypes.string,
    size: PropsTypes.oneOf(['sm', 'md', 'lg']),
    handleClick: PropsTypes.func
}

export default Button