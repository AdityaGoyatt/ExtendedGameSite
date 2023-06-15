import React from "react";
import useHttp from "../hooks/useHttp";
import useGenre, { genre } from "../hooks/useGenre";
import {
  List,
  HStack,
  Text,
  Image,
  Heading,
  Box,
  Link,
  Spinner,
  Skeleton,
  SkeletonText,
  Button,
  LinkBox,
} from "@chakra-ui/react";
import getCropedImageUrl from "./services/image-url";

interface Props {
  handleClick: (genre: genre) => void;
  selectGenre: genre | null;
}

const GenreMainList = ({ handleClick, selectGenre }: Props) => {
  const { dataList, error, loading } = useGenre();
  const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Heading pb="8px">Genre</Heading>

      {loading &&
        arry.map((data) => (
          <Skeleton key={data * 100} height="40px" marginBottom={5}></Skeleton>
        ))}
      {dataList.map((data) => (
        <List key={data.id}>
          <HStack pb="5px" borderRadius="4px">
            <Image
              src={getCropedImageUrl(data.image_background)}
              boxSize="40px"
              borderRadius="4px"
              objectFit="cover"
            ></Image>
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={data === selectGenre ? "bold" : "normal"}
              colorScheme="white"
              variant="link"
              onClick={() => handleClick(data)}
            >
              {data.name}
            </Button>
          </HStack>
        </List>
      ))}
    </>
  );
};
export default GenreMainList;
