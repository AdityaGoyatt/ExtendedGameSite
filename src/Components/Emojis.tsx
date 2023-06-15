import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "./images/bulls-eye.webp";
import meh from "./images/meh.webp";
import thumbsUp from "./images/thumbs-up.webp";
interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  const emojies: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Thumbs-Up", boxSize: "25px" },
    5: { src: bullseye, alt: "Bulls Eyes", boxSize: "35px" },
  };

  return <Image marginTop={3} {...emojies[rating]}></Image>;
};

export default Emojis;
