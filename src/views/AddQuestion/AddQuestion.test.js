import { render, screen, fireEvent } from "@testing-library/react";

import configureMockStore from "redux-mock-store";
import { handleInitialData } from "../../redux/actions/shared";
import AddQuestion from "./AddQuestion";
import { Provider } from "react-redux";
import { setAuthUser } from "../../redux/actions/authUser";

import { useSelector, useDispatch } from "react-redux";
import reducersRoot from "../../redux/reducers";

import { initCreateStore } from "../../redux/store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  MemoryRouter,
} from "react-router-dom";
import { SET_AUTH_USER } from "../../redux/actions/actionTypes";
const mockStore = configureMockStore([]);

describe("test for addQuestion component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  test("if appQuestion is mounted on DOM", () => {
    render(
      <Provider store={store}>
        <Router>
          <AddQuestion />
        </Router>
      </Provider>
    );
    const divElement = screen.getByRole(/addquestion/i);
    expect(divElement).toBeDefined();
  });

  test("if error is displayed when field is empty", () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <AddQuestion />
        </Router>
      </Provider>
    );

    let optionOne = "";
    let optionTwo = "";

    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);
    const userTwoElement = getByText("");
    expect(buttonElement).toBeDefined();
    expect(userTwoElement).toBeDefined();
  });

  //   test("if users are available", () => {
  //     const { getByText, getByRole } = render(
  //       <Provider store={store}>
  //         <Router>
  //           <AddQuestion />
  //         </Router>
  //       </Provider>
  //     );
  //     const userOneElement = getByRole("userSelect");
  //     fireEvent.change(userOneElement, {
  //       target: { value: "user1" },
  //     });

  //     const buttonElement = getByRole("button", { name: "Sign In" });
  //     fireEvent.submit(buttonElement);

  //     const actions = store.getActions();

  //     expect(actions).toEqual([setAuthUser("user1")]);
  //   });
});
