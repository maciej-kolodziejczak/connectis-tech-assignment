import { fireEvent, render, screen } from "@testing-library/react";
import { Controls } from "./Controls";
import { DataProviderContext } from "../../state/data";

describe("Controls", () => {
  test("utilizes handler functions from context", () => {
    const refresh = jest.fn();
    const fail = jest.fn();

    const contextValue = {
      refresh,
      fail,
    };

    const wrapper = ({ children }) => (
      <DataProviderContext.Provider value={contextValue}>
        {children}
      </DataProviderContext.Provider>
    );

    render(<Controls />, { wrapper });
    fireEvent(
      screen.getByText("Refresh"),
      new MouseEvent("click", {
        bubbles: true,
      })
    );
    fireEvent(
      screen.getByText("Trigger error"),
      new MouseEvent("click", {
        bubbles: true,
      })
    );
    expect(refresh).toHaveBeenCalledTimes(1);
    expect(fail).toHaveBeenCalledTimes(1);
  });
});
