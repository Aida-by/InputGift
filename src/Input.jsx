/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
import cities from "./cities.json";

import { useState } from "react";

const Input = ({ value, handleChange, hint, onSelect }) => {
  const [open, setOpen] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.startsWith(value)
  );
  const firstMatch = cities.find((city) =>
    city.startsWith(value)
  );

  return (
    <div className={styles.container}>
      <label htmlFor="input">{hint}</label>

      <div className={styles.input_container}>
        {/* Ghost text پشت input */}
        <input
          type="text"
          id="input"
          className={styles.text_input}
          value={value}
          onChange={(e) => {
            handleChange(e);
            e.target.value ==='' ? setOpen(false) : setOpen(true);
          }}
        />

        {firstMatch && value && (
          <div className={styles.ghost}>
            {value}
            <span>{firstMatch.slice(value.length)}</span>
          </div>
        )}
      </div>
      
      {open && filteredCities.length > 0 && (
        <div className={styles.searchResult}>
          <ul>
            {filteredCities.map((item) => (
              <li
                key={item}
                onClick={() => {
                  onSelect(item);
                  setOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Input;
