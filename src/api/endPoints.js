import axios from "axios"

const baseURL = process.env.REACT_APP_BASEURL

const TokenApi = axios.create({ baseURL: `${baseURL}/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` })

const PairsApi = axios.create({ baseURL: `${baseURL}/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae` })

const SearchApi = axios.create({ baseURL: `${baseURL}/search` })

export {TokenApi,PairsApi,SearchApi}