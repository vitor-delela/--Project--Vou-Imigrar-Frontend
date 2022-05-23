import React from 'react'
import { Box, Text, Heading, Checkbox, Link, AccordionItem, AccordionButton, AccordionPanel, Accordion, AccordionIcon, Icon } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function ListComponent (props) {
  // props = {
  //   title: 'Categorias',
  //   // text: 'Escolha as categorias que deseja visualizar',
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
  //       label: 'Acordeão',
  //       body: {
  //         text: 'aqui é o acordeãoque não tem checkbox',
  //         button: {
  //           label: 'Botão',
  //           to: 'https://facebook.com'
  //         }
  //       }
  //     },
  //     {
  //       type: 'accordionCheck',
  //       label: 'Acordeão checkbox',
  //       // value: true,
  //       body: {
  //         text: 'aqui é o que tem checkbox',
  //         button: {
  //           label: 'Botão',
  //           to: 'https://facebook.com'
  //         }
  //       }
  //     }
  //   ]
  // }

  return (
    <Box id="platform-container"
      display="flex"
      flexDirection='column'
      width='100%'
      bg='rgba(109, 79, 211, 0.05);'
      borderRadius='8px'
    >
      {props.title && <Heading padding='25px 16px 22px 16px' size='sm'>{props.title}</Heading>}
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
                      display='flex'
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      {item.label}
                      <Icon
                        as={MdKeyboardArrowRight}
                        width='35px'
                        height='35px'
                        color='purple'
                        cursor='pointer'
                        className="arrow"
                      />
                    </Link>
                }
                {
                  item.type === 'check' &&
                    <Checkbox
                      colorScheme='pink'
                      _hover={{ bg: 'var(--chakra-colors-blackAlpha-50)' }}
                      borderTop='1px solid rgba(109, 79, 211, 0.05)'
                      padding='20.5px 16px 20.5px 16px'
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
                        <Box
                          display='flex'
                          flexDirection='column'
                        >
                          {item.body.text}
                          {
                            item.body.button &&
                            <Link
                              href={item.body.button.to}
                              display='flex'
                              alignItems='center'
                              color='purple'
                              isExternal
                              marginTop={3}
                            >
                                {item.body.button.label}
                                <Icon
                                    as={MdKeyboardArrowRight}
                                    width='35px'
                                    height='35px'
                                    color='purple'
                                    cursor='pointer'
                                    className="arrow"
                                />
                            </Link>
                          }
                        </Box>
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
                        <Box
                          display='flex'
                          flexDirection='column'
                        >
                          {item.body.text}
                          {
                            item.body.button &&
                            <Link
                              href={item.body.button.to}
                              display='flex'
                              alignItems='center'
                              color='purple'
                              isExternal
                              marginTop={3}
                            >
                                {item.body.button.label}
                                <Icon
                                    as={MdKeyboardArrowRight}
                                    width='35px'
                                    height='35px'
                                    color='purple'
                                    cursor='pointer'
                                    className="arrow"
                                />
                            </Link>
                          }
                        </Box>
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
