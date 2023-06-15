import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import "../index.css";

interface Props {
  handleClick: (searchText: string) => void;
}

const SearchBar = ({ handleClick }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) handleClick(ref.current.value);
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
