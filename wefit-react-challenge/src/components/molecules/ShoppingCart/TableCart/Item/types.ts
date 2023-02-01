export interface ItemProps {
  title: string
  image: string
  qtd: number
  price: number
  handleSub: () => void
  handleAdd: () => void
  handleRemoveAll: () => void
}
