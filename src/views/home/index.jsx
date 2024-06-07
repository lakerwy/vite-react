import styles from "./home.module.scss";
import {Button, DatePicker} from 'antd';
import TopMenu from "../../layout/topMenu.jsx";
import BidCard from "../../components/bidCard/index.jsx";

function Board() {
    return (
        <div className={styles.board} data-flex="dir:left box:first">
            <BidCard className={`${styles.notice} mr-5`} title="通知公告" ></BidCard>
            <BidCard title="关于我的" ></BidCard>
        </div>
    )
}

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
            <div className={`${styles.board} bidding-w`}>
                <div className={styles.noticeInfo} data-flex="cross:center">
                    <i></i>
                    <div className={styles.scroll}>
                        <ul>
                            <li>湖北建科科技集团采购电子平台，欢迎您的使用</li>
                            <li>湖北建科科技集团采购电子平台，欢迎您的使用</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bidding-w">
                <Board />
            </div>

        </>
    )
}

export default home
