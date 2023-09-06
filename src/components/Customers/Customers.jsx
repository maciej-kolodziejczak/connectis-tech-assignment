import s from "./Customers.module.css";

import { useDataState } from "../../state/data";
import { Customer } from "../Customer/Customer";

export function Customers() {
  const { data } = useDataState();
  return (
    <div className={s.customers}>
      {data.map((customer) => (
        <Customer customer={customer} key={customer.id} />
      ))}
      )
    </div>
  );
}
