import React, { Component } from 'react';
import validator from 'validator'
import InputMask from "react-input-mask";
import emailjs from '@emailjs/browser';

import './ContactForm.scss';

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                subject: '',
                message: ''
            },
            errors: {}
        };
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.sendContact()
        }
    }

    sendContact() {
        const emails = JSON.parse(process.env.REACT_APP_CONTACT_FORM_EMAILS);
        emailjs.send('bodybydarby', 'template_tgpqm24', { toEmail: emails[1], ...this.state.fields }, 'LbFysx24GAsUXR1yG')
            .then(() => {
                this.setState({
                    fields: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNo: '',
                        subject: '',
                        message: ''
                    }
                });

                alert("Email sent!");
            }, () => {
                // error sending email
            });
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // name

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "* cannot be empty";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["firstName"] = "* only letters";
            }
        }

        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "* cannot be empty";
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["lastName"] = "* only letters";
            }
        }

        // email

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "* cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "* is not valid";
            }
        }

        // phoneNo

        if (!fields["phoneNo"]) {
            formIsValid = false;
            errors["phoneNo"] = "* cannot be empty";
        }

        if (typeof fields["phoneNo"] !== "undefined") {
            const phoneNo = fields["phoneNo"].replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
            const isValidNumber = validator.isMobilePhone(phoneNo);
            if (!isValidNumber) {
                errors["phoneNo"] = "* invalid";
            }
        }

        // subject

        if (!fields["subject"]) {
            formIsValid = false;
            errors["subject"] = "* cannot be empty";
        }

        // message

        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = "* cannot be empty";
        }

        this.setState({ errors: errors });

        return formIsValid;
    }

    handleSubmit(event) {
        if (this.handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.");
        }
        event.preventDefault();
    }

    render() {
        return <>
            <div className="contact-form-wrapper">
                <h3>
                    {this.props.text}
                </h3>
                <form onSubmit={this.contactSubmit.bind(this)}>
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td className="name-cell" colSpan={2}>
                                    Name
                                </td>
                            </tr>
                            <tr>
                                <td className="first-name">
                                    <label>
                                        <input
                                            name="firstName"
                                            type="text"
                                            value={this.state.fields["firstName"]}
                                            onChange={this.handleChange.bind(this, "firstName")} />
                                        <br />
                                        First Name
                                    </label>
                                    <span className="error">{this.state.errors["firstName"]}</span>
                                </td>
                                <td className="last-name">
                                    <label>
                                        <input
                                            name="lastName"
                                            type="text"
                                            value={this.state.fields["lastName"]}
                                            onChange={this.handleChange.bind(this, "lastName")} />
                                        <br />
                                        Last Name
                                    </label>
                                    <span className="error">{this.state.errors["lastName"]}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <label>
                                        Email Address <span className="error">{this.state.errors["email"]}</span>
                                        <br />
                                        <input
                                            name="email"
                                            type="text"
                                            value={this.state.fields["email"]}
                                            onChange={this.handleChange.bind(this, "email")} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <label>
                                        Phone Number <span className="error">{this.state.errors["phoneNo"]}</span>
                                        <br />
                                        <InputMask
                                            name="phoneNo"
                                            className="inputMask"
                                            mask="(999) 999-9999"
                                            value={this.state.fields["phoneNo"]}
                                            onChange={this.handleChange.bind(this, "phoneNo")}>
                                        </InputMask>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <label>
                                        Subject <span className="error">{this.state.errors["subject"]}</span>
                                        <br />
                                        <input
                                            name="subject"
                                            type="text"
                                            value={this.state.fields["subject"]}
                                            onChange={this.handleChange.bind(this, "subject")} />
                                        <br />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <label>
                                        Message <span className="error">{this.state.errors["message"]}</span>
                                        <br />
                                        <input
                                            name="message"
                                            type="text"
                                            value={this.state.fields["message"]}
                                            onChange={this.handleChange.bind(this, "message")} />
                                        <br />
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <input type="submit" value="Submit" />

                </form>
            </div>
        </>
    }
}

export default ContactForm;