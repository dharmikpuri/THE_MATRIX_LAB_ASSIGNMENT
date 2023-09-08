import { Button } from '@chakra-ui/react'
import React from 'react'
import { useWeb3Modal } from '@web3modal/react'

export default function CustomButton({ text }) {
    const { open, close } = useWeb3Modal()
    return (
        <Button rounded="full" px="6" borderRadius="20px"
            bg="linear-gradient(131deg, #7C0F35 0%, #581266 100%)"
            color="white"
            _hover={"none"}
            w="156px"
            h="52px"
            fleShrink="0"
        onClick={() => open()}
        >{text}</Button>
    )
}
