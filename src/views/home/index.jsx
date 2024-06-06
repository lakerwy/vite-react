import styles from "./home.module.scss";
import {Button, DatePicker} from 'antd';
import TopMenu from "../../layout/topMenu.jsx";

const home = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className={`${styles.banner}`}>
                <div className={`${styles.bannerContent} bidding-w`}>
                    <div className={styles.bannerLeft}>
                        <h2>欢迎使用<br/><span>建科集团采购电子商务平台</span></h2>
                        <div className={`${styles.bidSearch} bid-search`} data-flex="cross:center dir:left box:last">
                            <input className="search-input" placeholder="请输入关键词搜索"/>
                            <Button type="primary">搜索</Button>
                        </div>
                    </div>
                    <div className={styles.bannerRight}>
                    </div>
                    <div className={styles.topMenu}>
                        <TopMenu/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home
