import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { Header } from "components/header/header";

const Home = (props: RouteComponentProps) => <div>Home</div>;
const Dash = (props: RouteComponentProps) => <div>Dash</div>;

function App() {
  return (
    <div className="App">
      <Header test="5" />
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
