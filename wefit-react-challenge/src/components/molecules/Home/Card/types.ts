export interface CardProps {
  link: string
  title: string
  price: number
  qtd: number
  selected: boolean
  handleSelect: () => void
}
