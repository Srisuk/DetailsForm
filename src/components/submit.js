import { Redirect } from "react-router-dom";
import React from 'react';
import { SubmissionError } from "redux-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function submit(values) {
  console.log("values", values);
  await sleep(1000);
    // simulate server latency
    if (!["sukanya"].includes(values.username)) {
        throw new SubmissionError({
            username: "User does not exist",
            _error: "Login failed!"
        });
    } else if (values.password !== "sukanya123") {
        throw new SubmissionError({
            password: "Wrong password",
            _error: "Login failed!"
        });
    } else {
        return <Redirect to='/personaldetails'/>
    }
}

export default submit;