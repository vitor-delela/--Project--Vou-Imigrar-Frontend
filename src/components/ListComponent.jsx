import React from 'react'
import { Box, Text, Heading, Checkbox, Link, AccordionItem, AccordionButton, AccordionPanel, Accordion, AccordionIcon } from '@chakra-ui/react'

export default function SuperComponent (props) {
  // props = {
  //   title: 'Categorias',
  //   text: 'Escolha as categorias que deseja visualizar',
  //   items: [
  //     {
  //       type: 'link',
  //       label: 'Facebook',
  //       to: 'https://facebook.com'
  //     },
  //     {
  //       type: 'check',
  //       label: 'Visto para o país'
  //       // value: true
  //     },
  //     {
  //       type: 'accordion',
  //       label: 'Acordeão porra',
  //       body: 'aqui é o acordeão porra que não tem checkbox'
  //     },
  //     {
  //       type: 'accordionCheck',
  //       label: 'Acordeão checkbox',
  //       // value: true,
  //       body: 'aqui é o acordeão checkbox que vai ter tudo'
  //     }
  //   ]
  // }

  return (
    <Box id="platform-container"
      display="flex"
      flexDirection='column'
      width='100%'
      bg='rgba(109, 79, 211, 0.05);'
      borderRadius='15px'
    >
      {props.title && <Heading padding='22px 16px 20px 16px' size='sm'>{props.title}</Heading>}
      {props.text && <Text padding='0 0 20px 16px' size='xs'>{props.text}</Text>}
      {
        props.items &&
        <Box
          display="flex"
          flexDirection='column'
          width='100%'
        >
          {props.items.map((item, index) => {
            return (
              <Box
                key={index}
                display="flex"
                flexDirection='column'
                width='100%'
              >
                {
                  item.type === 'link' &&
                    <Link
                      href={item.to}
                      isExternal
                      borderTop='1px solid rgba(109, 79, 211, 0.05)'
                      padding='15px'
                      _hover={{ bg: 'var(--chakra-colors-blackAlpha-50)' }}
                      _focus={{ boxShadow: 'none' }}
                    >
                      {item.label}
                    </Link>
                }
                {
                  item.type === 'check' &&
                    <Checkbox
                      colorScheme='pink'
                      borderTop='1px solid rgba(109, 79, 211, 0.05)'
                      padding={15}
                      isChecked={item.value}
                    >
                      {item.label}
                    </Checkbox>
                }
                {
                  item.type === 'accordion' &&
                  <Accordion allowMultiple
                  >
                    <AccordionItem
                      border={0}
                    >
                      <h2 padding={0}>
                        <AccordionButton
                          borderTop='1px solid rgba(109, 79, 211, 0.05)'
                          padding={15}
                          _focus={{ boxShadow: 'none' }}
                        >
                          <Box flex={1} textAlign='left'>
                            {item.label}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {item.body}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                }
                {
                  item.type === 'accordionCheck' &&
                  <Accordion allowMultiple
                  >
                    <AccordionItem
                      border={0}
                    >
                      <h2 padding={0}>
                        <AccordionButton
                          borderTop='1px solid rgba(109, 79, 211, 0.05)'
                          padding={15}
                          _focus={{ boxShadow: 'none' }}
                        >
                          <Box flex={1} textAlign='left'>
                            <Checkbox
                              colorScheme='pink' isChecked={item.value}>{item.label}</Checkbox>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        {item.body}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                }
              </Box>
            )
          })}
        </Box>
      }
    </Box>
  )
}
