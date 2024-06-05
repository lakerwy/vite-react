import styles from './style/headerBid.module.scss'
import {getImageUrl} from "@/utils/index.js";
import {DownOutlined, SmileOutlined} from '@ant-design/icons';
import {Dropdown, Space, Menu} from 'antd';


const headerBid = () => {
    const handleClick = (e) => {
        console.log('click', e);
    };
    const items = [
        {
            key: '1',
            label: (<a href="#" onClick={e => handleClick(e)}>关于我的</a>),
        },
        {
            key: '2',
            label: (<a href="#" onClick={e => handleClick(e)}>退出登录</a>),
        },
    ];
    return (
        <div className={styles.header} data-flex="main:justify cross:center">
            <div className={styles.logo}>
                <img src={getImageUrl('logo5.png')} alt=""/>
            </div>
            <ul className={styles.nav} data-flex="">
                <div className={styles.hasLogin} data-flex="cross:center">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            测试fbl
                        </a>
                    </Dropdown>
                </div>
            </ul>
        </div>
    )
}

export default headerBid
