import s from "./Customers.module.css";

import { useDataState } from "../../state/data";
import { Customer } from "../Customer/Customer";

export function Customers() {
  const { data, error } = useDataState();

  if (error) {
    return (
      <div>{JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}</div>
    );
  }
  
  return (
    <div className={s.customers}>
      {data.map((customer) => (
        <Customer customer={customer} key={customer.id} />
      ))}
      )
    </div>
  );
}
