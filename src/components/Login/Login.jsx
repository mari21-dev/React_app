import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";


export const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [requiredField])}
            {createField("Password", "password", Input, [requiredField], {type: "password"})}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "Remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from img", "captcha", Input, [requiredField], {}) }

            {error &&
            <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)