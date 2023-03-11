import NextLink from "next/link";
// import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay, Image } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItems = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      ></Image>
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

const GridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      cursor="pointer"
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
    >
      <Image
        src={thumbnail}
        alt="title"
        className="grid-item-thumbnail"
        placeholder="blur"
        width={20}
        height={20}
      />
      <LinkOverlay href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);
export default GridItem;

export const GridItemStyle = () => (
  <Global
    styles={`.grid-item-thumbnail{
        border-radius:12px;
    }
    `}
  />
);
