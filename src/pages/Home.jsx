import React, { useContext } from 'react'
import { getSearchList, getTokenList } from '../api'
import { DataListing } from '../components'
import { context } from '../context/ProviderContext'
import useDebounce from '../hooks/useDebounce'
import { Text } from '@chakra-ui/react'

const Home = () => {

    const [data, setData] = React.useState([])
    const { search } = useContext(context)

    const searchOperation = async (query) => {
        const res = await getSearchList(query)
        try {
            if (res.status === 200) {
                const pairsList = res.data.pairs.slice(0, 10);
                const sortedPairs = pairsList.sort((a, b) => Number(b.priceUsd) - Number(a.priceUsd));
                setData(sortedPairs)
            }
        } catch (error) {
            console.log({ error: error.message })
        }
    }
    const debounce = useDebounce(searchOperation, 800)


    const getData = async () => {
        const res = await getTokenList()
        try {
            if (res.status === 200) {
                setData(res.data.pairs)
            }
        } catch (error) {
            console.log({ error: error.message })
        }
    }

    React.useEffect(() => {
        debounce(search)
    }, [search])

    React.useEffect(() => {
        getData()
    }, [])
    return (
        <div>
             <Text ml={4} color={"white"} fontSize="lg" fontWeight="bold" my={4}>
         Token Search Result
      </Text>
            {data.length > 0 ? <DataListing data={data} /> : <h1>Loading...</h1>}
        </div>
    )
}

export default Home