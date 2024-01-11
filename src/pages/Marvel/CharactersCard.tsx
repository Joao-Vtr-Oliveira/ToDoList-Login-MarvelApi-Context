import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { CharacterType } from "../../types/CharacterType";

export function CharactersCard({ data }: { data: CharacterType }) {

  return (
    <Card
      bg="black"
      height="100%"
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
