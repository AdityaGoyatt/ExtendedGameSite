import useGenre, { genre } from "../hooks/useGenre";
import {
  List,
  HStack,
  Image,
  Heading,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import getCropedImageUrl from "./services/image-url";
import useGameQuery from "./storeQuery";
import useNameStore from "./storeNames";

const GenreMainList = () => {
  const { gameQuery, setGenreId } = useGameQuery();
  const { setGenreName } = useNameStore();
  const { data, error, isLoading } = useGenre();
  const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Heading p="8px">{error.message}</Heading>;
  return (
    <>
      <Heading pb="8px">Genre</Heading>
      {isLoading &&
        arry.map((data) => (
          <Skeleton key={data * 100} height="40px" marginBottom={5}></Skeleton>
        ))}
      {data?.map((data) => (
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
              fontWeight={data.id === gameQuery.genreId ? "bold" : "normal"}
              colorScheme="white"
              variant="link"
              onClick={() => {
                setGenreId(data.id);
                setGenreName(data.name);
              }}
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
