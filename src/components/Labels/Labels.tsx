import React from 'react'

type labelsProps = {
    children?: React.ReactNode,
    className?: string,
    HtmlFor?: string
}

const IdevLabels = (props: labelsProps) => {
  return (
    <label className={props.className} htmlFor={props.HtmlFor}>
    {props.children}
    </label>
  )
}

export default IdevLabels