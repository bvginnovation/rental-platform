'use client'

import { Box, Center, Circle, Flex, Float, IconButton } from '@chakra-ui/react'
import { BaseButton, BaseText } from '_components/custom'
import { ColorModeButton } from '_components/ui/color-mode'
import { APP_ROUTES } from '_config/routes'
import { hexToRGB } from '_theme/colors'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { HiBarsArrowDown } from 'react-icons/hi2'

const SignOutPage = () => {
  const [loading, setLoading] = useState(false)

  const redirectToKeycloak = () => {
    signIn('keycloak', { callbackUrl: APP_ROUTES.HOME }).then(() => setLoading(false))
    setLoading(true)
  }

  return (
    <>
      <Center height={'100vh'}>
        <Flex alignItems={'center'} justifyContent={'center'} flexDir={'column'} gap={8} borderWidth={'2px'} p={10} rounded={'xl'} boxShadow={'md'}>
          <Flex alignItems={'center'} justifyContent={'center'} boxSize={'65px'} bgColor={'green.500'} rounded={'full'}>
            <FaCheck size={24} color={'white'} />
          </Flex>
          <BaseText maxW={'800px'} textAlign={'center'}>
            Déconnexion réussie Vous vous êtes déconnecté avec succès. Merci d'avoir utilisé notre service. Pour vous reconnecter, veuillez cliquer sur le bouton ci-dessous.
          </BaseText>
          <BaseButton isLoading={loading} withGradient colorType={'primary'} onClick={redirectToKeycloak}>
            Se reconnecter
          </BaseButton>
        </Flex>
      </Center>
      <Box position="fixed" bottom="45px" right="25px" zIndex="1000" onClick={() => {}} aria-label="Scroll to top" borderRadius="full">
        <ColorModeButton />
      </Box>
    </>
  )
}

export default SignOutPage
