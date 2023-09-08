import React from 'react'
import { Card, Circle, Flex, Text, VStack } from "@chakra-ui/react"
import { FaDollarSign } from "react-icons/fa"


const PriceCard = ({priceNative,priceUsd}) => {

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
                    <Text fontWeight={"semibold"}>Price</Text>
                    <Text></Text>
                </Flex>
                <Flex justifyContent={"space-between"} w="80%">
                    <Flex justifyContent={"space-between"} flexDirection={"column"}>
                        <Text fontWeight={"semibold"}>Price Native</Text>
                        <Text fontWeight={"semibold"}>Price USD</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} flexDirection={"column"}>
                        <Text >{priceNative}</Text>
                        <Text >{priceUsd}</Text>
                    </Flex>
                </Flex>
            </VStack>

            <Circle bg="#960252" p="3" position={"absolute"} right={"10px"} bottom="10px">
                <FaDollarSign fontSize={"20px"} />
            </Circle>
        </Card >
    )
}

export default PriceCard