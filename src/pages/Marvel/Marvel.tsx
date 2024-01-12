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
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

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
    // console.log(offset);
  }, [offset]);
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = 1563;

    for (let i = offset - 20; i <= offset + 70 && i <= totalPages; i+=10) {
      if (i > 0) {
        pageNumbers.push(
          <div
            key={i}
            onClick={() => setOffset(i)}
            style={{
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
          <ArrowLeftIcon
            cursor="pointer"
            visibility={offset <= 0 ? "hidden" : "initial"}
            onClick={() => setOffset(0)}
          />
          <ChevronLeftIcon
            w={8}
            h={8}
            visibility={offset <= 0 ? "hidden" : "initial"}
            cursor="pointer"
            onClick={() => setOffset(offset - 10)}
          />
          {/* Aonde ficará separado os números -> 8 a frente e 2 atrás */}
          {renderPageNumbers()}
          <ChevronRightIcon
            cursor="pointer"
            w={8}
            h={8}
            onClick={() => setOffset(offset + 10)}
            visibility={offset >= 1563 ? "hidden" : "initial"}
          />
          <ArrowRightIcon
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
