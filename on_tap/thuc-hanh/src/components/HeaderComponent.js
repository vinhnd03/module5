import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { logoutAction1 } from "../redux/action/action";

const HeaderComponent = () => {
    const currentAccount = useSelector(state => state.login);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAction1());
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand">VinhND</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/list"}>List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/add"}>Add</Link>
                        </li>
                        <li className="nav-item">
                            {!currentAccount && <Link to={"/login"} className="text-primary nav-link">Đăng Nhập</Link>}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled text-success" aria-disabled="true">{currentAccount?.username}</Link>
                        </li>
                        <li className="nav-item">
                            {currentAccount && <Link onClick={handleLogout} className="text-danger nav-link">Đăng xuất</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent;