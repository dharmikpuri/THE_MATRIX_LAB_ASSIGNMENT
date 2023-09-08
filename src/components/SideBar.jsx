
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    HStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    InputGroup,
    InputRightAddon,
    Input,
} from '@chakra-ui/react'
import {
    FiMenu,
} from 'react-icons/fi'


import { BiSearch } from "react-icons/bi"
import { useLocation, useNavigate } from 'react-router-dom'
import { Tokensymbol, pairSymbol } from '../constants'
import Footer from './Footer'
import { CustomButtom } from '../utils'
import { useContext } from 'react'
import { context } from '../context/ProviderContext'


const LinkItems = [
    { name: 'Token Address', icon: Tokensymbol, path: "/" },
    { name: 'Pair Address', icon: pairSymbol, path: "/pairs" }
]

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={"#292929"}
            color="#fff"
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            // border={"2px solid white"}
            borderRadius={"0px 30px 0px 0px"}
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
<Flex>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
  <path d="M8.66667 14.6667C9.37391 14.6667 10.0522 14.3857 10.5523 13.8856C11.0524 13.3855 11.3333 12.7072 11.3333 12C11.3333 11.2928 11.0524 10.6145 10.5523 10.1144C10.0522 9.61429 9.37391 9.33333 8.66667 9.33333C7.95942 9.33333 7.28115 9.61429 6.78105 10.1144C6.28095 10.6145 6 11.2928 6 12C6 12.7072 6.28095 13.3855 6.78105 13.8856C7.28115 14.3857 7.95942 14.6667 8.66667 14.6667ZM12.6667 0L25.3333 7.33333V22L12.6667 29.3333L0 22V7.33333L12.6667 0ZM2.66667 8.87067V20.4627L5.82933 22.2933L16.5933 14.4L22.6667 18.0453V8.872L12.6667 3.08L2.66667 8.87067Z" fill="white"/>
</svg>
</Flex>
                <Text  
                    color="rgba(255, 255, 255, 0.70)"
                    fontFamily="Pacifico"
                    fontSize="32px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                    >
                   NFTify
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} path={link.path}>
                    {link.name}
                </NavItem>
            ))}

<Flex flexDirection="row"  marginTop={"330px"} padding="margin"  gap={"20px"} marginLeft="34px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_32_78)">
            <path
              d="M17.981 0H6C2.70476 0 0 2.70476 0 6.01905V18C0 21.2952 2.70476 24 6 24H17.981C21.2952 24 24 21.2952 24 17.981V6.01905C24 2.70476 21.2952 0 17.981 0ZM15.219 12H12.9524V19.4286H10.0952V12H8.57143V8.95238H9.90476V7.65714C9.90476 6.4381 10.5143 4.51429 13.0857 4.51429H15.4286V7.04762H13.7714C13.5048 7.04762 13.1429 7.21905 13.1429 7.80952V8.95238H15.4857L15.219 12Z"
              fill="#F30050"
            />
          </g>
          <defs>
            <clipPath id="clip0_32_78">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_32_82)">
            <path
              d="M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM7.99366 19.4227H4.5678V9.52578H7.99366V19.4227ZM6.2617 8.00318C5.29104 8.00318 4.51071 7.22284 4.51071 6.25219C4.51071 5.28153 5.29104 4.50119 6.2617 4.50119C7.23236 4.50119 8.01269 5.28153 8.01269 6.25219C7.99366 7.22284 7.21332 8.00318 6.2617 8.00318ZM19.4322 19.4227H19.4132H16.5583V14.6265C16.5583 13.4655 16.406 11.981 14.8263 11.981C13.2086 11.981 12.9421 13.2371 12.9421 14.5504V19.4227H10.0872V9.52578H12.7518V10.8581H12.8279C13.2466 10.0968 14.2173 9.50675 15.7399 9.50675C18.8803 9.50675 19.4322 11.3148 19.4322 13.9984V19.4227Z"
              fill="#F30050"
            />
          </g>
          <defs>
            <clipPath id="clip0_32_82">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_32_86)">
            <path
              d="M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM17.9477 8.99287C17.9477 9.1261 17.9477 9.25932 17.9477 9.39255C17.9477 13.3894 14.8644 17.9952 9.21174 17.9952C7.47978 17.9952 5.86201 17.5004 4.51071 16.6439C4.75813 16.663 4.98652 16.682 5.23394 16.682C6.68041 16.682 7.99366 16.2062 9.04044 15.3878C7.68914 15.3688 6.56622 14.4933 6.16653 13.2942C6.35686 13.3323 6.54718 13.3513 6.73751 13.3513C7.023 13.3513 7.30849 13.3132 7.55591 13.2371C6.18557 12.9516 5.13878 11.7336 5.13878 10.268V10.23C5.51943 10.4584 6.01427 10.5916 6.50912 10.6106C5.69072 10.0777 5.13878 9.14513 5.13878 8.09834C5.13878 7.5464 5.29104 7.03252 5.55749 6.57574C7.0801 8.40286 9.32593 9.60191 11.8763 9.73514C11.8192 9.50675 11.8002 9.27836 11.8002 9.04997C11.8002 7.3751 13.1705 6.0238 14.8644 6.0238C15.7399 6.0238 16.5393 6.38541 17.1102 6.97542C17.8144 6.84219 18.4615 6.59477 19.0515 6.23315C18.8232 6.93736 18.3283 7.52736 17.7002 7.90801C18.3283 7.83188 18.9183 7.67962 19.4703 7.4322C19.0515 8.04124 18.5377 8.57415 17.9477 8.99287Z"
              fill="#F30050"
            />
          </g>
          <defs>
            <clipPath id="clip0_32_86">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        
      </Flex>

        </Box>
    )
}

