import useScreenShots from "../hooks/useScreenShots";
import { SimpleGrid, Image, Spinner } from "@chakra-ui/react";
interface Props {
  gameId: string;
}
const SShots = ({ gameId }: Props) => {
  const { data, isLoading } = useScreenShots(gameId);
  if (isLoading) return <Spinner></Spinner>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={3}>
      {data?.map((screen) => (
        <Image borderRadius={5} key={screen.id} src={screen.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default SShots;
