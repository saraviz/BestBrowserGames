import { UsuarioType } from "../../types/usuario.type";
import { useNavigate } from "react-router-dom";
import {
    Text,
    Button,
    Flex,
    Box,
} from '@chakra-ui/react'

import CustomInput from "../../components/Input";

const Cadastro = () => {
    const navigate = useNavigate();
    const cadastrarUsuario = (usuario: UsuarioType) => {
        const listaAtual = localStorage.getItem('listaUsuarios');
        let listaUsuarios = [];

        if (listaAtual) {
            listaUsuarios = JSON.parse(listaAtual);
        }

        localStorage.setItem('listaUsuarios', JSON.stringify([...listaUsuarios, usuario]));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = (e: any) => {
        e.preventDefault();
        const novoUsuario: UsuarioType = {
            nome: e.target[0].value,
            email: e.target[1].value,
            senha: e.target[2].value,
            dataNascimento: e.target[3].value,
            estado: e.target[4].value,
            pais: e.target[5].value
        }
        cadastrarUsuario(novoUsuario);
        navigate('/jogos');
    }

    return (
        <Flex  justifyContent="center" backgroundColor='#000' color="#B1D22C" fontFamily="kode mono" padding="0 100px">
            <Flex w="100%" h="100vh" maxWidth="1000px" alignItems="center" flexDirection="column" >
                <Flex alignItems="center">
                    <Text fontSize="80px" fontWeight="bold" ml="20px">Best Browser Games</Text>
                </Flex>
                <Flex flexDirection="column"justifyContent="center" alignItems="center" border="solid #CE45EF" w="650px" h="520px" backgroundColor="#001119" borderRadius="16px">
                    <Text fontSize="30px" fontWeight="bold">Crie sua conta</Text>
                    <form onSubmit={submitHandler}>
                        <Flex>
                        <Box mr="20px">
                        <CustomInput label="Seu nome" type="text" placeholder="Maria Silva" />
                        <CustomInput label="Email" type="email" placeholder="exemplo@exemplo.com" />
                        <CustomInput label="Senha" type="password" placeholder="Digite sua senha" />
                        </Box>
                        <Box>
                        <CustomInput label="Data de Nascimento" type="date" />
                        <CustomInput label="Estado" type="text" />
                        <CustomInput label="Pais" type="text" />
                        </Box>
                        </Flex>
                        <Button type="submit" w="100%" h="48px" borderRadius="5px" backgroundColor="#CE45EF" color="#fff" cursor="pointer">Cadastrar</Button>
                        <Text textAlign="center" cursor="pointer" onClick={() => navigate('/login')}>Já tenho uma conta</Text>
                    </form>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Cadastro;