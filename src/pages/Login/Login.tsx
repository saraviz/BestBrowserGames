import { useNavigate } from "react-router-dom";
import { LoginType } from "../../types/login.type";
import {
    FormControl,
    FormLabel,
    Input,
    Text,
    Button,
    Flex,
} from '@chakra-ui/react'




const Login = () => {

    const navigate = useNavigate();

    const realizarLogin = (novoUsuario: LoginType) => {
        const listaAtual = localStorage.getItem('listaUsuarios');
        let listaUsuariosCadastros = [];

        if (listaAtual) {
            listaUsuariosCadastros = JSON.parse(listaAtual);
        }

        const usuarioExiste = listaUsuariosCadastros.find((usuario: LoginType) => usuario.email === novoUsuario.email && usuario.senha === novoUsuario.senha)

        if (usuarioExiste) {
            alert(`Seja bem-vindo(a) ${usuarioExiste.nome}`)
            navigate('/jogos');
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioExiste))
        } else {
            alert('Usuário ou senha inválidos')
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = (e: any) => {
        e.preventDefault();
        const loginUsuario: LoginType = {
            email: e.target[0].value,
            senha: e.target[1].value
        }
        realizarLogin(loginUsuario);
    }
    return (
        <Flex  justifyContent="center" backgroundColor='#000' color="#B1D22C" fontFamily="kode mono" padding="0 100px">
            <Flex w="100%" h="100vh" maxWidth="1000px" alignItems="center" flexDirection="column" >
                <Flex alignItems="center">
                    <Text fontSize="80px" fontWeight="bold" ml="20px">Best Browser Games</Text>
                </Flex>
                <Flex  flexDirection="column" w="450px" h="520px" justifyContent="center" alignItems="center" borderRadius="16px" border="solid #CE45EF">
                    <Text fontSize="30px" fontWeight="bold">Faça login</Text>
                    <form onSubmit={submitHandler}>
                        <FormControl mb="5px">
                            <FormLabel>Email</FormLabel>
                            <Input type='email' h="48px" w="300px" backgroundColor="#0D1D25" color="#fff" placeholder="exemplo@exemplo.com" />
                        </FormControl>
                        <FormControl mb="25px">
                            <FormLabel>Senha</FormLabel>
                            <Input type='password' h="48px" w="300px" backgroundColor="#0D1D25" color="#fff" placeholder="Digite sua senha" />
                        </FormControl>
                        <Button type="submit" w="100%" h="48px" borderRadius="5px" backgroundColor="#CE45EF" color="#fff">Entrar</Button>
                        <Text textAlign="center" cursor="pointer" onClick={() => navigate('/cadastro')}>Criar uma conta</Text>
                    </form>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Login;