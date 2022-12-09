import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "antd/dist/reset.css"
import "./App.css"

import * as constants from "../constants"

// fonts
import "../assets/fonts/Aileron/Aileron-Bold.otf"
import "../assets/fonts/Aileron/Aileron-Regular.otf"

import TopNav from "./TopNav"
import Footer from "./Footer"
import HomeView from "./HomeView"
import ProjectsView from "./ProjectsView"
import ResourcesView from "./ResourcesView"
import BooksView from "./BooksView"
import ProgrammingResourcesView from "./ProgrammingResourcesView"
import SowView from "./SowView"
import NowView from "./NowView"

const App = () => {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path={constants.ROUTE_HOME} element={<HomeView />} />
          <Route path={constants.ROUTE_PROJECTS} element={<ProjectsView />} />
          <Route path={constants.ROUTE_RESOURCES} element={<ResourcesView />} />
          <Route path={constants.ROUTE_BOOKS} element={<BooksView />} />
          <Route
            path={constants.ROUTE_PROGRAMMING_RESOURCES}
            element={<ProgrammingResourcesView />}
          />
          <Route path={constants.ROUTE_SOW_RESOURCES} element={<SowView />} />
          <Route path={constants.ROUTE_NOW} element={<NowView />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
