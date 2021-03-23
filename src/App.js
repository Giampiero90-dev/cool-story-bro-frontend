import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MySpace from "./pages/MySpace";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import SpacesPage from "./pages/SpacesPage/SpacesPage";
import SpaceDetailsPage from "./pages/SpacesPage/SpaceDetailPage";

const Home = () => (
  <Jumbotron>
    <h1>Spaces</h1>
  </Jumbotron>
);
// const other = () => (
//   <Jumbotron>
//     <h1>My Space</h1>
//   </Jumbotron>
// );

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={SpacesPage} />
        <Route path="/myspace" component={MySpace} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/spacedetails/:id" component={SpaceDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
