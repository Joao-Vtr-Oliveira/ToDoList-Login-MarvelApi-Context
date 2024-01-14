import {
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
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

function Marvel() {
  const [offset, setOffset] = React.useState(0);
  const [characters, setCharacters] = React.useState<CharactersType>();

  React.useEffect(() => {
    const request = async () => {
      const charactersRequest: CharactersType = await marvelApiRequest(offset);
      setCharacters(charactersRequest);
    };
    request();
  }, [offset]);
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = 1563;

    for (let i = offset - 20; i <= offset + 70 && i <= totalPages; i += 10) {
      if (i > 0) {
        pageNumbers.push(
          <div
            key={i}
            onClick={() => setOffset(i)}
            style={{
              fontSize: "20px",
              cursor: "pointer",
              fontWeight: i === offset ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {i}
          </div>
        );
      }
    }
    return pageNumbers;
  };

  console.log(characters);
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      height="100vh"
      overflow="hidden"
    >
      <Card
        width="100%"
        maxW="1000px"
        height={{ base: "100vh", md: "90vh" }}
        overflowY="auto"
      >
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
          <ArrowLeftIcon
            w={5}
            h={5}
            cursor="pointer"
            visibility={offset <= 0 ? "hidden" : "initial"}
            onClick={() => setOffset(0)}
          />
          <ChevronLeftIcon
            width={10}
            height={10}
            visibility={offset <= 0 ? "hidden" : "initial"}
            cursor="pointer"
            onClick={() => setOffset(offset - 10)}
          />
          {renderPageNumbers()}
          <ChevronRightIcon
            cursor="pointer"
            w={10}
            h={10}
            onClick={() => setOffset(offset + 10)}
            visibility={offset >= 1563 ? "hidden" : "initial"}
          />
          <ArrowRightIcon
            w={5}
            h={5}
            cursor="pointer"
            onClick={() => setOffset(1563)}
            visibility={offset >= 1563 ? "hidden" : "initial"}
          />
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default SessionCheckHOC(Marvel);