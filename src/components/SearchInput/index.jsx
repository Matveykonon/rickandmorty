import { useCallback, useState } from 'react';
import Button from "../Button";
import "./index.css";

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onSearchChange = useCallback((e) => setValue(e.target.value), []);
  const onSubmit = useCallback(() => onSearch(value), [value, onSearch]);

  return (
    <div className="SearchInput">
      <input placeholder="Let's try to find smth..." value={value} onChange={onSearchChange} />
      <Button disabled={!!!value.trim()} onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default SearchInput;
