import React from 'react'

type textAreaProps = {
    children?: React.ReactNode,
    className?: string
    id?: string
    name?: string
    rows?: number
    cols?: number
    placeholder?: string
    maxLength?: number
    required?: boolean
    value?: string
    onchange?: (e: any) => void
}

const IdevTextArea = (props: textAreaProps) => {
  return (
    <>
    <textarea className={props.className} id={props.id} name={props.name} rows={props.rows} cols={props.cols} placeholder={props.placeholder} maxLength={props.maxLength} required={props.required} onChange={props.onchange} value={props.value}>
    {props.children}
    </textarea>
    </>
  )
}

export default IdevTextArea