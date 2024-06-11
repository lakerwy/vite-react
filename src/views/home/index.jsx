import styles from "./home.module.scss";
import {Button, DatePicker} from 'antd';
import TopMenu from "../../layout/topMenu.jsx";
import BidCard from "../../components/bidCard/index.jsx";
import ListAnnounce from "./ListAnnounce.jsx"

function Board() {
    return (
        <div className={styles.board} data-flex="dir:left box:first">
            <BidCard className={`${styles.notice} mr-5`} title="通知公告"></BidCard>
            <BidCard title="关于我的"></BidCard>
        </div>
    )
}
const home = () => {
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
                <Board/>
            </div>
            {/*公告列表*/}
            <div className="bidding-w pt-5 pb-5" data-flex="dir:left box:first">
                <div className={`${styles.contentLeft} mr-5`}>
                    <ListAnnounce listData={[]} title="竞价公告" className="mb-5"></ListAnnounce>
                    <ListAnnounce listData={[]} title="询价公告" className="mb-5"></ListAnnounce>
                    <ListAnnounce listData={[]} title="招标公告"></ListAnnounce>
                </div>
                <div className={styles.contentRight} data-flex="dir:top box:first">
                    <BidCard className={`${styles.rightFirst} mb-5`} headerStyle={{background: '#EFF9FF', color: '#226AFF', height: '50px'}} title="服务专区"></BidCard>
                    <BidCard title="资源统计" headerStyle={{background: '#EFF9FF', color: '#226AFF', height: '50px'}}></BidCard>
                </div>
            </div>
            {/*供应商黑名单*/}
            <div className={styles.blacklist}>
                <div className="bidding-w">
                    <BidCard title="供应商黑名单" headerStyle={{background: '#DFDFDF', color: '#333333', height: '50px'}} className={`${styles.blacklistCard} mb-5`}>
                    </BidCard>
                </div>
            </div>
        </>
    )
}

export default home
