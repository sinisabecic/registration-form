import React, { useState } from "react";

const Registration = (props) => {
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

  const handleChange = (e) => {
    const value = e.target.value;
    let duplicate;

    switch (e.target.name) {
      //
      case "username":
        duplicate = { ...username };
        duplicate.value = value;
        setUsername(duplicate);
        break;

      case "firstName":
        duplicate = { ...firstName };
        duplicate.value = value;
        setFirstName(duplicate);
        break;

      case "lastName":
        duplicate = { ...lastName };
        duplicate.value = value;
        setLastName(duplicate);
        break;

      case "email":
        duplicate = { ...email };
        duplicate.value = value;
        setEmail(duplicate);
        break;

      case "password":
        duplicate = { ...password };
        duplicate.value = value;
        setPassword(duplicate);
        break;

      default:
        duplicate = { ...confirmPassword };
        duplicate.value = value;
        setConfirmPassword(duplicate);
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
      let duplicate = { ...email };
      duplicate.errorMessage = "Email mora biti validan.";
      duplicate.classError = "error";
      duplicate.valid = false;
      setEmail(duplicate);
      if (isBlank(email.value)) {
        let duplicate = { ...email };
        duplicate.errorMessage = "Popunite ovo polje";
        duplicate.classError = "error";
        duplicate.valid = false;
        setEmail(duplicate);
      }
    } else {
      let duplicate = { ...email };
      duplicate.errorMessage = "";
      duplicate.classError = "";
      duplicate.valid = true;
      setEmail(duplicate);
    }
    if (!validUsername()) {
      let duplicate = { ...username };
      duplicate.errorMessage =
        "Username mora imati minimum 6 karaktera a maksimum 12";
      duplicate.classError = "error";
      duplicate.valid = false;
      setUsername(duplicate);
      if (isBlank(username.value)) {
        let duplicate = { ...username };
        duplicate.errorMessage = "Popunite ovo polje";
        duplicate.classError = "error";
        duplicate.valid = false;
        setUsername(duplicate);
      }
    } else {
      let duplicate = { ...username };
      duplicate.errorMessage = "";
      duplicate.classError = "";
      duplicate.valid = true;
      setUsername(duplicate);
    }
    if (!validFirstName()) {
      let duplicate = { ...firstName };
      duplicate.errorMessage = "Popunite ovo polje";
      duplicate.classError = "error";
      duplicate.valid = false;
      setFirstName(duplicate);
    } else {
      let duplicate = { ...firstName };
      duplicate.errorMessage = "";
      duplicate.classError = "";
      duplicate.valid = true;
      setFirstName(duplicate);
    }
    if (!validLastName()) {
      let duplicate = { ...lastName };
      duplicate.errorMessage = "Popunite ovo polje";
      duplicate.classError = "error";
      duplicate.valid = false;
      setLastName(duplicate);
    } else {
      let duplicate = { ...lastName };
      duplicate.errorMessage = "";
      duplicate.classError = "";
      duplicate.valid = true;
      setLastName(duplicate);
    }
    if (!validPassword()) {
      let duplicate = { ...password };
      duplicate.errorMessage = "Password mora biti validan.";
      duplicate.classError = "error";
      duplicate.valid = false;
      setPassword(duplicate);
      if (isBlank(password.value)) {
        let duplicate = { ...password };
        duplicate.errorMessage = "Popunite ovo polje";
        duplicate.classError = "error";
        duplicate.valid = false;
        setPassword(duplicate);
      }
    } else {
      let duplicate = { ...confirmPassword };
      duplicate.errorMessage = "";
      duplicate.classError = "";
      duplicate.valid = true;
      setPassword(duplicate);
    }
    if (!validConfirmPassword()) {
      let duplicate = { ...confirmPassword };
      duplicate.errorMessage = "Sifre se ne poklapaju";
      duplicate.classError = "error";
      duplicate.valid = false;
      setConfirmPassword(duplicate);
      if (isBlank(password.value)) {
        let duplicate = { ...confirmPassword };
        duplicate.errorMessage = "Popunite ovo polje";
        duplicate.classError = "error";
        duplicate.valid = false;
        setConfirmPassword(duplicate);
      }
    } else {
      let duplicate = { ...confirmPassword };
      duplicate.errorMessage = "";
      duplicate.classError = "";
      duplicate.valid = true;
      setConfirmPassword(duplicate);
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
            placeholder="username"
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
