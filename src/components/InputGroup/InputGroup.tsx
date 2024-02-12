import React from 'react'

type inputGroupProps = {
    children?: React.ReactNode,
    WrapperClass?: string
}

const IdevInputGroup = (props: inputGroupProps) => {
  return (
    <div className={props.WrapperClass}>
        {props.children}
</div>
  )
}

export default IdevInputGroup