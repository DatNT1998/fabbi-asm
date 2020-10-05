import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StepOne from "./components/step1.component";
import StepTwo from "./components/step2.component";
import StepThree from "./components/step3.component";
import StepThreeTH from "./components/step33.component";
import StepFour from "./components/step4.component";

import "./App.css";
import MenuBar from "./components/menubar.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MenuBar />
        <Route exact path="/" component={StepOne} />
        <Route path="/step2/:id" component={StepTwo} />
        <Route path="/step3/:id" component={StepThreeTH} />
        <Route path="/step4/review" component={StepFour} />
      </BrowserRouter>
    </div>
  );
}

export default App;