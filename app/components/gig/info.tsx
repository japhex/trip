import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Gig } from '@gql/graphql'
import { MdInfoOutline } from 'react-icons/md'

interface Props {
  info: Pick<Gig, 'info'>
}

const Info = ({ info }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button aria-label="info" size="sm" variant="iconButton" onClick={onOpen} isDisabled={info === null}>
        <MdInfoOutline />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={10}>
            <>{info}</>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Info
