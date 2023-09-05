import s from "./Controls.module.css";
import { useDataState } from "../../state/data";

export function Controls() {
  const { refresh, fail } = useDataState();

  return (
    <div className={s.controls}>
      <button className={s.button} type="button" onClick={() => refresh()}>
        Refresh
      </button>
      <button className={s.button} type="button" onClick={() => fail()}>
        Trigger error
      </button>
    </div>
  );
}
