import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { game } from "../hooks/useGames";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";
import { genre } from "../hooks/useGenre";
import { PlatformListItem } from "../hooks/usePlatforms";
import { gameQuery } from "../App";

interface Props {
  gameQuery: gameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { dataList, error, loading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if(error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={7}
        p="10px"
        m={2}
      >
        {loading && skeleton.map((data) => <Skeletons key={data} />)}
        {dataList.map((game) => (
          <GameCard key={game.id} gameObject={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
