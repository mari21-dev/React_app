import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

// const FormControl = (props)=>{
//
// }

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder="Login" name="login" component={Input} validate={[requiredField]}/>
            </div>
            <div><Field type="text" placeholder="Password" name="password" component={Input}
                        validate={[requiredField]}/></div>
            <div><Field type="checkbox" name="rememberMe" component={Input}/>Remember me</div>
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