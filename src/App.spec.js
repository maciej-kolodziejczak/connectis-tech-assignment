import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { DataProviderContext } from "./state/data";

describe("App", () => {
  test("renders loading text when data is not yet available", () => {
    const wrapper = ({ children }) => (
      <DataProviderContext.Provider value={{ isLoading: true }}>
        {children}
      </DataProviderContext.Provider>
    );

    render(<App />, { wrapper });
    const loadingText = screen.getByText(/loading/i);
    expect(loadingText).toBeInTheDocument();
  });
});
