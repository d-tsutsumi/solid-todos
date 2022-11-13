import { css } from "@emotion/css";
import { Component, createSignal } from "solid-js";
import FormGroup from "../formArea/inputForm";
import Todo from "../todos/Todo";
import TodoList from "../todos/TodoList";

export type TodoType = {
  id: string;
  body: string;
  title: string;
};

export type submitEvent = Event & {
  submitter: HTMLElement;
} & {
  currentTarget: HTMLFormElement;
  target: Element;
};

const Content: Component = () => {
  const [title, setTitle] = createSignal("");
  const [body, setBody] = createSignal("");
  const [todos, setTodos] = createSignal<TodoType[]>([
    { id: "1", title: "TODO1", body: "国語" },
    { id: "2", title: "TODO2", body: "算数テスト" },
    { id: "3", title: "TODO3", body: "英語テスト" },
    { id: "4", title: "TODO4", body: "英語テスト" },
    { id: "5", title: "TODO5", body: "英語テスト" },
    { id: "6", title: "TODO6", body: "英語テスト" },
  ]);

  const onSubmit = (e: submitEvent) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos[prevTodos.length -1 ].id + 1, title: title(), body: body() },
    ]);
    setTitle("")
    setBody("")
  };

  const formProps = { title, setTitle, body, setBody, onSubmit };
  return (
    <>
      <div class={formWrapper}>
        <FormGroup {...formProps} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

const formWrapper = css({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

export default Content;
