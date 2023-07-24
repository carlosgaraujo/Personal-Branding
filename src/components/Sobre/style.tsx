import { styled } from "@/styles/stitches.config";
import dots from "@/public/static/img/background/dots.svg";
import { Container, Flex } from "@/styles/Global";

export const Sobre = styled("footer", {
    backgroundColor: "$grey0",
    padding: "7rem 0",
    backgroundImage: `url(${dots})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top 8rem",
    "& a": {
      margin: "0 !important",
    },
    "@tablet": {
      backgroundPosition: "center top 1rem",
    },
    [`& ${Container}`]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "@mobile": {
        flexDirection: "column",
        [`& ${Flex}:first-child`]: {
          marginBottom: "$5",
          flexDirection: "column",
          textAlign: "center",
          [`& img`]: {
            marginBottom: "$2",
          },
        },
      },
    },
  });
  