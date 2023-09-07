import { render, screen } from "@testing-library/react";
import { Customer } from "./Customer";
import { generateData } from "../../lib/generateData";

describe("Customer", () => {
  test("renders correct data", async () => {
    const dummyData = await generateData(1);

    render(<Customer customer={dummyData[0]} />);
    expect(screen.getByText(dummyData[0].name)).toBeInTheDocument();
    expect(screen.getAllByTestId("period-points")).toHaveLength(3);
    expect(screen.getByTestId("total-points")).toBeInTheDocument();
  });
});
