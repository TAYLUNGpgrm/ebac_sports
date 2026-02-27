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
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const produtosTeste: Produto[] = [
    {
      id: 1,
      nome: 'Produto Teste Redux',
      preco: 99.9,
      imagem: 'https://via.placeholder.com/150'
    }
  ]

  if (isLoading) return <h3>Carregando...</h3>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {}
        <Header />

        {}
        <Produtos
          produtos={produtos && produtos.length > 0 ? produtos : produtosTeste}
        />
      </div>
    </>
  )
}
export default App
