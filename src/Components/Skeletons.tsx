import { SkeletonText, Card, CardBody, Skeleton } from "@chakra-ui/react";
import CardLayout from "./CardLayout";

const Skeletons = () => {
  return (
    <>
      <CardLayout>
        <Card>
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText noOfLines={3} spacing="4" skeletonHeight="2" />
          </CardBody>
        </Card>
      </CardLayout>
    </>
  );
};

export default Skeletons;
