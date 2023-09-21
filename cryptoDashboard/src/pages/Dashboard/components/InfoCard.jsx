import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagtext, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "p.purple" : "#fff"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        bg={inverted ? "#fff" : "p.purple"}
        color={inverted ? "p.purple" : "#fff"}
        borderRadius="full"
      >
        {tagtext}
      </Tag>
      <Text
        color={inverted ? "#fff" : "#000"}
        mt="4"
        fontWeight="medium"
        textStyle="h5"
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
