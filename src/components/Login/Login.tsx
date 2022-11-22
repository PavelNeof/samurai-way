import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import s from "./../Common/FormsControls/FormsControls.module.css"
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


//переделать на https://react-hook-form.com/
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha:string
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha:string) => void
}

type LoginMapStateToProps = {
    isAuth: boolean
    captchaUrl:string | null
}
type AllLoginType = LoginMapStateToProps & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): LoginMapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const Login = (props: AllLoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div className={s.container}>
        <h1 className={s.nameBlock}>LOGIN</h1>
        <div className={s.flex}>
        <LoginReduxForm onSubmit={onSubmit}/>
        <div className={s.logopas}>
            <b>Тестовые Email и Password</b>
            <div>Email: free@samuraijs.com</div>
            <div>Password:free</div>
        </div>
        </div>
    </div>
}


export default connect(mapStateToProps, {login})(Login);

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    const captchaUrl = useSelector<AppStateType,string | null>(state => state.auth.captchaUrl)

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
            <div className={s.checkbox}>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>

            {captchaUrl && <img src={captchaUrl}/> }
            {captchaUrl && <div><Field placeholder={'Symbols from image'} name={'captcha'} component={Input}
                                       validate={[required]} /></div> }

            {props.error ? <div className={s.formSummaryError}>
                {props.error}
            </div> : ''}
            <div className={s.buttonBox}>
                <button className={'button'}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
