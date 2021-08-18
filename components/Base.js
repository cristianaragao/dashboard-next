import { Flex, Center, Text, Box } from "@chakra-ui/react"

import Menu from '../components/Menu'

const style = {

  menu: {
    height: '100vh',
    backgroundColor: '#2D3748'
  },

  content: {
    height: '100vh',
    width: '100%',
    color: 'black'
  }

}

export default function Base({ children }) {
  return (
    <Flex color="white">
      <Box style={style.menu}>
        <Menu/>
      </Box>
      <Box style={style.content}>
        {children}
      </Box>
    </Flex>
  )
}
