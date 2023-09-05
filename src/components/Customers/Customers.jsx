import { useDataState } from "../../state/data";

export function Customers() {
  const { data } = useDataState();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
