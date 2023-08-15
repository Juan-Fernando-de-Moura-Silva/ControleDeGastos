import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import "jest-localstorage-mock"; // Importe o pacote
import "@testing-library/jest-dom/extend-expect"; // Importe a função toBeInTheDocument

describe("App tests", () => {
  test("renders header correctly", () => {
    render(<App />);
    const headerElement = screen.getByText(/Controle Financeiro/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("calculates total correctly", () => {
  const mockTransaction = {
    id: "1",
    description: "Test Transaction",
    amount: "100",
    expense: false,
  };

  const { container } = render(<App />);
  const addTransactionButton = screen.getByText("Adicionar Transação");

  expect(container).toBeInTheDocument();

  // Add a transaction
  addTransactionButton.click();
  const descriptionInput = screen.getByLabelText("Descrição");
  const amountInput = screen.getByLabelText("Valor");
  const addButton = screen.getByText("Adicionar");

  // Fill out the transaction form
  descriptionInput.value = mockTransaction.description;
  amountInput.value = mockTransaction.amount;

  addButton.click();

  // Check if total is correctly calculated
  const totalElement = screen.getByText(`R$ ${mockTransaction.amount}`);
  expect(totalElement).toBeInTheDocument();
});
});


