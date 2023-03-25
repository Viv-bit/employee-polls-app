import { render, screen, fireEvent } from "@testing-library/react";

import configureMockStore from "redux-mock-store";
import { handleInitialData } from "../../redux/actions/shared";
import Login from "./Login";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { initCreateStore } from "../../redux/store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  MemoryRouter,
} from "react-router-dom";
const mockStore = configureMockStore();
const store = mockStore();
describe("test for login component", () => {
  test("if login is mounted on DOM", () => {
    render(
      <Provider store={initCreateStore()}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    );
    const divElement = screen.getByRole(/authenticate/i);
    expect(divElement).toBeDefined();
  });

  // test("if navigation is successful after login", () => {
  //   render(
  //     <Provider store={store}>
  //       <Router>
  //         <Routes>
  //           <Route path="/" element={<Login />} />
  //         </Routes>
  //       </Router>
  //     </Provider>
  //   );

  //   const buttonElement = screen.getByRole("button");
  //   fireEvent.click(buttonElement);
  //   console.log("bhbh", store.getActions());
  //   expect(store.getActions()).toEqual([{ type: "SET_AUTH_USER" }]);
  // });

  // test("if user options are loaded", async () => {
  //   let store;
  //   beforeEach(() => {
  //     store = mockStore({ myData: "Some data" });
  //   });

  //   render(
  //     <Provider store={initCreateStore()}>
  //       <Router>
  //         <Routes>
  //           <Route path="/" element={<Login />} />
  //         </Routes>
  //       </Router>
  //     </Provider>
  //   );

  //   const dispatch = useDispatch();
  //   dispatch(handleInitialData());
  //   const users = await act(() => useSelector(({ users }) => users));
  //   console.log(users);
  //   const divElement = screen.getAllByRole("option");
  //   console.log("ahjdhd", divElement.length);
  //   expect(divElement.length).toBeGreaterThan(1);
  // });
});
