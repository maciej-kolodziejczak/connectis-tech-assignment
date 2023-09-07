import { createContext, useState, useEffect, useContext } from "react";
import { generateData, generateDataFail } from "../lib/generateData";

/**
 * @typedef {(import ("../lib/generateData").Customer)} Customer
 * @typedef {{
 *  isLoading: boolean;
 *  data: Customer[];
 *  error: Error | null,
 *  refresh: () => void;
 *  fail: () => void;
 * }} ContextValue
 */

/**
 * @type {React.Context<ContextValue>}
 */
export const DataProviderContext = createContext(null); // @todo fix this

export function DataProvider({ children }) {
  /**
   * @type {[Customer[], (data: Customer[]) => void]}
   */
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * @param {() => Promise<Customer[]>} fetcher
   */
  async function fetchData(fetcher) {
    try {
      const data = await fetcher();
      setData(data);
      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError(new Error(err));
      setIsLoading(false);
    }
  }

  /**
   * @type {ContextValue}
   */
  const contextValue = {
    data,
    error,
    isLoading,
    refresh: () => {
      fetchData(generateData);
    },
    fail: () => {
      fetchData(generateDataFail);
    },
  };

  useEffect(() => {
    fetchData(generateData);
  }, []);

  return (
    <DataProviderContext.Provider value={contextValue}>
      {children}
    </DataProviderContext.Provider>
  );
}

export function useDataState() {
  return useContext(DataProviderContext);
}
