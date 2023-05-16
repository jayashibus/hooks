import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UnitTest from "./unitTest";

describe("UnitTest", () => {
  test("calculates the sum correctly", () => {
    const { getByLabelText, getByText } = render(<UnitTest />);
    const firstValueInput = getByLabelText("First Value");
    const secondValueInput = getByLabelText("Second Value");
    const submitButton = getByText("Submit");

    fireEvent.change(firstValueInput, { target: { value: "5" } });
    fireEvent.change(secondValueInput, { target: { value: "3" } });
    fireEvent.click(submitButton);

    const answer = getByText("Answer is : 53");
    expect(answer).toBeInTheDocument();
  });
});
