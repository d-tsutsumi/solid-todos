import { Accessor, Component, Index } from "solid-js";
import { css } from "@emotion/css";
import type { TodoType } from "../content/Content";
import Todo from "./Todo";

type Props = {
  todos: Accessor<TodoType[]>;
};
const TodoList: Component<Props> = ({ todos }) => {
  return (
    <ul class={tososStyle}>
      <Index each={todos()}>{(todo) => <Todo {...todo()} />}</Index>
    </ul>
  );
};

const tososStyle = css({
  margin: "0",
  padding:"0",
  display: "flex",
  flexFlow: "wrap",
  justifyContent: "center",
  listStyle: "none",
  border: "none",
  alignItems: "normal",
  width: "70%",
  gap: "10px",
  alignContent: "flex-start"
});
export default TodoList;
