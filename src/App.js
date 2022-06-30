import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
import Redux from "./Component/Redux/Redux";
import { Counter } from "./Component/Redux/features/counter/Counter";

function App() {
  return (
    <div>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
