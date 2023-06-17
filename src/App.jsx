import { useState } from "react";

import Header from "./components/Header";
import MainContainer from "./components/MainContailer";
const App = () => (
  <>
    <div className="overflow-hidden">
      <header>
        <Header />
      </header>
      <section>
        <MainContainer />
      </section>
      <footer>footer</footer>
    </div>
  </>
);

export default App;
