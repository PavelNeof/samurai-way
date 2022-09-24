import React, {FC} from "react";
import style from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

type PropsType = {
    input: any
    meta: any
}

type ChildrenPropsType = {
    children: React.ReactNode
}


const FormControl: FC<WrappedFieldProps> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={hasError && style.formControl + ' ' + style.error}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl  {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>

}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props

    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>

}