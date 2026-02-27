import { useDispatch, useSelector } from 'react-redux'
import { adicionar, favoritar } from '../../store/reducers/carrinho'
import { Produto as ProdutoType } from '../../App'
import { RootReducer } from '../../store' // <--- Importante para o useSelector
import * as S from './styles'

type Props = {
  produto: ProdutoType
  // NADA MAIS AQUI! Só o produto.
}

// ... sua função paraReal ...

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  // O componente descobre sozinho se é favorito:
  const favoritos = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )
  const estaNosFavoritos = favoritos.some((f) => f.id === produto.id)

  return (
    <S.Produto>
      {/* ... seu JSX (capa, titulo, preço) ... */}

      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>

      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

export default ProdutoComponent
