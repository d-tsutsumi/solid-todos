import { css } from "@emotion/css";
import { Component } from "solid-js";

type Props = {
  text: string;
};

const SubmitButton: Component<Props> = ({ text }) => (
  <button class={buttonStyle}>{text}</button>
);

const buttonStyle = css({
  padding: "1rem",
  width: "50%",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  cursor: "pointer",
  color: "#FF951B",
  background: "#FFF0D9",
  border: "2px solid #FF9600",
});

export default SubmitButton;
