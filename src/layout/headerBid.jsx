import styles from './style/headerBid.module.scss'
import {getImageUrl} from "@/utils/index.js";
import {Dropdown, Space, Menu, Button} from 'antd';


const headerBid = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        console.log('click', e);
    };
    const goHome = () => {
        startTransition(()=>{
            navigate('/home')
        })
    }
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
                <img className="cursor-pointer" src={getImageUrl('logo5.png')} onClick={()=>goHome()} alt=""/>
            </div>
            <ul className={styles.nav} data-flex="">
                <div className={styles.unLogin} data-flex="cross:center">
                    <div className={styles.login}>登录</div>
                    <div className={styles.register}>
                        <Button className={styles.myButton} type="primary">注册</Button>
                    </div>
                </div>
                <div className={styles.hasLogin} data-flex="cross:center">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                    >
                        <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
                            测试fbl
                        </a>
                    </Dropdown>
                </div>
            </ul>
        </div>
    )
}

export default headerBid
