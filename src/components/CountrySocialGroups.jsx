import React from 'react'
import { Icon, Box, Link, Text, Container, Divider } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function CountrySocialGroups (props) {
  const socialGroups = props.groups
  return (
    <Container my={4} bg='background' borderRadius={8}>
        <Box textAlign='left' p={[5, 0, 5, 5]} >
            <Text textAlign="left" fontSize={17} fontWeight="bold" pb={2.5}>
                Grupos
            </Text>
            <Text textAlign="left" fontSize={12}>
                Converse com outras pessoas que imigraram para o país!
            </Text>
        </Box>
        {socialGroups.map((group, index) => {
          return (
            <Box key={index}>
                <Divider />
                <Link href={group.link} lex='1' textAlign='left' isExternal>
                    <Box
                        textAlign='left'
                        px={5}
                        py='13px'
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center">
                        <Text textAlign="left" fontSize={14}>
                            {group.name}
                        </Text>
                        <Icon
                            as={MdKeyboardArrowRight}
                            width='35px'
                            height='35px'
                            color='purple'
                            cursor='pointer'
                            className="arrow"
                        />
                    </Box>
                </Link>
            </Box>
          )
        })}
    </Container>
  )
}
