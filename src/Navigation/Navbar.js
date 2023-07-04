import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Button from "bootstrap/js/src/button";

export default function Navbar() {
    return (
        <nav className="nav" style={{position:"sticky",top:0}}>
            <Link to="/" className="site-title">
                <div className="brandName">
                    Point Drift
                </div>
                <div className={"combinedLogo"}>
                    <div className={"pointLogo"} style={{position:"absolute"}}></div>
                    <div className={"pointShadow"} style={{position:"absolute"}}></div>
                </div>
            </Link>
            <ul>
                <div>
                    <CustomLink to="/product">Pricing</CustomLink>
                </div>
                <div>
                    <CustomLink to="/about">About</CustomLink>
                </div>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}