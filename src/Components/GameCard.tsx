import React from "react";
import { game } from "../hooks/useGames";

import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "./services/image-url";
import CardLayout from "./CardLayout";
import Emojis from "./Emojis";

interface Props {
  gameObject: game;
}

const GameCard = ({ gameObject }: Props) => {
  return (
    <CardLayout>
      <Card>
        <Image
          src={getCropedImageUrl(gameObject.background_image)}
          borderRadius="sm"
        />
        <CardBody>
          <HStack justifyContent="space-between" pb="10px">
            <PlatformIcons
              platforms={gameObject.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={gameObject.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {gameObject.name}
            <Emojis rating={gameObject.rating_top}></Emojis>
          </Heading>
        </CardBody>
      </Card>
    </CardLayout>
  );
};

export default GameCard;
