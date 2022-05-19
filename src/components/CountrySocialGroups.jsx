import React from 'react'
import { Box, Text, Container, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

export default function CountrySocialGroups(props) {
    const socialGroups = props.groups
    return (
        <Container my={8} bg='background' borderRadius={8}>
            <Accordion allowToggle>
            <Box textAlign='left' p={[5, 0, 5, 5]}>
                <Text textAlign="left" fontSize={17} fontWeight="bold" pb={2.5}>
                    Grupos
                </Text>
                <Text textAlign="left" fontSize={12}>
                    Converse com outras pessoas que imigraram para o país!
                </Text>
            </Box>
            {socialGroups.map((group, index) => {
                return (
                <AccordionItem key={index}>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' >
                        {group.name}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    )
                })}
            </Accordion>
        </Container>
    )
}