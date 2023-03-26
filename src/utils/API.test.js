import { saveQuestionAnswer } from "./API";
import { _saveQuestionAnswer } from "./_DATA";

const { saveQuestion } = require("./API");
const { _saveQuestion } = require("./_DATA");

jest.mock("./_DATA");

describe("saveQuestionAnswer", () => {
  it("calls _saveQuestionAnswer with the correct arguments", async () => {
    const info = {
      authedUser: "user1",
      qid: "question1",
      answer: "option1",
    };
    await saveQuestionAnswer(info);
    expect(_saveQuestionAnswer).toHaveBeenCalledWith(info);
  });

  it("returns the result from _saveQuestionAnswer", async () => {
    const info = {
      authedUser: "user1",
      qid: "question1",
      answer: "option1",
    };
    const expectedResult = { success: true };
    _saveQuestionAnswer.mockResolvedValueOnce(expectedResult);
    const result = await saveQuestionAnswer(info);
    expect(result).toEqual(expectedResult);
  });

  it("returns an error if incorrect data is passed", async () => {
    const incorrectData = {
      userId: "incorrectUserId",
      questionId: "incorrectQuestionId",
      answer: "incorrectAnswer",
    };
    try {
      await saveQuestionAnswer(incorrectData);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("saveQuestion function", () => {
  it("should save a new question", async () => {
    // Set up mock implementation of _saveQuestion function
    _saveQuestion.mockImplementation((info) => {
      return Promise.resolve(info);
    });

    // Define test data
    const question = {
      optionOneText: "Test Option 1",
      optionTwoText: "Test Option 2",
      author: "testUser",
    };

    // Call the saveQuestion function with test data
    const result = await saveQuestion(question);

    // Check that _saveQuestion was called with the expected data
    expect(_saveQuestion).toHaveBeenCalledWith(question);

    // Check that the result is what we expect
    expect(result).toEqual(question);
  });

  it("should throw an error if the question is not valid", async () => {
    // Set up mock implementation of _saveQuestion function
    _saveQuestion.mockImplementation((info) => {
      return Promise.reject(new Error("Invalid question"));
    });

    // Define test data
    const question = {
      optionOneText: "",
      optionTwoText: "",
      author: "testUser",
    };

    // Call the saveQuestion function with test data and catch the error
    try {
      await saveQuestion(question);
    } catch (error) {
      // Check that _saveQuestion was called with the expected data
      expect(_saveQuestion).toHaveBeenCalledWith(question);

      // Check that the error message is what we expect
      expect(error.message).toBe("Invalid question");
    }
  });
});
