import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ItemCounter from "../src/components/ItemCounter";
import "@testing-library/jest-dom/extend-expect";
import { calculateTotalPrice } from "./utils";

test("ItemCounter should display the number and trigger events correctly", () => {
  const onMinusClick = jest.fn((number) => number - 1);
  const onPlusClick = jest.fn((number) => number + 1);

  const { getByText, getByTestId } = render(
    <ItemCounter
      number={1}
      onMinusClick={onMinusClick}
      onPlusClick={onPlusClick}
    />
  );

  const numberText = getByText(1);
  expect(numberText).toBeInTheDocument();

  const minusButton = getByTestId("minus-button");
  fireEvent.click(minusButton);
  expect(onMinusClick).toHaveBeenCalledWith(1);

  const plusButton = getByTestId("plus-button");
  fireEvent.click(plusButton);
  expect(onPlusClick).toHaveBeenCalledWith(1);
});

test("calculateTotalPrice should correctly calculate the total price", () => {
  const items = [
    {
      price: 33,
      quantity: 1,
    },
    {
      price: 5,
      selectedModifier: {
        price: 33,
      },
      quantity: 1,
    },
    {
      price: 13,
      quantity: 1,
    },
  ];

  const totalPrice = calculateTotalPrice(items);

  expect(totalPrice).toBe("R$84,00");
});
