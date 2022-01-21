import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import './contact.styles.scss';

class ContactPage extends React.Component {
  constructor() {
    super()

    this.state = {
        displayName: '',
        email: '',
        comments: ''
    }
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, comments } = this.state;

    if (!email) {
      alert("Please write a valid email address to contact you");
      return;
    }

    if(!comments) {
      alert("At least write a few words so we can get in touch with you regarding your issue or comment.")
      return;
    }

    if(!displayName){
      alert("Please provide us your name.")
      return;
    }

    try {
      this.setState({
        displayName: '',
        email: '',
        comments: ''
      })
      alert('Thanks! We will contact you inmediately. Meanwhile, enjoy your next shopping with us!');
      window.location.href="/shop";
     

    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, comments } = this.state;
    return (
      <div className='contact-page'>
        <h2 className='title'>CONTACT PAGE</h2>
        <span>Please fill this form and we will contact you inmediately.</span>
        <span>Thank you.</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='text'
            name='comments'
            value={comments}
            onChange={this.handleChange}
            label='Comments'
            required
          />
          <CustomButton type='submit'>SEND</CustomButton>
        </form>
      </div>
    );
  }

}

export default ContactPage;