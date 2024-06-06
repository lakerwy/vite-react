import {Link, matchRoutes, Outlet} from 'react-router-dom';
import HeaderBid from "./headerBid.jsx";
import TopMenu from "./topMenu.jsx";
import useShowMenu from "../hooks/useShowMenu.jsx";

const layout = () => {
    const hideMenu = useShowMenu()
    return (
        <div className="bidding-layout">
            <div className="bidding-header bidding-w">
                <HeaderBid/>
            </div>
            <div className="bidding-content">
                {!hideMenu && (<div className="top-menu pt-5 bidding-w">
                    <TopMenu/>
                </div>)}
                <Outlet/>
            </div>
        </div>
    )
}
export default layout
