import styles from './styles/Button.module.css'

export default function Button(props) {
  const { userInput, choose, setWinner } = props;
  return (
    <button className={styles.Button} onClick={() => setWinner(choose(userInput.split("\n")))}>
      { props.children }
    </button>
  )
}