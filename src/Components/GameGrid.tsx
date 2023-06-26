import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames, { game } from "../hooks/useGames";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQuery from "./storeQuery";

const GameGrid = () => {
  const { gameQuery } = useGameQuery();
  const {
    data: dataList,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text>{error.message}</Text>;

  const fetchGameCount = dataList?.pages.reduce(
    (acc, res) => acc + res.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchGameCount ? fetchGameCount : 0}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={<Spinner marginLeft={4} />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={7}
        p="10px"
        m={4}
      >
        {isLoading && skeleton.map((data) => <Skeletons key={data} />)}
        {dataList?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} gameObject={game}></GameCard>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
