import styles from "./home.module.scss";
import {Button, DatePicker} from 'antd';

const home = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={`${styles.home} bidding-w`}>
            <h2>这是首页</h2>
        </div>
    )
}

export default home
