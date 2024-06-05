import {Link, Outlet} from 'react-router-dom';
import HeaderBid from "./headerBid.jsx";
import TopMenu from "./topMenu.jsx";

const layout = () => {
    return (
        <div className="bidding-layout">
            <div className="bidding-header bidding-w">
                <HeaderBid />
            </div>
            <div className="bidding-content">
                <div className="top-menu pt-5 bidding-w">
                    <TopMenu />
                </div>
                <Outlet/>
            </div>
        </div>
    )
}
export default layout
