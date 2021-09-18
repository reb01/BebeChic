/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
// import "./ContactForm.css";
init(`${process.env.YOUR_USER_ID}`);

const ContactForm = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const { register, handleSubmit, watch, errors } = useForm();
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm("mum-contact-form", "template_oddddao", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <Wrapper>
      <TextTop>SEND US A MESSAGE</TextTop>
      <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {errors === "required" && (
          <div role="alert">
            Name is required
            <br />
          </div>
        )}

        <Input
          {...register("user_name", { required: true })}
          maxLength="30"
          aria-invalid={errors ? "true" : "false"}
          type="text"
          placeholder="Name"
          style={{
            fontFamily: "Josefin Sans",
            fontSize: 17,
          }}
        />

        <Input
          {...register("user_email", { required: true })}
          type="email"
          placeholder="Email"
          style={{
            fontFamily: "Josefin Sans",
            fontSize: 17,
          }}
        />

        <Textarea
          {...register("message", { required: true })}
          maxLength="1500"
          placeholder="Message"
        />
        <Input type="hidden" name="contact_number" value={contactNumber} />
        <Button>Submit Form</Button>
      </Form>
    </Wrapper>
  );
};
export default ContactForm;

const TextTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 70px;
  margin-right: 70px; */
  /* margin-top: 35px; */
  margin-bottom: 25px;
  font-size: 20px;
  color: #3498db;
  font-weight: 700;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  /* justify-content: center; */
  /* width: 35vw; */
`;
const Button = styled.button`
  background: #f3c9d7;
  background-image: -webkit-linear-gradient(top, #f3c9d7, #f3c9d7);
  background-image: -moz-linear-gradient(top, #f3c9d7, #f3c9d7);
  background-image: -ms-linear-gradient(top, #f3c9d7, #f3c9d7);
  background-image: -o-linear-gradient(top, #f3c9d7, #f3c9d7);
  background-image: linear-gradient(to bottom, #f3c9d7, #f3c9d7);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  margin-bottom: 35px;
  margin-top: 35px;

  &:hover {
    background: #f3c9d7;
    background-image: -webkit-linear-gradient(top, #f6e4e1, #f6e4e1);
    background-image: -moz-linear-gradient(top, #f6e4e1, #f6e4e1);
    background-image: -ms-linear-gradient(top, #f6e4e1, #f6e4e1);
    background-image: -o-linear-gradient(top, #f6e4e1, #f6e4e1);
    background-image: linear-gradient(to bottom, #f6e4e1, #f6e4e1);
    text-decoration: none;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Textarea = styled.textarea`
  border: 1px solid #f6e4e1;
  padding: 1em;
  width: 25vw;
  outline: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 17px;
`;
const Input = styled.input`
  border: 1px solid #f6e4e1;
  padding: 1em;
  width: 25vw;
  outline: none;
`;
