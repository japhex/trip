import { Box, Flex, Text } from '@chakra-ui/react'
import Filters from '@components/ui/filters'
import { fonts } from '@theme/index'

interface Props {
  title: string
  filter?: boolean
  past?: boolean
}

const Title = ({ title, filter = true, past }: Props) => (
  <Flex align="center" gap={4} direction={{ base: 'column', md: 'row' }} minH="50px">
    <Text fontSize="xl" noOfLines={1} color="WHITE" fontWeight="bold" className={fonts.poppins}>
      {title}
    </Text>
    {filter && (
      <Box ml={{ base: 'none', md: 'auto' }}>
        <Filters past={past} />
      </Box>
    )}
  </Flex>
)

export default Title
