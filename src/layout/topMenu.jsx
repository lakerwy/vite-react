import styles from './style/topMenu.module.scss'
import { router } from "../router/router.jsx";

const navList = [
    {
        title: '首页',
        name: 'Bidding',
        path: '/home'
    },
    {
        title: '采购信息',
        name: 'Purchase',
        path: '/purchase'
    },
    {
        title: '供应商信息',
        name: 'Supplier',
        path: '/supplier'
    },
    {
        title: '操作指引',
        name: 'HelpCenter',
        path: '/helpCenter'
    },
    {
        title: '关于我们',
        name: 'AboutUs',
        path: '/aboutUs'
    }
]
const topMenu = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const handleClick = (item) => {
        startTransition(()=>{
            navigate(item.path);
        })
    }
    const items = navList.map((item) => {
        return (
            <li key={item.name} className={item.path === location.pathname ? styles.active : undefined} onClick={e => handleClick(item)}>
                {item.title}
            </li>
        )
    })
    return (
        <ul className={styles.nav} data-flex="dir:left box:mean">
            {items}
        </ul>
    )
}

export default topMenu
