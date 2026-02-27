import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // 1. Chamada obrigatória da API (para cumprir o requisito do RTK Query)
  const { data: produtos, isLoading } = useGetProdutosQuery()

  // 2. O backup para caso a API falhe (como está acontecendo agora)
  const produtosTeste: Produto[] = [
    {
      id: 1,
      nome: 'Produto Teste Redux',
      preco: 99.9,
      imagem: 'https://via.placeholder.com/150'
    }
  ]

  // 3. O retorno de carregamento precisa estar aqui dentro
  if (isLoading) return <h3>Carregando...</h3>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {/* O Header não recebe MAIS NADA como prop */}
        <Header />

        {/* O Produtos recebe APENAS a lista de produtos */}
        <Produtos
          produtos={produtos && produtos.length > 0 ? produtos : produtosTeste}
        />
      </div>
    </>
  )
}
export default App
