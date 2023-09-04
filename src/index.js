import React, { useState } from 'react'; //This is React library to create UI
import ReactDOM from 'react-dom/client'; //This is React library to render
import './index.css'; //This is CSS styling file

//form component
//Task 1 : create HTML
//Appy useState to UI

function Form() {
  //Data State
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Error State
  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  //Colour state (showing red or green )
  const [usernameColour, setUsernameColour] = useState('');
  const [emailColour, setEmailColour] = useState('');
  const [passwordColour, setPasswordColour] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //we have to validate the information here
    if (username.length >= 8) {
      setErrorUserName('');
      setUsernameColour('green');
    } else {
      setErrorUserName('Please enter username atleast 8 charecters');
      setUsernameColour('red');
    }

    if (email.includes('@')) {
      setErrorEmail('');
      setEmailColour('green');
    } else {
      setErrorEmail('incorrect email form');
      setEmailColour('red');
    }

    if (password.length >= 8) {
      setErrorPassword('');
      setPasswordColour('green');
    } else {
      setErrorPassword('password must be includes atleast 8 charectors');
      setPasswordColour('red');
    }
    if (password === confirmPassword) {
      setErrorConfirmPassword('');
    } else {
      setErrorConfirmPassword('Password does not match');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: usernameColour }}
          ></input>
          <small style={{}}>{errorUserName}</small>
        </div>

        <div className="form__input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: emailColour }}
          ></input>
          <small style={{ color: emailColour }}>{errorEmail}</small>
        </div>

        <div className="form__input">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ color: passwordColour }}
          ></input>
          <small style={{ color: passwordColour }}>{errorPassword}</small>
        </div>

        <div className="form__input">
          <label>Confirm password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <small>{errorConfirmPassword}</small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

//Render part
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);
