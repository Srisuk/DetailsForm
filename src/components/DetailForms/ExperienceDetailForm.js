import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../RenderingFormFields';
import { Link } from 'react-router-dom';

const ExperienceDetailForm = props => {
    const { handleSubmit } = props
    return (
      <div>
      <h2>Experience detail form</h2>
      <Link to="/addressdetails"><h3>Previous</h3></Link>
      <form onSubmit={handleSubmit}>
      <Field name="companyName" type="text" component={renderField} label="First Name"/>
      <Field name="workFrom" type="text" component={renderField} label="From date"/>
      <Field name="workTo" type="text" component={renderField} label="To date"/>
      <Field name="rome" type="text" component={renderField} label="Role"/>
      </form>
      </div>
    )
}

export default reduxForm({
    form: 'experienceDetail' // a unique identifier for this form
  })(ExperienceDetailForm)