import type { Component } from "solid-js";
import { css } from "@emotion/css";

const Header: Component = () => (
  <header class={headerWrapper}>
    <h3 class={titleStyle}>TodoList</h3>
  </header>
);

const headerWrapper = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const titleStyle = css({
  fontSize: "32px",
});

export default Header;
