import "../styles/Navbar.scss"

import { Navbar, Nav } from "react-bootstrap"

export default function Navigation({ currentPage, handlePageChange }) {

    return (
        <>
            <Navbar>
                <Navbar.Brand className="brand">
                    {/* <Nav.Link href="#about" onClick={() => handlePageChange("About")}> */}
                        <span className="brand-name">
                        Scott Simon</span>
                    {/* </Nav.Link> */}
                </Navbar.Brand>

                <Nav className="link-list link-list-item">
                    <Nav.Link href="#about"
                        onClick={() => handlePageChange("About")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
													Home
                    </Nav.Link>
                    <Nav.Link href="#portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                        className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link href="#contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Nav.Link>
                    <Nav.Link href="#resume"
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        Resume
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}
