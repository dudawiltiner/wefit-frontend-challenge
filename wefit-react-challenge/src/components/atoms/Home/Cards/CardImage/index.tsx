import { CardImageProps } from './types'

export default function CardImage({ link }: CardImageProps) {
  return <img width="100%" src={link} alt="Card Image" />
}
