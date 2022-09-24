import React from "react";
import style from "./FormsControls.module.css"

type PropsType = {
    input: any
    meta: any
}

type ChildrenPropsType = {
    children: React.ReactNode
}


const FormControl = ({meta, children }: PropsType & ChildrenPropsType) => {
    const hasError = meta.touched && meta.error
    return (

        <div className={hasError && style.formControl + ' ' + style.error}>
            {children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta}: PropsType & ChildrenPropsType) => {

    return <FormControl  input={input} meta={meta}>
        <textarea {...input} />
    </FormControl>

}

export const Input = ({input, meta}: PropsType) => {

    return <FormControl input={input} meta={meta}>
        <input {...input}/>
    </FormControl>

}