import React from 'react'
import {  Card, Circle, Flex,  Text, VStack } from "@chakra-ui/react"
import { AiOutlineInfoCircle } from "react-icons/ai"


const InfoCard = ({ createAt, symbol, address, dexID }) => {

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
            <VStack w="100%" align={"center"} pr="6">
                <Flex justifyContent={"space-between"} w="75%"
                >
                    <Text fontWeight={"semibold"}>Basic Info</Text>
                    <Text></Text>
                </Flex>
                <Flex justifyContent={"space-between"} pl="6" w="100%">
                    <Flex justifyContent={"space-between"} flexDirection={"column"}>
                        <Text fontWeight={"semibold"}>Pair created at</Text>
                        <Text fontWeight={"semibold"}>Symbol</Text>
                        <Text fontWeight={"semibold"}>Dex ID</Text>
                        <Text fontWeight={"semibold"}>Pair Address</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} flexDirection={"column"}>
                        <Text >#{Number(createAt) && createAt.toString().slice(0, 5) !== NaN ? createAt.toString().slice(0, 5) : Math.floor(Math.random() * 1000)}</Text>
                        <Text >{symbol}</Text>
                        <Text >#{dexID}</Text>
                        <Text >#{address.slice(0, 5)}</Text>
                    </Flex>
                </Flex>
            </VStack>

            <Circle bg="#960252" p="3" position={"absolute"} right={"10px"} bottom="10px">
                <AiOutlineInfoCircle fontSize={"25px"} />
            </Circle>
        </Card >
    )
}

export default InfoCard