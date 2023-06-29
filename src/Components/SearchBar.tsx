import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import "../index.css";
import useGameQuery from "./storeQuery";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setSearchText } = useGameQuery();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          navigate("/");
          setSearchText(ref.current.value);
        }
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
