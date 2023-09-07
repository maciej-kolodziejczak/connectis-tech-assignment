import { createContext, useState, useEffect, useContext } from "react";
import { generateData, generateDataFail } from "../lib/generateData";

/**
 * @typedef {(import ("../lib/generateData").Customer)} Customer
 * @typedef {{
 *  isLoading: boolean;
 *  data: Customer[];
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
  const [isLoading, setIsLoading] = useState(true);

  /**
   * @param {() => Promise<Customer[]>} fetcher
   */
  async function fetchData(fetcher) {
    try {
      const data = await fetcher();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * @type {ContextValue}
   */
  const contextValue = {
    data,
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
