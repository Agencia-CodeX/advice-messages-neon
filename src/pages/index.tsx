/* eslint-disable jsx-a11y/anchor-is-valid */
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { api } from "../services/api";

export default function Home() {
  const [message, setMessage] = useState("");

  async function callAdvice() {
    await api
      .get("advice")
      .then((response) => {
        const { slip } = response.data;

        setMessage(slip.advice);
      })
      .catch((error: AxiosError) => {
        console.log(error.response);
        setMessage("advice not currently available");
      });
  }

  useEffect(() => {
    callAdvice();
  }, []);
  return (
    <>
      <div>
        <h1 className="neon">{message}</h1>

        <button type="button" onClick={callAdvice}>
          <span />
          <span />
          <span />
          <span />
          generate advice
        </button>
      </div>

      <div>
        <img src="image-logo.svg" alt="flower" />
      </div>
    </>
  );
}
