import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Sobre as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
// import { HandEffect } from "../HandEffect";

export const Sobre = (): JSX.Element => {
  return (
    <FooterWrapper id="sobre">
      <Container>
        <Flex>
          <Box css={{ marginLeft: "$2" }}>
          <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
                Sobre Mim
            </Text>
            <Text type="body1" color="grey2">
            Sou Engenheiro de Segurança do Trabalho Graduado em Engenharia de Saúde e Segurança pela Universidade Federal de Itajubá.
            Tenho experiência em rotinas administrativas de departamento de pessoal como admissão, cálculos rescisórios, folha de pagamento, Responsável pela Parte de segurança do Trabalho, Controle de ASO, Emissão de relatório de não conformidades, adequação da NR na empresa.
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        >
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
