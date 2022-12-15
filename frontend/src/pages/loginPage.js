import React from 'react';
import './loginPage.css';
class Login extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "loginBG"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-toggle"
    }), /*#__PURE__*/React.createElement("div", {
      className: "form-panel one"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-header"
    }, /*#__PURE__*/React.createElement("h1", null, "Account Login")), /*#__PURE__*/React.createElement("div", {
      className: "form-content"
    }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "username"
    }, "Username"), /*#__PURE__*/React.createElement("input", {
      id: "username",
      type: "text",
      name: "username",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "password"
    }, "Password"), /*#__PURE__*/React.createElement("input", {
      id: "password",
      type: "password",
      name: "password",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      className: "form-remember"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox"
    }), "Remember Me"), /*#__PURE__*/React.createElement("a", {
      className: "form-recovery",
      href: "#"
    }, "Forgot Password?")), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit"
    }, "Log In")))))));
  }
}
export default Login;