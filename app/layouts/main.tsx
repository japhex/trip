import type { ReactNode } from 'react'

import { Box, Center, Flex, useMediaQuery } from '@chakra-ui/react'
import Header from '@components/header'
import Logo from '@components/shared/logo'
import { theme } from '@theme/index'
// @ts-ignore
import { Session } from 'next-auth'

export default function Main({ auth, children }: { auth: Session; children: ReactNode }) {
  const [isMobile] = useMediaQuery(theme.breakpoints.tabletDown)

  return (
    <Box w="100vw" minH="100vh" p={4} bg="GREY4" color="GREY2">
      <Flex>
        {auth ? (
          <>
            {!isMobile && (
              <Flex
                pr={4}
                direction="column"
                h="calc(100vh - 32px)"
                position={{ base: 'static', md: 'sticky' }}
                top={4}
                w={{ base: '100vw', lg: '15vw' }}
              >
                <Box>
                  <Logo />
                </Box>
                <Header />
              </Flex>
            )}
            <Box w={{ base: 'calc(100vw - 16px)', lg: '85vw' }}>
              {isMobile && (
                <Box mb={8}>
                  <Logo />
                </Box>
              )}
              <Box>{children}</Box>
            </Box>
          </>
        ) : (
          <Center flexDir="column" w="100vw">
            <Box>{children}</Box>
          </Center>
        )}
      </Flex>
    </Box>
  )
}
