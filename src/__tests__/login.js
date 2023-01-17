import * as React from "react";
import Login from "./../components/authComponents/Login";
import { Provider } from "react-redux";
import store from "./.././redux/store";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("Login Integration Test Suites", () => {
  const handleSubmit = jest.fn();

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );

  const inputEmail = screen.getByLabelText(/Email address/);
  const inputPassword = screen.getByLabelText(/Password/);
  const submitbuttonElement = screen.getByRole("button");
  fireEvent.change(inputEmail, { target: { value: "denis@gmail.com" } });
  fireEvent.change(inputPassword, { target: { value: "123456" } });
  fireEvent.click(submitbuttonElement);

  expect(handleSubmit).toHaveBeenCalledWith({
    email: "denis@gmail.com",
    password: "123456",
  });
});
