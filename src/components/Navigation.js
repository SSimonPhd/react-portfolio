import "../styles/Navbar.scss"

import { Navbar, Nav } from "react-bootstrap"

export default function Navigation({ currentPage, handlePageChange }) {

    return (
        <>
            <Navbar>
                <Navbar.Brand className="brand">
                        <span className="brand-name">
                        Scott </span>
												<span className="brand-name2">
                        Simon</span>
                </Navbar.Brand>

                <Nav className="link-list link-list-item">
                    <Nav.Link href="#about"
                        onClick={() => handlePageChange("About")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
													about
                    </Nav.Link>
                    <Nav.Link href="#portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                        className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                        portfolio
                    </Nav.Link>
                    <Nav.Link href="#contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        contact
                    </Nav.Link>
                    <Nav.Link href="#resume"
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        resume
                    </Nav.Link>
                </Nav>
								
            </Navbar>
        </>
    );
}
