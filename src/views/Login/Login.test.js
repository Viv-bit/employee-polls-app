import { render, screen, fireEvent } from "@testing-library/react";

import configureMockStore from "redux-mock-store";
import { handleInitialData } from "../../redux/actions/shared";
import Login from "./Login";
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

describe("test for login component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      users: {
        user1: { id: "user1", name: "User One" },
        user2: { id: "user2", name: "User Two" },
      },
      authenticatedUser: null,
    });
  });
  test("if login is mounted on DOM", () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const divElement = screen.getByRole(/authenticate/i);
    expect(divElement).toBeDefined();
  });

  test("if users are available", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const userOneElement = getByText("User One");
    const userTwoElement = getByText("User Two");
    expect(userOneElement).toBeDefined();
    expect(userTwoElement).toBeDefined();
  });

  test("if users are available", () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const userOneElement = getByRole("userSelect");
    fireEvent.change(userOneElement, {
      target: { value: "user1" },
    });

    const buttonElement = getByRole("button", { name: "Sign In" });
    fireEvent.submit(buttonElement);

    const actions = store.getActions();

    expect(actions).toEqual([setAuthUser("user1")]);
  });
});
