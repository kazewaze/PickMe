import Link from 'next/link'
import styles from './styles/Button.module.css'

export default function Button(props) {
  const { userInput, choose, setWinner } = props;
  return (
    <Link href="#result">
      <a className={styles.Button} onClick={() => setWinner(choose(userInput.split("\n")))}> { props.children } </a>
    </Link>
  )
}