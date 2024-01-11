import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { marvelApiRequest } from "../../requests/marvelApiRequest";
import React from "react";
import { CharactersType } from "../../types/CharactersType";
import CharactersCard from "./CharactersCard";
import { CharacterType } from "../../types/CharacterType";
import SessionCheckHOC from "../../requests/SessionCheckHOC";

// 1563

function Marvel() {
  const [offset, setOffset] = React.useState(0);
  const [characters, setCharacters] = React.useState<CharactersType>();
  React.useEffect(() => {
    const requi = async () => {
      const charactersRequest: CharactersType = await marvelApiRequest(offset);
      setCharacters(charactersRequest);
    };
    requi();
    console.log(offset);
  }, [offset])

  console.log(characters);
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      height="100vh"
      overflow="hidden"
    >
      <Card width="100%" maxW="1000px" height="80vh" overflowY="auto">
        <CardHeader className="flex flex-col items-center justify-center">
          <Heading>Marvel Characters</Heading>
        </CardHeader>
        <CardBody borderRadius={6}>
          <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
            {characters &&
              characters.data.results.map((character: CharacterType, index) => (
                <GridItem key={index}>
                  <CharactersCard data={character} />
                </GridItem>
              ))}
          </Grid>
        </CardBody>
        <CardFooter className="flex items-center justify-center">
          <Button isDisabled={!!!offset} mr={5} onClick={() => setOffset(offset - 10)}>Página anterior</Button>
          <Button onClick={() => setOffset(offset + 10)}>Próxima página</Button>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default SessionCheckHOC(Marvel);
