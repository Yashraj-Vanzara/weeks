import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { test } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../utils/appStore";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load Header Component with login button", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );

  const lgnButton=screen.getByRole("button")
  expect(lgnButton).toBeInTheDocument()
});


test("Should load Header Component with cart 0 items", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );

  const items=screen.getByText(/cart\s*0/i);
  expect(items).toBeInTheDocument()
});
test("should chagne the login button to logout", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );

  const lgnButton=screen.getByRole("button",{name:"Login"})

  fireEvent.click(lgnButton)
   const lonButton=screen.getByRole("button",{name:"Logout"})

  expect(lonButton).toBeInTheDocument()
});
