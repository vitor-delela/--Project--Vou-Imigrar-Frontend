import React, { useState } from 'react'
import { Box, Text, Heading, Checkbox, Link, AccordionItem, AccordionButton, AccordionPanel, Accordion, AccordionIcon, Icon, Divider } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { updateChecklist } from '../store/journeySlice'
import { useNavigate } from 'react-router'

export default function ListComponent (props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [requirements, setRequirements] = useState(props.checklist)
  const [isLoading, setIsLoading] = useState(false)

  const changeChecklist = (id) => {
    setIsLoading(true)
    dispatch(updateChecklist(id))
    setRequirements(requirements.map(requirement => {
      if (requirement.id === id) {
        requirement.isCompleted = requirement.isCompleted === 'Y' ? 'N' : 'Y'
      }

      return requirement
    }))
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Box id="platform-container"
      display="flex"
      flexDirection='column'
      width='100%'
      bg='rgba(109, 79, 211, 0.05);'
      borderRadius='8px'
      style={{ marginTop: '20px' }}
    >
      {props.title && <Heading padding='25px 16px 22px 16px' size='sm'>{props.title}</Heading>}
      {props.text && <Text padding='0 0 20px 16px' size='xs' fontSize={12}>{props.text}</Text>}
      {
        props.items
          ? <Box
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
                              <Box flex={1} textAlign='left' fontSize={14}>
                                {item.label}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={3}>
                            <Divider />
                            <Box
                              display='flex'
                              flexDirection='column'
                              mt={3}
                              textAlign="left" fontSize={14}
                            >
                              {item.body.text}
                              {
                                item.body.button &&
                                <Link
                                  onClick={item.body.button.to}
                                  display='flex'
                                  alignItems='center'
                                  color='purple'
                                  isExternal
                                  marginTop={3}
                                  fontSize={14}
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
          : <Box
              display="flex"
              flexDirection='column'
              width='100%'
            >
              {requirements.map((item, index) => {
                return (
                  <Box
                    key={index}
                    display="flex"
                    flexDirection='column'
                    width='100%'
                  >
                  <Accordion allowMultiple>
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
                                isDisabled={isLoading}
                                _disabled={{ opacity: 0.5 }}
                                onChange={() => changeChecklist(item.id)}
                                colorScheme='pink'
                                isChecked={item.isCompleted === 'Y'}
                                fontSize={14}
                              >
                                <Text textAlign="left" fontSize={14}>
                                    {item.name}
                                </Text>
                              </Checkbox>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Box
                            display='flex'
                            flexDirection='column'
                            textAlign="left" fontSize={14}
                          >
                            {item.description}
                            {
                              item.partnerCategoryId
                                ? <Link
                                onClick={() => { navigate(`/partner/${item.partnerCategoryId}`) }}
                                display='flex'
                                alignItems='center'
                                color='purple'
                                isExternal
                                marginTop={3}
                                fontSize={14}
                              >
                                  Obtenha ajuda com nossos parceiros
                                  <Icon
                                      as={MdKeyboardArrowRight}
                                      width='35px'
                                      height='35px'
                                      color='purple'
                                      cursor='pointer'
                                      className="arrow"
                                  />
                              </Link>
                                : <Text textAlign="left" fontSize={14}>
                                Atualmente esse requisito não possui parceiros.
                              </Text>
                            }
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                )
              })}
              </Box>
      }
    </Box>
  )
}
