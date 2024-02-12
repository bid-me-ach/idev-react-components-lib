import React from 'react'

type inputsProps = {
    inputTypes: {
        name: string,
        type: string,
        value?: string | number,
        id?: string,
        className?: string,
        placeholder?: string
        onChange?: (e: any) => void
    }[]
}

const IdevInputs = (props: inputsProps) => {
  return (
    <>
    {props.inputTypes.map((input) => (
        <input key={input.name} placeholder={input.placeholder} onChange={input.onChange} type={input.type} value={input.value} name={input.name} id={input.id} className={input.className}/>        
    ))}
    </>
  )
}

export default IdevInputs