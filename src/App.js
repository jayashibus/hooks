import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Component/home";
import Message from "./Component/messages";
import Friends from "./Component/friends";
import Navbar from "./Component/navbar";
import TaskTracker from "./Component/TaskTracker/TaskTracker";
import Search from "./Component/Search/Search";
import Example from "./Component/Example/Example";
import ChangeTitle from "./Component/Example/ChangeTitle";
import UseStateArray from "./Component/Example/UseStateArray";
import MultipleState from "./Component/Example/MultipleState";
//import Counter from "./Component/Example/Counter";
import DeleteList from "./Component/Example/DeleteList";
import GetApi from "./Component/Api/GetApi";
import Login from "./Component/Login/Login";
import FetchApi from "./Component/Example/FetchApi";
import ShowHide from "./Component/Example/ShowHide";
import FormHandler from "./Component/Example/FormHandler";
import ProjectList from "./Component/Projects/ProjectList";
import BirthdayRemainder from "./Component/Projects/BirthdayRemainder/BirthdayRemainder";
import Tour from "./Component/Projects/Tour/Tour";
import "bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "./Component/Redux/features/counter/Counter";
import Test from "./Component/Test/test";
import List from "./Component/Listing/list";
import Pipeline from "./Component/Pipeline/Pipeline";
import ThreeSixty from "./Component/ThreeSixty/ThreeSixty";
import Assignment from "./Component/Assignment/assignment";
import MotionFrame from "./Component/MotionFrame/motionFrame";
import TailWind from "./Component/Tailwind/tailWind";
import DaisyUi from "./Component/DaisyUI/daisyUi";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="messages" element={<Message />} />
          <Route path="friends" element={<Friends />} />
          <Route path="tasktracker" element={<TaskTracker />} />
          <Route path="search" element={<Search />} />
          <Route path="example" element={<Example />} />
          <Route path="/example/changetitle" element={<ChangeTitle />} />
          <Route path="/example/usesstatearray" element={<UseStateArray />} />
          <Route path="/example/multiplestate" element={<MultipleState />} />
          <Route path="/example/counter" element={<Counter />} />
          <Route path="/example/deletelist" element={<DeleteList />} />
          <Route path="/example/fetchapi" element={<FetchApi />} />
          <Route path="/example/showhide" element={<ShowHide />} />
          <Route path="/example/formhandler" element={<FormHandler />} />
          <Route path="api" element={<GetApi />} />
          <Route path="login" element={<Login />} />
          <Route path="projects" element={<ProjectList />} />
          <Route
            path="projects/birthdayremainder"
            element={<BirthdayRemainder />}
          />
          <Route path="projects/tour" element={<Tour />} />
          <Route path="redux" element={<Counter />} />
          <Route path="test" element={<Test />} />
          <Route path="list" element={<List />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="360" element={<ThreeSixty />} />
          <Route path="assignment" element={<Assignment />} />
          <Route path="motionframe" element={<MotionFrame />} />
          <Route path="tailwind" element={<TailWind />} />
          <Route path="daisyui" element={<DaisyUi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
