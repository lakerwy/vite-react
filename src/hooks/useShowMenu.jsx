import {matchRoutes} from "react-router-dom";
import {router} from "../router/router.jsx";

function useShowMenu() {
    const location = useLocation()
    const matchRoute = matchRoutes(router, location)
    const hideMenu = matchRoute.some(item => item.route.hideMenu)
    return hideMenu
}

export default useShowMenu