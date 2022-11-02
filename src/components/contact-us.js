import {
  Button,
  FormControl,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3d1soey',
        'template_w9ia62s',
        e.target,
        '_p02JMH-OM30WSzUh'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="contact-header">Contact Us</h2>
      </div>

      <form className="form-group" onSubmit={sendEmail}>
        <Typography variant="h5">NAME</Typography>
        <FormControl fullWidth>
          <OutlinedInput sx={style.formControl} name="name" required />
        </FormControl>

        <Typography variant="h5">EMAIL ADDRESS</Typography>
        <FormControl fullWidth>
          <OutlinedInput sx={style.formControl} name="email" required />
        </FormControl>

        <Typography variant="h5">SUBJECT</Typography>
        <FormControl fullWidth>
          <OutlinedInput sx={style.formControl} name="subject" required />
        </FormControl>

        <Typography variant="h5">MESSAGE</Typography>
        <FormControl fullWidth>
          <OutlinedInput
            rows={4}
            multiline
            sx={style.formControl}
            name="message"
            required
          />
        </FormControl>
        <Button type="submit" sx={style.button} fullWidth>
          <span>SEND</span>
        </Button>
      </form>
    </div>
  );
}

const style = {
  formControl: {
    backgroundColor: '#2E2B2B',
    marginBottom: '15px',
    borderRadius: '5px',
    fontSize: '15px',
    color: '#fff',
  },
  button: {
    fontSize: '15px',
    backgroundColor: '#fff',
  },
};