const NavItem = ({ icon, children, path, ...rest }) => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Box
            transition="0.3s ease"
            onClick={() => navigate(path)}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
            bg={location.pathname === path ? "#f30050" : ''}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"

                {...rest}>
                {icon && (
                    <Icon
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                <Text ml="4">
                    {children}
                </Text>
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, ...rest }) => {
    const { search, setSearch } = useContext(context)

    return (
        <Box bg="none" pb="2">
            <Flex
                display={["flex", "none"]}
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 4 }}
                height="20"
                alignItems="center"
                justifyContent={{ base: 'space-between', md: 'flex-end' }}
                {...rest}>
                <Flex>
                    <IconButton
                        color="white"
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onOpen}
                        variant="outline"
                        aria-label="open menu"
                        icon={<FiMenu fontSize={"25px"} />}
                        border={"none"}
                        mr="1"
                    />

                    <Text
                        display={{ base: 'flex', md: 'none' }}
                        fontSize="2xl"
                        fontFamily="monospace"
                        fontWeight="bold">
                        NFTfy
                    </Text>
                </Flex>

                <HStack spacing={{ base: '0', md: '6' }}>
                    <CustomButtom text="Connect" />
                </HStack>
            </Flex>
            <Flex maxW={["100%", "100%", "100%"]} justifyContent={"space-between"} px="4" py="2">
                <InputGroup size='md' border="2px solid #fff" rounded={"full"} px="4" maxW={{ sm: "90%", md: "320px", lg: "320px" }} mx={["auto", "0"]}
                    borderRadius="20px"
                    bg="linear-gradient(132deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%)"
                    color="white"
                >
                    <Input placeholder='Search' border={"none"} _focusVisible={"none"} onChange={(e) => setSearch(e.target.value)} value={search} />
                    <InputRightAddon border={"none"} bg="none" children={<BiSearch frontSize="25px" />} />
                </InputGroup>
                <Box display={["none", "block"]}>
                    <CustomButtom text="Connect" />
                </Box>
            </Flex>

        </Box>
    )
}

const SidebarWithHeader = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <Box ml={{ base: 0, md: 60 }} p="4"
                backgroundImage={'url("/images/mainbg.png")'}
                objectFit={"cover"}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundColor="rgba(0, 0, 0, 0.5)"
                backgroundBlendMode="multiply"
                h="100vh"
                color="#fff"
                overflowY={"scroll"}
            >
                <MobileNav onOpen={onOpen} />
                {/* Content */}
                {children}
            </Box>
            <Footer />
        </Box>
    )
}

export default SidebarWithHeader