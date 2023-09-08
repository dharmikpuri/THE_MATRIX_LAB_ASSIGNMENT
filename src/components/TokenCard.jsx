import React from 'react'
import {  Card, Circle, Flex, Icon, Text, VStack } from "@chakra-ui/react"
import { Tokensymbol } from '../constants'



const TokenCard = ({ token,isQuote }) => {

    return (
        <Card
           minWidth={"220px"}
            width='22%'
            height="188px"
            borderRadius="10px"
            background="#390554"
            color={"#fff"}
            py="4"
            fontSize={"xs"}
            lineHeight={"1.5rem"}
        >
            <VStack w="100%" align={"center"} pr="10">
                <Flex justifyContent={"space-between"} w="80%"
                >
                    <Text fontWeight={"semibold"}>{isQuote ? "Quote Token" : "Base Token"}</Text>
                    <Text></Text>
                </Flex>
                <Flex justifyContent={"space-between"} w="80%">
                    <Flex justifyContent={"space-between"} flexDirection={"column"}>
                        <Text fontWeight={"semibold"}>Name</Text>
                        <Text fontWeight={"semibold"}>Symbol</Text>
                        <Text fontWeight={"semibold"}>Address</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} flexDirection={"column"}>
                        <Text >{token?.name}</Text>
                        <Text >{token?.symbol}</Text>
                        <Text >#{token?.address.slice(0,5)}</Text>
                    </Flex>
                </Flex>
            </VStack>

            <Circle bg="#960252" p="3" position={"absolute"} right={"10px"} bottom="10px">
                <Icon as={Tokensymbol} />
            </Circle>
        </Card >
    )
}

export default TokenCard