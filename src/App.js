import { Customers } from "./components/Customers/Customers";
import { Controls } from "./components/Controls/Controls";
import { useDataState } from "./state/data";

function App() {
  const { isLoading } = useDataState();

  return (
    <>
      <Controls />
      {isLoading ? <p>Loading...</p> : <Customers />}
    </>
  );
}

export default App;
