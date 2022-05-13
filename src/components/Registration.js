import React, { useState } from "react";

const Registration = (props) => {
  //
  const [username, setUsername] = useState({
    value: "",
    valid: true,
    errorMessage: "",
    classError: "",
  });
  const [firstName, setFirstName] = useState({
    value: "",
    valid: true,
    errorMessage: "",
    classError: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
    valid: true,
    errorMessage: "",
    classError: "",
  });
  const [email, setEmail] = useState({
    value: "",
    valid: true,
    errorMessage: "",
    classError: "",
  });
  const [password, setPassword] = useState({
    value: "",
    valid: true,
    errorMessage: "",
    classError: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    valid: true,
    errorMessage: "",
    classError: "",
  });

  let state = {
    username: { ...username },
    firstName: { ...firstName },
    lastName: { ...lastName },
    email: { ...email },
    password: { ...password },
    confirmPassword: { ...confirmPassword },
  };

  const handleChange = (e) => {
    const value = e.target.value;

    switch (e.target.name) {
      //
      case "username":
        state.username.value = value;
        setUsername(state.username);
        break;

      case "firstName":
        state.firstName.value = value;
        setFirstName(state.firstName);
        break;

      case "lastName":
        state.lastName.value = value;
        setLastName(state.lastName);
        break;

      case "email":
        state.email.value = value;
        setEmail(state.email);
        break;

      case "password":
        state.password.value = value;
        setPassword(state.password);
        break;

      default:
        state.confirmPassword.value = value;
        setConfirmPassword(state.confirmPassword);
    }
  };

  function isBlank(str) {
    return !str || /^\s*$/.test(str);
  }

  const validUsername = () => {
    return (
      username.value.length >= 6 &&
      username.value.length <= 12 &&
      !isBlank(username.value)
    );
  };

  const validFirstName = () => {
    return !isBlank(firstName.value);
  };

  const validLastName = () => {
    return !isBlank(lastName.value);
  };

  const validEmail = () => {
    return (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) &&
      !isBlank(email.value)
    );
  };

  const validPassword = () => {
    return !isBlank(password.value);
  };

  const validConfirmPassword = () => {
    return (
      !isBlank(confirmPassword.value) &&
      password.value === confirmPassword.value
    );
  };

  const validateSubmit = () => {
    //
    if (!validEmail()) {
      state.email.errorMessage = "Email mora biti validan.";
      state.email.classError = "error";
      state.email.valid = false;
      setEmail(state.email);
      if (isBlank(email.value)) {
        state.email.errorMessage = "Popunite ovo polje";
        state.email.classError = "error";
        state.email.valid = false;
        setEmail(state.email);
      }
    } else {
      state.email.errorMessage = "";
      state.email.classError = "";
      state.email.valid = true;
      setEmail(state.email);
    }
    if (!validUsername()) {
      state.username.errorMessage =
        "Username mora imati minimum 6 karaktera a maksimum 12";
      state.username.classError = "error";
      state.username.valid = false;
      setUsername(state.username);
      if (isBlank(username.value)) {
        state.username.errorMessage = "Popunite ovo polje";
        state.username.classError = "error";
        state.username.valid = false;
        setUsername(state.username);
      }
    } else {
      state.username.errorMessage = "";
      state.username.classError = "";
      state.username.valid = true;
      setUsername(state.username);
    }
    if (!validFirstName()) {
      state.firstName.errorMessage = "Popunite ovo polje";
      state.firstName.classError = "error";
      state.firstName.valid = false;
      setFirstName(state.firstName);
    } else {
      state.firstName.errorMessage = "";
      state.firstName.classError = "";
      state.firstName.valid = true;
      setFirstName(state.firstName);
    }
    if (!validLastName()) {
      state.lastName.errorMessage = "Popunite ovo polje";
      state.lastName.classError = "error";
      state.lastName.valid = false;
      setLastName(state.lastName);
    } else {
      state.lastName.errorMessage = "";
      state.lastName.classError = "";
      state.lastName.valid = true;
      setLastName(state.lastName);
    }
    if (!validPassword()) {
      state.password.errorMessage = "Password mora biti validan.";
      state.password.classError = "error";
      state.password.valid = false;
      setPassword(state.password);
      if (isBlank(password.value)) {
        state.password.errorMessage = "Popunite ovo polje";
        state.password.classError = "error";
        state.password.valid = false;
        setPassword(state.password);
      }
    } else {
      state.confirmPassword.errorMessage = "";
      state.confirmPassword.classError = "";
      state.confirmPassword.valid = true;
      setPassword(state.confirmPassword);
    }
    if (!validConfirmPassword()) {
      state.confirmPassword.errorMessage = "Sifre se ne poklapaju";
      state.confirmPassword.classError = "error";
      state.confirmPassword.valid = false;
      setConfirmPassword(state.confirmPassword);
      if (isBlank(password.value)) {
        state.confirmPassword.errorMessage = "Popunite ovo polje";
        state.confirmPassword.classError = "error";
        state.confirmPassword.valid = false;
        setConfirmPassword(state.confirmPassword);
      }
    } else {
      state.confirmPassword.errorMessage = "";
      state.confirmPassword.classError = "";
      state.confirmPassword.valid = true;
      setConfirmPassword(state.confirmPassword);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validateSubmit();
  };

  return (
    <div className="container">
      <form className="ui form">
        <div className={"field " + username.classError}>
          <label>Username</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={username.value}
            placeholder="Username"
          />
          <div className="ui text-danger">{username.errorMessage}</div>
        </div>
        <div className={"field " + firstName.classError}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={firstName.value}
            placeholder="First Name"
          />
          <div className="ui text-danger">{firstName.errorMessage}</div>
        </div>
        <div className={"field " + lastName.classError}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={lastName.value}
            placeholder="Last Name"
          />
          <div className="ui text-danger">{lastName.errorMessage}</div>
        </div>
        <div className={"field " + email.classError}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email.value}
            placeholder="Email"
          />
          <div className="ui text-danger">{email.errorMessage}</div>
        </div>
        <div className={"field " + password.classError}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password.value}
            placeholder="Password"
          />
        </div>
        <div className={"field " + confirmPassword.classError}>
          <label>Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword.value}
            placeholder="Confirm password"
          />
          <div className="ui text-danger">{confirmPassword.errorMessage}</div>
        </div>
        <button className="ui button" type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
