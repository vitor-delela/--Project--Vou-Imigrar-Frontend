/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Logo from "../components/Logo";
import {
  Heading,
  Box,
  Text,
  Flex,
  Stack,
  Progress
} from "@chakra-ui/react";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /*
  useEffect(async () => {
    const response = await dispatch(getUserStatusAndJourneys())
    if (response.payload.status === 'success') {
      setStatus(response.payload.data.status)
      setJourneys(response.payload.data.journeys)
    }
  }, [])
*/

  return (
    <Flex id="dashboard" w={"100%"} bg="#E5E5E5" flexDirection="column">
      <Heading alignSelf={"left"} mb={12}>
        <Logo h={12} w="auto" />
      </Heading>
      <Flex gap={10}>
        <Box flex="1" bg="white" borderRadius={8}>
          <Text>Quantidade de usuários na plataforma</Text>
          <Stack spacing={5}>
            <Progress colorScheme="blue" size="sm" value={10} />
            <Progress colorScheme="blue" size="md" value={20} />
            <Progress colorScheme="blue" size="lg" value={30} />
            <Progress colorScheme="blue" height="32px" value={50} />
          </Stack>
        </Box>
        <Box flex="1" bg="white" borderRadius={8}>
          <Text>Países com maior número de Jornadas iniciadas</Text>
          <Stack spacing={5}>
            <Progress colorScheme="blue" size="sm" value={10} />
            <Progress colorScheme="blue" size="md" value={20} />
            <Progress colorScheme="blue" size="lg" value={30} />
            <Progress colorScheme="blue" height="32px" value={50} />
          </Stack>
        </Box>
        <Box flex="1" bg="white" borderRadius={8}>
          <Text>Países com maior número de Jornadas finalizadas</Text>
          <Stack spacing={5}>
            <Progress colorScheme="blue" size="sm" value={20} />
            <Progress colorScheme="blue" size="md" value={30} />
            <Progress colorScheme="blue" size="lg" value={40} />
            <Progress colorScheme="blue" height="32px" value={60} />
          </Stack>
        </Box>
      </Flex>
    </Flex>
  )
}
