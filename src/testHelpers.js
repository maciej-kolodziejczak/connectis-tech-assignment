import { render } from "@testing-library/react";
import { DataProvider } from "./state/data";

export function withDataProvider(ui, { providerProps, ...renderOptions }) {
  return render(
    <DataProvider.Provider {...providerProps}>{ui}</DataProvider.Provider>,
    renderOptions
  );
}
