import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { CharacterType } from "../../types/CharacterType";
import React from "react";

export function CharactersCard({ data }: { data: CharacterType }) {
  const [hideScrollbar, setHideScrollbar] = React.useState(false);

  const handleScroll = (event: React.UIEvent) => {
    const { scrollTop } = event.currentTarget as HTMLDivElement;
    if (scrollTop === 0) {
      setHideScrollbar(true);
    } else {
      setHideScrollbar(false);
    }
  };
  return (
    <Card
      bg="black"
      height="100%"
      overflowY="scroll"
      onScroll={handleScroll}
      sx={{
        "::-webkit-scrollbar": {
          width: hideScrollbar ? "0.5em" : "inherit",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: hideScrollbar ? "transparent" : "inherit",
        },
      }}
    >
      <a href={data.urls[0].url} target="_blank">
        <CardHeader>
          <Heading color="white" textAlign="center">
            {data.name}
          </Heading>
        </CardHeader>
        <CardBody display="flex" alignItems="center" justifyContent="center">
          <img
            width="100%"
            height={200}
            className="rounded"
            src={`${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`}
            alt={data.name}
          />
        </CardBody>
        <CardFooter>
          <Text textAlign="center" color="white">
            {data.description ? data.description : "No description"}
          </Text>
        </CardFooter>
      </a>
    </Card>
  );
}

export default CharactersCard;
