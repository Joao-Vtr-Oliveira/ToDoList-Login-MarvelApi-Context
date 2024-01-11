import {
  Button,
  Card,
  CardBody,
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

let offset = 0;

function Marvel() {
  const [characters, setCharacters] = React.useState<CharactersType>();

  const request = async () => {
    const charactersRequest: CharactersType = await marvelApiRequest(offset);
    setCharacters(charactersRequest);
    offset = offset + 10;
  };

  console.log(characters);
  return (
    <Flex align="center" direction='column' justify="center" height="100vh" overflow='hidden'>
      <Card width='100%' maxW='1000px' height='80vh' overflowY="auto">
        <CardHeader className="flex flex-col items-center justify-center">
          <Heading>Uai fds uai</Heading>
          <Button onClick={request}>Carregar</Button>
        </CardHeader>
        <CardBody borderRadius={6}>
          <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
            {characters &&
              characters.data.results.map((character:CharacterType, index) => (
                <GridItem key={index}>
                  <CharactersCard data={character} />
                </GridItem>
              ))}
          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Marvel;
