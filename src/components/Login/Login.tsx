import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


//переделать на https://react-hook-form.com/
type FormDataType ={
    email:string
    password:string
    rememberMe:boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginMapStateToProps = {
    isAuth:boolean
}
type AllLoginType = LoginMapStateToProps & MapDispatchToPropsType


const mapStateToProps= (state:AppStateType):LoginMapStateToProps=>{
    return {
       isAuth: state.auth.isAuth
    }
}

const Login = (props:AllLoginType) => {
    const onSubmit = (formData:FormDataType) => {
      props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'}/>
            }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default connect(mapStateToProps,{login})(Login);

const LoginForm = (props:InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       validate={[required]} type={"password"}
                />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form:'login'
    })(LoginForm)
