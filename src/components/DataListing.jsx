import React from 'react'
import InfoCard from './InfoCard'
import TokenCard from './TokenCard'
import PriceCard from './PriceCard'
import { Flex } from '@chakra-ui/react'

const DataListing = ({ data }) => {
    return <div>
       
        {data.map((item, index) => {
            return  <Flex justifyContent={"space-between"} flexWrap={"wrap"} alignItems={"center"} mb="6">
              
                <InfoCard createAt={item?.pairCreatedAt} symbol={item?.chainId} dexID={item?.dexId} address={item?.pairAddress} />
                <TokenCard token={item?.baseToken} />
                <TokenCard isQuote token={item?.quoteToken} />
                <PriceCard priceNative={item?.priceNative}  priceUsd={item?.priceUsd}/>
            </Flex>
        })}
    </div>
}

export default DataListing