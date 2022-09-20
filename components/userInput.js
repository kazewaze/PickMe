import styles from './styles/UserInput.module.css'

export default function UserInput(props) {

  let inputPlaceholder = "JavaScript\nPython\nRuby\nPHP";

  return (
    <textarea className={styles.userInput} placeholder={inputPlaceholder} onChange={(e) => props.userInputHandler(e.target.value)}>
      { props.children }
    </textarea>
  )
}