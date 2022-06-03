import React, { useState } from 'react'
import { Container, Heading, HStack, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, useDisclosure } from '@chakra-ui/react'

export default function PhotosCarousel(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [photo, setPhoto] = useState()

  function handleClickOpenImage(photo) {
    setPhoto(photo)
    onOpen()
  }

  if (props.photos == undefined) {
    return (<div></div>)
  }
  return (
    <div>
      <Heading
        fontWeight='normal'
        fontSize='28px'
        marginTop='10px'
      >
        Fotos
      </Heading>
      <Container marginTop='10px'>
        <HStack maxW='90vw' spacing={4} overflow='auto' whiteSpace='nowrap' alignSelf='center'>
          {
            props.photos.map((p, index) => {
              return (
                <Image
                  key={index}
                  src={p.url}
                  alt='Foto do país'
                  width='100%'
                  height='180px'
                  onClick={() => handleClickOpenImage(p)}
                />
              )
            })
          }
        </HStack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align='center'>{photo?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={photo?.url}
              alt='Foto do país'
              width='100%'
              height='180px'
            />
          </ModalBody>
          <ModalFooter>
            <Text align='center'>
              {photo?.description}
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
