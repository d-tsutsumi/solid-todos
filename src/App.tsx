import type { Component } from 'solid-js';
import Content from './components/content/Content';
import Header from './components/layout/Header';

const App: Component = () => {
  return (
    <>
    <Header />
    <Content />
    </>
  );
};

export default App;
