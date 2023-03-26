import { showLoading, hideLoading } from "react-redux-loading";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useDispatch } from "react-redux";

import { saveQuestionAnswer } from "../../utils/API";
import { handlesaveAnswer } from "../../redux/actions/questions";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  MemoryRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import AuthRoute from "../../routes/AuthRoute";
import Question from "../../components/Question";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);
jest.mock("../../utils/API", () => ({
  saveQuestionAnswer: jest.fn(),
}));
const mockSaveAnswer = jest.fn();
describe("handlesaveAnswer", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      authenticatedUser: "User1",
      question: {},
    });

    // mock useDispatch to return the mock implementation of handlesaveAnswer
    // useDispatch.mockReturnValue(jest.fn(() => Promise.resolve()));
  });
  test("should show error message if user submits without selecting an option", async () => {
    const question = {
      id: "123",
      optionOne: { text: "Option one" },
      optionTwo: { text: "Option two" },
    };
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <Question id={question.id} question={question} />
      </Provider>
    );
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);
    await waitFor(() => {
      const errorMessage = getByText("Ensure to select an answer");
      expect(errorMessage).toBeDefined();
    });
  });

  it("should submit answer when user selects an option and clicks submit", async () => {
    const question = {
      id: "123",
      optionOne: { text: "Option one" },
      optionTwo: { text: "Option two" },
    };
    const authedUser = "user1";
    const optionOneText = "Option one";
    const qid = "123";

    // Set up mock store
    const store = mockStore({});

    // Mock the API call to save the question
    saveQuestionAnswer.mockResolvedValue({});
    const { getByText, getByRole, getByLabelText } = render(
      <Provider store={store}>
        <Question id={question.id} question={question} />
      </Provider>
    );
    const optionOne = getByLabelText("Option one");
    fireEvent.change(optionOne, {
      target: { value: "Option one", name: "answer" },
    });
    const buttonElement = getByRole("button", { name: "Submit" });

    fireEvent.click(buttonElement);

    await store.dispatch(handlesaveAnswer(authedUser, qid, optionOneText));

    expect(saveQuestionAnswer).toHaveBeenCalledWith({
      authedUser,
      qid,
      answer: optionOneText,
    });
  });
});
