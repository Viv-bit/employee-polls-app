import { render, screen, fireEvent } from "@testing-library/react";

import configureMockStore from "redux-mock-store";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";

import { initCreateStore } from "../../redux/store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  MemoryRouter,
} from "react-router-dom";

describe("test for dashboard component", () => {
  //   test("if dashboard is mounted on DOM", () => {
  //     render(
  //       <Provider store={initCreateStore()}>
  //         <Router>
  //           <Routes>
  //             <Route path="/home" element={<Dashboard />} />
  //           </Routes>
  //         </Router>
  //       </Provider>
  //     );
  //     const divElement = screen.getByRole("dashboard");
  //     console.log("ggw", divElement);
  //     expect(divElement).toBeDefined();
  //   });
});
