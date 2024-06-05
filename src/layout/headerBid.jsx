import { Link, Outlet } from 'react-router-dom';
import styles from './style/headerBid.module.scss'
import {getImageUrl} from "@/utils/index.js";

function headerBid() {
    return (
        <div className={styles.header} data-flex="main:justify cross:center">
            <div className={styles.logo}>
                <img src={getImageUrl('logo5.png')} alt="" />
            </div>
        </div>
    )
}
export default headerBid
