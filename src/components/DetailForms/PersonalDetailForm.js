import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../RenderingFormFields';
import { Link } from 'react-router-dom';
import {required, phoneNumber, email} from '../FieldLevelValidationForm';
import {connect} from 'react-redux';
import {fetchValues} from './account';

let PersonalDetailForm = props => {
  console.log('props', props);
    return (
      <div>
      <h2>Personal detail form</h2>
      <Link to="/addressdetails" onClick={() => props.fetchValues(props.state.form)}><h3>Next</h3></Link>
      <form>
      <Field name="firstname" type="text" component={renderField} label="First Name" validate={required} />
      <Field name="lastName" type="text" component={renderField} label="Last Name" validate={required}/>
      <Field name="contactnumber" type="number" component={renderField} label="Contact No" validate={[required, phoneNumber]}/>
      <Field name="email" type="email" component={renderField} label="Email" validate={[required, email]}/>
      </form>
      </div>      
    )
}

function mapStateToProps(state) {
  return {state};
};

export default reduxForm({
    form: 'personalDetails'
})(connect(mapStateToProps, {fetchValues})(PersonalDetailForm))

// PersonalDetailForm = connect(
//   state => (console.log('state', state)),
//   { load: loadAccount }               // bind account loading action creator
// )(PersonalDetailForm)

// export default PersonalDetailForm;