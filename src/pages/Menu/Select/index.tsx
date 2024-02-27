import { useState } from "react";
import styles from "./Select.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface ISelect {
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ select, setSelect }: ISelect) => {
  const [open, setOpen] = useState(false);

  const selectName =
    select && options.find((option) => option.value === select)?.name;

  return (
    <button
      className={classNames({
        [styles.select]: true,
        [styles["select--active"]]: select !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{selectName || "Ordernar por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.select__options]: true,
          [styles["select__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.select__option}
            key={option.value}
            onClick={() => setSelect(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Select;
