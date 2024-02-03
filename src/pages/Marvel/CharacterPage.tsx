import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterRequestType } from "../../types/CharacterRequestType";

function CharacterPage() {
  const params = useParams();
  const [data, setData] = useState<CharacterRequestType>();

  useEffect(() => {
    const request = async () => {
      const url = `https://gateway.marvel.com/v1/public/characters/${params.character}?ts=1&apikey=bacb409123d9363a410cc00b0231526e&hash=10aeae3787f41c0b8295e013fa721315`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        return result;
      } catch (error) {
        console.error(error);
        throw new Error("Ocorreu um erro durante a solicitação");
      }
    };
    request();
  }, []);

  const Accordions = () => {
    return (
      <Accordion w="100%" allowToggle textColor="white">
        <AccordionItem>
          <Text as='h2'>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center">
                comics
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={4}>
            {data?.data.results[0].comics && (
              <ul>
                {data?.data.results[0].comics.items.map((comic) => (
                  <li key={comic.name}>{comic.name}</li>
                ))}
              </ul>
            )}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Text as='h2'>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center">
                series
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={4}>
            {data?.data.results[0].series && (
              <ul>
                {data?.data.results[0].series.items.map((serie) => (
                  <li key={serie.name}>{serie.name}</li>
                ))}
              </ul>
            )}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Text as='h2'>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center">
                stories
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={4}>
            {data?.data.results[0].stories && (
              <ul>
                {data?.data.results[0].stories.items.map((story) => (
                  <li key={story.name}>{story.name}</li>
                ))}
              </ul>
            )}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Text as='h2'>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center">
                events
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={4}>
            {data?.data.results[0].events && (
              <ul>
                {data?.data.results[0].events.items.map((event) => (
                  <li key={event.name}>{event.name}</li>
                ))}
              </ul>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      height="full"
      width="full"
      overflow="hidden"
    >
      <Card
        width="100%"
        maxW="1000px"
        height={{ base: "100vh", md: "90vh" }}
        overflowY="auto"
      >
        <CardHeader display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <Heading>{data?.data.results[0].name}</Heading>
        </CardHeader>
        <CardBody borderRadius={6} display='flex' flexDirection='column' alignItems='center'>
          <Image
            borderRadius='0.25rem'
            w={['80%', '80%', '80%', '80%', '40%']}
            src={`${data?.data.results[0].thumbnail.path}/portrait_fantastic.${data?.data.results[0].thumbnail.extension}`}
            alt={data?.data.results[0].name}
          />
          <Text textAlign="center" color="black">
            {data?.data.results[0].description
              ? data?.data.results[0].description
              : ""}
          </Text>
        </CardBody>
        <CardFooter
          bg="black"
          textColor="white"
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Accordions />
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default CharacterPage;