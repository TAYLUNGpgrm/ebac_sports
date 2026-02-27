import { useSelector } from 'react-redux' // Importar o hook
import * as S from './styles'
import { paraReal } from '../Produto'
import cesta from '../../assets/cesta.png'
import { RootReducer } from '../../store' // Importar o tipo da sua store

const Header = () => {
  // Agora o Header busca os dados diretamente do estado global
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const favoritos = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        {/* Usando os dados vindos do Redux */}
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="cesta" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
