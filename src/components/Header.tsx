import { Flex, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <Flex h="70px" color="#B1D22C" fontFamily="kode mono" padding="0 100px" justifyContent="center" alignItems="center">
            <Flex w="100vw" maxW="1100px" alignItems="center" justifyContent="space-between">
                <Flex color="#fff" alignItems="center">
                    <Text fontSize="40px" fontWeight="bold" color="#B1D32D" ml="10px">Best Browser Games</Text>
                </Flex>
                <Flex alignItems="center">
                {/* <Input placeholder='Busque por jogos' backgroundColor="#0D1D25" color="#7C7C8A" w="350px" h="40px" mr="20px"/> */}
                <FaUser color="#CD45EE" />
                </Flex>
            </Flex>

        </Flex>
    )
}

export default Header;