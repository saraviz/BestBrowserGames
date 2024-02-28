import { useState } from "react";
import jogosMock from "../../mocks/jogos.mock";
import categoriasMock from "../../mocks/categorias.mock";
import Header from "../../components/Header";
import Rating from '@mui/material/Rating';
import { Box, Button, Card, CardBody, Flex, Input, Select, Text, Image } from "@chakra-ui/react";

const Jogos = () => {
    const [filtro, setFiltro] = useState('');
    const [filtroCategoria, setFiltroCategoria] = useState('');

    const listaDeJogos = () => {
        let listaJogos = [...jogosMock];
        const jogosAtuais = localStorage.getItem('jogosAtuais');
        if (jogosAtuais) {
            listaJogos = JSON.parse(jogosAtuais)
        }
        return listaJogos.filter(jogo => jogo.nome.toLowerCase().includes(filtro.toLowerCase()) && jogo.categoria.includes(filtroCategoria));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = (e : any) => {
        e.preventDefault();
        const novoFiltro = e.target[0].value;
        const novaCategoria = e.target[1].value;
        setFiltro(novoFiltro);
        setFiltroCategoria(novaCategoria);
    }

    return (
        <Box backgroundColor="#00070A" color="#fff" fontFamily="sans-serif">
            <Header />
            <Flex flexDirection="column" p="20px" alignItems="center" color="#B1D22C" fontFamily="kode mono" >
                <Box maxW="1100px">
                <h2 >Jogos</h2>
                <form onSubmit={submitHandler}>
                    <Flex>
                        <Input type='text' h="40px" w="200px" backgroundColor="#0D1D25" color="#fff" placeholder="Nome do jogo" mr="20px" />
                        <Select placeholder='Select option' h="40px" w="200px" backgroundColor="#fff" color="#fff" mr="30px">
                            <option value="">-- Todas as categorias --</option>
                            {categoriasMock.map(categoria => (<option key={categoria.codigo} value={categoria.nome}>{categoria.nome}</option>))}
                        </Select>
                        <Button cursor="pointer" type="submit" w="150px" h="40px" borderRadius="5px" backgroundColor="#CD45EE" color="#fff">Pesquisar</Button>
                    </Flex>
                </form>
                <Flex flexWrap="wrap" mt="60px">
                    {listaDeJogos().length > 0 ? (
                        listaDeJogos().map(jogo => (
                    <Card key={jogo.nome} backgroundColor="#000000" border="solid #0D1D25 0.5px" borderRadius="18px" w="280px" m="35px">
                        <CardBody>
                            <Image src={jogo.imagem} alt={jogo.nome} w="100%" h="150px" objectFit="cover" />
                            <Box p="10px">
                                <Text fontSize="20px" fontWeight="bold">{jogo.nome}</Text>
                                <Rating name="read-only" value={2} readOnly />
                                <Text>{jogo.descricao}</Text>
                            </Box>
                        </CardBody>
                        <Flex justifyContent="center" mt="auto"> {/* Alinha o botão na parte inferior */}
                            <Button type="submit" w="100px" h="48px" fontWeight="bold" borderRadius="5px" backgroundColor="#CD45EE" color="#fff">Avaliar</Button>
                        </Flex>
                    </Card>
                        ))
                    ) : (
                        <p>Nenhum jogo encontrado, tente outro filtro</p>
                    )}
                </Flex>
                </Box>

            </Flex>
        </Box>
    )
}

export default Jogos;