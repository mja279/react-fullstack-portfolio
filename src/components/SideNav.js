import { Col, Container } from "react-bootstrap";

// const SIDENAV_WIDTH = {
//     width: '200px'
// }

export default function SideNav() {
    return (
        // <Container>
            <Col xl={2} md={3}>
                {/* <div className="col-xl-2 col-md-3 col-3" > */}
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="/" aria-current="page">
                                Introduction
                            </a>
                        </li>
                        <li className="nav-item">
                             <a href="/" aria-current="page">
                             Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" aria-current="page">
                                Introduction
                            </a>
                        </li>
                        <li className="nav-item">
                             <a href="/" aria-current="page">
                             Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" aria-current="page">
                                Introduction
                            </a>
                        </li>
                        <li className="nav-item">
                             <a href="/" aria-current="page">
                             Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" aria-current="page">
                                Introduction
                            </a>
                        </li>
                        <li className="nav-item">
                             <a href="/" aria-current="page">
                             Experience
                            </a>
                        </li>
                    </ul>
                {/* </div> */}

               
            </Col>

            
        // </Container>
    )}
