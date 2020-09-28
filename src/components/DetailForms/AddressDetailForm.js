import React from 'react';
import { Field, reduxForm, getFormValues } from 'redux-form';
import renderField from '../RenderingFormFields';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

let AddressDetailForm = props => {
    console.log('props', props);
    return (
      <div>
      <h2>Address detail form</h2>
      <Link to="/personaldetails"><h3>Previous</h3></Link>
      <Link to="/experiencedetails"><h3>Next</h3></Link>
      <form>
      <h3>Current address</h3>
      <Field name="line1" type="text" component={renderField} label="Line 1"/>
      <Field name="city" type="text" component={renderField} label="City"/>
      <Field name="state" type="number" component={renderField} label="State"/>
      <Field name="country" type="text" component={renderField} label="Country"/>
      <Field name="pincode" type="number" component={renderField} label="Pincode"/>
      </form>
      </div>
    )
}

function mapStateToProps(state) {
  return {
       formStates: getFormValues('personalDetails')(state) // here 'form' is the name you have given your redux form 
  }
}

AddressDetailForm = reduxForm({
    form: 'addressDetail' // a unique identifier for this form
  })(AddressDetailForm)

export default connect(mapStateToProps)(AddressDetailForm)
