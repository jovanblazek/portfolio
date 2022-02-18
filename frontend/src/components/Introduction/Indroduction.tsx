import React from 'react'
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { Github, Linkedin } from 'lucide-react'

export const Introduction = () => {
  return (
    <Box>
      <Flex
        flexDirection="column"
        gap="4"
        mx="auto"
        w="max-content"
        alignItems="center"
      >
        <Image
          width="36"
          height="36"
          objectFit="cover"
          borderRadius="full"
          src="/fotka_okno_crop.jpg"
          alt="Jovan Blažek"
        />
        <Text fontSize="2xl" textAlign="center">
          Jovan Blažek
        </Text>
        <Flex gap="8">
          <Icon as={Github} fontSize="2xl" />
          <Icon as={Linkedin} fontSize="2xl" />
        </Flex>
        <Button>My Work</Button>
      </Flex>
    </Box>
  )
}
