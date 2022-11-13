import type { Component } from "solid-js";
import type { TodoType } from "../content/Content";
import { css } from "@emotion/css";

const Todo: Component<TodoType> = ({ title, body }) => (
  <li class={liStyle}>
    <p class={pStyle}>{title}</p>
    <p class={pStyle}>{body}</p>
  </li>
);

const liStyle = css({
  padding: "0.5rem",
  width: "400px",
  transition: "box-shadow 0.3s",
  boxShadow: "0 2px 5px #ccc;",
  ":hover": {
    boxShadow:
      "box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)",
  },
});
const pStyle = css({
  color: "#A2A2A2",
  textAlign: "left",
  textIndent: "1em",
  fontSize: "16px",
  lineHeight: "26px",
  transition: "color 0.3s",
  ":hover": {
    color: "#555",
  },
});
export default Todo;
