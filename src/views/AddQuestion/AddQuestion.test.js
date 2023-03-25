import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import configureMockStore from "redux-mock-store";
import { handleInitialData } from "../../redux/actions/shared";
import AddQuestion from "./AddQuestion";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { setAuthUser } from "../../redux/actions/authUser";
import { handleSaveQuestion } from "../../redux/actions/questions";

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

// jest.mock("react-redux");
const mockStore = configureMockStore([thunk]);

describe("test for addQuestion component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      authenticatedUser: "User1",
      questions: {},
    });
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

  test("if error is displayed when field is empty", async () => {
    const { getByText, getByRole, getAllByText } = render(
      <Provider store={store}>
        <Router>
          <AddQuestion />
        </Router>
      </Provider>
    );

    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(getAllByText("Field is required").length).toBe(2);
    });
  });

  test("if submission is succeesful when all conditions are met", async () => {
    // const mockDispatch = jest.fn();
    // useDispatch.mockReturnValue(mockDispatch);
    const { getByText, getByRole, getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <AddQuestion />
        </Router>
      </Provider>
    );
    const optionOneInput = getByPlaceholderText("Enter option one");
    const optionTwoInput = getByPlaceholderText("Enter option Two");
    fireEvent.change(optionOneInput, { target: { value: "Option 1" } });
    fireEvent.change(optionTwoInput, { target: { value: "Option 2" } });
    const buttonElement = getByRole("button", { name: "Submit" });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      const actions = store.getActions();
      console.log("dff", handleSaveQuestion("Option 1", "Option 2", "User1"));
      expect(actions).toEqual([
        handleSaveQuestion("Option 1", "Option 2", "User1"),
      ]);
    });
  });
});
