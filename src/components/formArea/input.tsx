import { css } from "@emotion/css";
import type { Accessor, Component, Setter } from "solid-js";

type Props = {
  value: Accessor<string | number>;
  placeHolder: string;
  setter: Setter<string | number>;
};

const InputForm: Component<Props> = ({ value, placeHolder, setter }) => (
  <input
    class={inputStyle}
    type="text"
    value={value()}
    placeholder={placeHolder}
    onChange={(e) => setter(e.currentTarget.value)}
  />
);

const inputStyle = css({
  background: "#fdfaf6",
  border: "1px solid #d3c8bd",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 1px 0 rgb(0 0 0 / 10%)",
  boxSizing: "border-box",
  fontFamily: "sans-serif",
  fontSize: "1em",
  lineHeight: "1.5rem",
  width: "50%",
  padding: "0.5rem",
});

export default InputForm;
