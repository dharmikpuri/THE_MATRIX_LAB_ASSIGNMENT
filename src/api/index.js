
import { PairsApi, SearchApi, TokenApi } from "./endPoints"

export const getTokenList = async () => {
    return await TokenApi.get("/")
}


export const getPairsList = async () => {
    return await PairsApi.get("/")

}

export const getSearchList = async (query) => {
    if(!query) return 
    return await SearchApi.get(`/?q=${query}`)
}