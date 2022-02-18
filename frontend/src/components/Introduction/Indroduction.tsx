import React from 'react'
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
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
          objectPosition="right"
          borderRadius="full"
          src="https://images.unsplash.com/photo-1517101724602-c257fe568157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29ja2F0aWVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <Text fontSize="2xl" textAlign="center">
          Jovan Blažek
        </Text>
        <Flex gap="8">
          <Icon as={Github} fontSize="2xl" />
          <Icon as={Linkedin} fontSize="2xl" />
        </Flex>
      </Flex>
    </Box>
  )
}
