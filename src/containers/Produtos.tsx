import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  // Removido: favoritos e favoritar (o Redux cuida disso agora)
}

const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            // Note que não passamos mais 'estaNosFavoritos' nem 'favoritar'
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
