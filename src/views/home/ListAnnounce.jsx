import styles from "./home.module.scss";

const ListAnnounce = ({className, title, listData }) => {
    const handleClick = (item) => {
        console.log(item)
        // router.push({
        //     name: 'BidInfo',
        //     params: {
        //         id: item.id
        //     }
        // })
    }
    const liItem = listData.map((item, index) => {
        return (
            <li key={index} className="li-list" onClick={e => handleClick(item)}>
                <a href="javascript:;">{item.title}</a>
                <span className="date">{item.publishTime}</span>
            </li>
        )
    })
    return (
        <div className={styles.listAnnounce + ' ' + className} data-flex="dir:left box:first">
            <h3>{title}</h3>
            <ul>
                {liItem}
            </ul>
        </div>
    )
}
export default ListAnnounce