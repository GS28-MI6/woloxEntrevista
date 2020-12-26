import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Lista from "../lista";
import store from "../../store";

it("Render: OK", () => {
  const { findByTestId, queryByTestId, queryByPlaceholderText } = render(
    <Provider store={store}>
      <Lista />
    </Provider>
  );

  expect(queryByTestId("titles")).toBeTruthy();
  expect(queryByPlaceholderText("Buscar...")).toBeTruthy();
});

describe("Search input", () => {
  it("Updates on change", () => {
    const { queryByPlaceholderText } = render(
      <Provider store={store}>
        <Lista />
      </Provider>
    );

    const searchInput = queryByPlaceholderText("Buscar...")

    fireEvent.change(searchInput, {target : {value: "Android"}})

    expect(searchInput.value).toBe("Android")
  });
});
