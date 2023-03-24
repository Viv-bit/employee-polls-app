import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../redux/actions/shared";

// Import all components here
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./Leaderboard";
import NotFound from "./NotFound";
import PollSwitch from "./PollSwitch";
import AuthRoute from "../routes/AuthRoute";
import Navigation from "../components/Navigation";

const App = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(({ authUser }) => authUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <LoadingBar />
        {authUser && <Navigation />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <AuthRoute>
                {" "}
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="add"
            element={
              <AuthRoute>
                <AddQuestion />
              </AuthRoute>
            }
          />
          <Route
            path="questions/:question_id"
            element={
              <AuthRoute>
                <PollSwitch />
              </AuthRoute>
            }
          />
          <Route
            path="leaderboard"
            element={
              <AuthRoute>
                <LeaderBoard />
              </AuthRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
