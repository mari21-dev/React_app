import React from "react";
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder="Login" name="login" component="input"/></div>
            <div><Field type="text" placeholder="Password" name="password" component="input"/></div>
            <div><Field type="checkbox" name="rememberMe" component="input"/>Remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

export const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}