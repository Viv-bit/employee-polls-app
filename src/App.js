import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "./redux/actions/shared";

// Import all components here
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import AddQuestion from "./views/AddQuestion/index";
import LeaderBoard from "./views/Leaderboard/Leaderboard";
import NotFound from "./views/NotFound";
import Switch from "./views/Switch";
import AuthRoute from "./routes/AuthRoute";
import Navigation from "./components/Navigation";

const App = () => {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector(
    ({ authenticatedUser }) => authenticatedUser
  );

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App" data-testid="app">
        <LoadingBar />
        {authenticatedUser && <Navigation />}
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
                <Switch />
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
