import React from 'react'

type formProps = {
    children?: React.ReactNode,
    onSubmit?: (e: React.FormEvent) => void,
    className?: string,
    formId?: string
}

const IdevForm = (props: formProps) => {
  return (
    <>
    <form onSubmit={props.onSubmit} className={props.className} id={props.formId}>
        {props.children}
    </form>

    </>
  )
}

export default IdevForm