import { render, screen } from "@testing-library/react";
import { Customers } from "./Customers";
import { generateData } from "../../lib/generateData";
import { DataProviderContext } from "../../state/data";

describe("Customers", () => {
  test("renders correct data from context", async () => {
    const dummyData = await generateData(2);

    const wrapper = ({ children }) => (
      <DataProviderContext.Provider value={{ data: dummyData }}>
        {children}
      </DataProviderContext.Provider>
    );

    render(<Customers />, { wrapper });
    expect(screen.getByText(dummyData[0].name)).toBeInTheDocument();
    expect(screen.getByText(dummyData[1].name)).toBeInTheDocument();
  });

  test("renders an error if occurred", () => {
    const wrapper = ({ children }) => (
      <DataProviderContext.Provider value={{ error: new Error("test error") }}>
        {children}
      </DataProviderContext.Provider>
    );

    render(<Customers />, { wrapper });
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
