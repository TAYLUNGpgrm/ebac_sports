import { useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

// 1. Hooks do Redux e da API
import { useSelector } from 'react-redux'
import { useGetProdutosQuery } from './services/api'
import { RootReducer } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const [favoritos, setFavoritos] = useState<Produto[]>([])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      setFavoritos(favoritos.filter((p) => p.id !== produto.id))
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  if (isLoading) return <h3>Carregando...</h3>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {/* Passamos o que vem do Redux para o Header */}
        <Header favoritos={favoritos} itensNoCarrinho={itensNoCarrinho} />
        <Produtos
          produtos={produtos || []}
          favoritos={favoritos}
          favoritar={favoritar}
        />
      </div>
    </>
  )
}

export default App
