import React, { useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/core';
import Navbar from '../components/Navbar';

export default function Layout({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <Box as="main" bg="gray.50" minH="100vh" w="100%">
        <Navbar/>
        <div>{children}</div>
    </Box>
  )
}
