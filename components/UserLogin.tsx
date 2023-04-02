// import * as React from "react";
import React, { useState } from 'react';

function addMinutes(date: Date, minutes: number) {
  //we multiply minutes by 60000 is to convert minutes to milliseconds
  return new Date(date.getTime() + minutes * 60000);
}

export default function UserLogin(this: any): JSX.Element {
  // Set initial state
  // const [time, setTime] = useState(new Date());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      e.target.setCustomValidity("Invalid email format");
      // console.log("Bad: " + e.target.value)
    } else {
      e.target.setCustomValidity("");
      // console.log("Good: " + e.target.value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setTime(addMinutes(time, 1));
    setIsSubmitting(true);
    console.log(email, password)
    setIsSubmitting(false);
  }

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={onEmailChange} required />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'SIGNING IN...' : 'SIGN IN'}</button>
        <label><a href="#">Forgot password?</a></label>
      </form>
    </div>
  )
}