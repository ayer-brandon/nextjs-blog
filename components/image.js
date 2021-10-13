import Image from 'next/image'
import utilStyles from '../styles/util.module.css';

export default function ProfileImage({ width, height, name }) {

  return (<Image
    priority
    src="/images/profile.jpg"
    className={utilStyles.borderCircle}
    height={height}
    width={width}
    alt={name}
  />)
}