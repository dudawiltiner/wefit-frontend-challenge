import { ScreenImageProps } from './types';

export default function ScreenImage({ link }: ScreenImageProps) {
  return <img style={{ maxWidth: '100%' }} src={link} alt="Screen Image" />;
}
