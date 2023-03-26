import { showLoading, hideLoading } from "react-redux-loading";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useDispatch } from "react-redux";

import { saveAnswer } from "../../utils/API";
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
jest.mock("../../utils/api", () => ({
  saveQuestion: jest.fn(),
}));
const mockSaveAnswer = jest.fn();
describe("handlesaveAnswer", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      authenticatedUser: "User1",
      question: {},
    });
    mockSaveAnswer.mockClear();

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

    const optionOneText = "Option one";
    const optionTwoText = "Option two";
    const id = "123";
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <Question id={question.id} question={question} />
      </Provider>
    );
    const optionOne = getByLabelText("Option one");
    const submitButton = getByText("Submit");
    fireEvent.click(optionOne);
    fireEvent.click(submitButton);

    console.log(question);

    expect(mockSaveAnswer).toHaveBeenCalledWith(question);
    await waitFor(() => expect(mockSaveAnswer).toHaveBeenCalledTimes(1));

    //     const myFunction = jest.fn();
    // myFunction('arg');
    // expect(myFunction).toHaveBeenCalledWith('arg');
    // expect(myFunction).toHaveBeenCalledTimes(1);
    // await store.dispatch(handlesaveAnswer(optionOneText, optionTwoText, id));

    // expect(saveQuestion).toHaveBeenCalledWith({
    //   optionOneText,
    //   optionTwoText,
    //   author,
    // });
    // await waitFor(() => {
    //   expect(handlesaveAnswer).toHaveBeenCalledWith(
    //     optionOneText,
    //     optionTwoText,
    //     id
    //   );
    //   expect(dispatchMock).toHaveBeenCalledTimes(1);
    // });
  });
});
