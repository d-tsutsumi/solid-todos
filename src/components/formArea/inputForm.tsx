import { css } from "@emotion/css";
import type { Component, Accessor, Setter } from "solid-js";
import InputForm from "./input";
import SubmitButton from "./button";
import type { submitEvent } from "../content/Content";

type Props = {
  title: Accessor<string>;
  setTitle: Setter<string>;
  body: Accessor<string>;
  setBody: Setter<string>;
  onSubmit: (e: submitEvent) => void;
};

const FormGroup: Component<Props> = (props) => {
  const { title, setTitle, body, setBody, onSubmit } = props;
  return (
    <form class={form} onSubmit={onSubmit}>
      <div class={inputWrapperStyle}>
        <InputForm placeHolder="title" value={title} setter={setTitle} />
      </div>
      <div class={inputWrapperStyle}>
        <InputForm placeHolder="body" value={body} setter={setBody} />
      </div>
      <div class={inputWrapperStyle}>
        <SubmitButton text="登録" />
      </div>
    </form>
  );
};

const inputWrapperStyle = css({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
  marginTop: "1rem",
});

const form = css({
  width: "70%",
});

export default FormGroup;
