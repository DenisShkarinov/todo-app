import IconMoon from '../assets/icon-moon.svg'
import IconSun from '../assets/icon-sun.svg'

import styles from './title.module.css'

export default function Title ({ switchTheme, theme }) {

    return (
        <div className={styles["todo-title"]} >
            <h1>Todo</h1>
            <button
                onClick={switchTheme}
                className={styles["todo-theme"]}
            >
                { theme ? <img src={IconSun} alt=""/> : <img src={IconMoon} alt=""/> }
            </button>
        </div>
    )
}