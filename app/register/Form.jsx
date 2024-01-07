"use client";
import axios from "axios";
import { useRef } from "react";

export default function Form() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("api/auth/register", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        ref={emailRef}
        className="text-black"
        type="email"
        placeholder="type your email"
      />
      <label htmlFor="password">Password</label>
      <input
        ref={passwordRef}
        className="text-black"
        type="password"
        placeholder="type your password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
