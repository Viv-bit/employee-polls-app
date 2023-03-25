import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { initCreateStore } from "./redux/store";

describe("test for app component", () => {
  test("if app is mounted on DOM", () => {
    render(
      <Provider store={initCreateStore()}>
        <App />
      </Provider>
    );
    const divElement = screen.getByText(/app/i);

    expect(divElement).toBeDefined();
  });
});
