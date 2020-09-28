import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../RenderingFormFields';
import submit from '../submit';
import {required} from '../FieldLevelValidationForm';


const LoginForm = props => {
    const { error, handleSubmit } = props
    return (
      <div>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit(submit)}>
      <Field name="username" type="text" component={renderField} label="Username" validate={required}/>
      <Field name="password" type="password" component={renderField} label="Passowrd" validate={required}/>
      <button type="submit">Log In</button>
      {error && <strong>{error}</strong>}
      </form>
      </div>      
    )
}

export default reduxForm({
    form: 'loginFormDetail' // a unique identifier for this form
  })(LoginForm)