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
    }
}

const IdevInputs = (props: inputsProps) => {
  return (
    <>
        <input key={props.inputTypes.name} placeholder={props.inputTypes.placeholder} onChange={props.inputTypes.onChange} type={props.inputTypes.type} value={props.inputTypes.value} name={props.inputTypes.name} id={props.inputTypes.id} className={props.inputTypes.className}/>        
    
    </>
  )
}

export default IdevInputs