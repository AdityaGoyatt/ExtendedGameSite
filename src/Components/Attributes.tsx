import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PropertyLayout from "./PropertyLayout";
import { game } from "../hooks/useGames";

interface Props {
  data: game;
}

const Attributes = ({ data }: Props) => {
  return (
    <SimpleGrid columns={2} paddingTop={7}>
      <PropertyLayout heading="Genres">
        {data?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </PropertyLayout>
      <PropertyLayout heading="MetaCritic">
        <CriticScore score={data?.metacritic || 0} />
      </PropertyLayout>
      <PropertyLayout heading="Platforms">
        {data?.parent_platforms.map((platforms) => (
          <Text key={platforms.platform.id}>{platforms.platform.name}</Text>
        ))}
      </PropertyLayout>
      <PropertyLayout heading="Publisher">
        {data?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </PropertyLayout>
    </SimpleGrid>
  );
};

export default Attributes;
