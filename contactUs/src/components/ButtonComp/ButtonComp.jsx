// import {MdMessage} from 'react-icons/md';
import styles from './Button.module.css';

//...rest is used to pass remain properties and functions 

const ButtonComp = ({isSecondary,icon,text,...rest }) => {

  return (
      <button {...rest} className={isSecondary ?styles.secondaryBtn : styles.primaryBtn}>
        {icon}
       {text}
      </button>
  )
}

export default ButtonComp
 