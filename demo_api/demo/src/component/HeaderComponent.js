import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand">VINHND</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                        {/* <li className="nav-item">
                            <div className="nav-link disabled" aria-disabled="true">Disabled</div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent;