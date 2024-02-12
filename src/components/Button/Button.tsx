import React from 'react'

type buttonsProps = {
    handleClick?: (e: React.MouseEvent) => void,
    children?: string,
    className?: string
}

const IdevButtons = (props: buttonsProps) => {
  return (
    <button className={props.className} onClick={props.handleClick}>{props.children}</button>
  )
}

export default IdevButtons