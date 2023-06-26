import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import "../index.css";
import useGameQuery from "./storeQuery";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setSearchText } = useGameQuery();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search"
          variant="filled"
          borderRadius={20}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
