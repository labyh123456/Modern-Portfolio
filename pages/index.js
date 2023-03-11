import Head from "next/head";
import { useMediaQuery } from "@chakra-ui/media-query";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
import { Baloo_Bhai_2 } from "@next/font/google";
import {
  Box,
  Button,
  Text,
  Container,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import { SocialIconContainer } from "@/components/SocialIconContainer";
import Logo from "@/components/Logo";
import Section from "@/components/section";
import Paragraph from "@/components/Paragraph";
import NextLink from "next/link";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio";
import Layout from "@/components/Article";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { Cursor } from "react-simple-typewriter/dist/components/Cursor";
const inter = Baloo_Bhai_2({ subsets: ["latin"] });
import { GetStaticProps } from "next";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { urlFor } from "@/sanity";
import Modal from "@/components/Modal";
export default function Home({ pageInfo }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile] = useMediaQuery("(min-width: 30em)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const styles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    padding: ".5rem 1rem",
    margin: "2rem auto auto 0",
    background: "linear-gradient(10deg, #ffaa00, #ff6a00)",
    color: "#101315",
  };
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  return (
    <Layout title={"Saad"}>
      <Container>
        <Box as="main" pb="8">
          <Head>
            <title>Saad's Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/nameLogo.png" />
          </Head>

          <Container>
            {/* <Logo /> */}
            <Box
              borderRadius="lg"
              bgGradient="linear(to-r, #fd4a4a, #0076e5)"
              p={3}
              mb={4}
              mt={8}
              align="center"
              color={"white"}
              fontWeight={"bold"}
              fontFamily={"revert-layer"}
              fontSize={"large"}
            >
              {/* Hello, I&apos;m a full stack developer */}
              <TypeWritter />
            </Box>

            <Box display={{ md: "flex" }}>
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                  {pageInfo.title}
                </Heading>
                <p> {pageInfo.role} ( Developer / Designer) </p>
              </Box>
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
              >
                {/* <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      /> */}
                <Image
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src={urlFor(pageInfo?.heroImage).url()}
                  alt="Profile Image"
                />
              </Box>
            </Box>

            <Section delay={0.1}>
              <Heading as="h3" variant="section-title">
                Little Background
              </Heading>

              <Paragraph>
                {pageInfo.backgroundInformation}
                {/* <Link
                  as={NextLink}
                  href="/works/inkdrop"
                  passHref
                  scroll={false}
                >
                  Inkdrop
                </Link> */}
              </Paragraph>
              <Box align="center" my={4}>
                <NextLink href="https://www.canva.com/design/DAFcyxU8x9M/zP56W66lRjZ1GQkCvviHxg/view?utm_content=DAFcyxU8x9M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                  <Button
                    bgGradient="linear(to left, #179b64, #0076e5)"
                    // gradient(to left, #179b64, #0076e5)
                    color={"white"}
                    _hover={{ bgGradient: "linear(to left, #179b64, #224b70)" }}
                    rightIcon={<ChevronRightIcon />}
                  >
                    My Resume
                  </Button>
                </NextLink>
              </Box>
            </Section>

            <Section delay={0.2}>
              <Heading as="h3" variant="section-title">
                Bio
              </Heading>
              <BioSection>
                <BioYear>2001</BioYear>
                Born in Kotri , Pakistan.
              </BioSection>
              <BioSection>
                <BioYear>2020</BioYear>
                After Completed Collegae With 81% He Started University in
                Computer Science at University of Sindh
              </BioSection>
              <BioSection>
                <BioYear>2021 to 2022</BioYear>
                Working with Many Software Houses & Institute As a Software
                Engineer
              </BioSection>
              <BioSection>
                <BioYear>2022 to present</BioYear>
                Working as a Freelancer
              </BioSection>

              <BioSection>
                <BioYear>2023</BioYear>I am About to Graduate{" "}
                <Link href="#"> My Current CPA is 3.23%</Link>
              </BioSection>
            </Section>

            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                I ♥
              </Heading>
              <Paragraph>
                Acting, Sports, <Link href="#">Music</Link>, Photography{" "}
                <Link href="#">Machine Learning </Link>
              </Paragraph>

              {/* media query if is in mobile */}
              {/* {!isMobile && (
                <Box
                  // position={""}
                  // right={"16"}
                  // top={"20"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <motion.div
                    initial={{
                      x: 500,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                  >
                    <motion.button
                      style={styles}
                      onClick={() => (modalOpen ? close() : open())}
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Text fontFamily={"cursive"}>Get in Touch</Text>
                      <EmailIcon width={"7"} height={"7"} />
                    </motion.button>

                    <AnimatePresence
                      initial={false}
                      mode={"wait"}
                      onExitComplete={() => null}
                    >
                      {modalOpen && (
                        <Modal
                          text={"contact me"}
                          modalOpen={modalOpen}
                          handleClose={close}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Box>
              )}
              {!isMobile && (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  mt="4"
                  justifyContent={"center"}
                  px={"16"}
                  // position={"absolute"}
                  // bottom={"-32"}
                  // top={"0"}
                  width={"full"}
                >
                  <motion.div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "13px",
                    }}
                    initial={{
                      x: -500,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                  >
                    <SocialIconContainer>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                          width: "25px",
                          height: "25px",
                          maxWidth: "25px",
                          maxHeight: "25px",
                          borderRadius: "50%",
                        }}
                        size="sm"
                        color="#2c91e5"
                      />
                    </SocialIconContainer>

                    <SocialIconContainer>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{
                          width: "25px",
                          height: "25px",
                          maxWidth: "25px",
                          maxHeight: "25px",
                          borderRadius: "50%",
                        }}
                        size="sm"
                        color="red"
                      />
                    </SocialIconContainer>

                    <SocialIconContainer>
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{
                          width: "25px",
                          height: "25px",
                          maxWidth: "25px",
                          maxHeight: "25px",
                          borderRadius: "50%",
                        }}
                        size="sm"
                        color="black"
                      />
                    </SocialIconContainer>

                    <SocialIconContainer>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{
                          width: "25px",
                          height: "25px",
                          maxWidth: "25px",
                          maxHeight: "25px",
                          borderRadius: "50%",
                        }}
                        size="sm"
                        color="#49a1eb"
                      />
                    </SocialIconContainer>
                  </motion.div>
                </Box>
              )} */}
            </Section>
          </Container>
        </Box>
      </Container>
      <Text color={"gray.500"} textAlign={"center"}></Text>
    </Layout>
  );
}

const TypeWritter = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, 👋 Iam Saad Khan",
      "Iam a Full Stack Developer 🔥",
      "Iam a React enthusiastic❤️",
      "Iam a Nodejs Expert 🤟",
      "Iam a Team Worker 📞",
      "I Love to Code any Time ⏰️",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <span>{text}</span>
      <Cursor />
    </div>
  );
};

// implemet ISR
export const getStaticProps = async () => {
  const pageInfo = await fetchPageInfo();
  console.log("pae", pageInfo);
  return {
    props: { pageInfo },
    revalidate: 10,
  };
};