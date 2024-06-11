import styles from "./index.module.scss"

const bidCard = ({className, headerStyle, title, titleIcon, children}) => {
    return (
        <div className={`${styles.bidCard} ${className}`} >
            <div className={styles.cardHeader} style={headerStyle} data-flex="cross:center">
                {titleIcon && <img src={titleIcon} className="mr-2"/>}
                <span>{title}</span>
                {children}
            </div>
        </div>
    )
}

export default bidCard