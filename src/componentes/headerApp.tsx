import { Link } from "react-router-dom";


const HeaderApp: React.FC<{}> = ({ }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <Link aria-label="Home" className="navbar-brand" to={"/"}>
                    <img src="https://d36p6ty9wanxdj.cloudfront.net/images/Logo.png" alt="logo" style={{ width: "45px", height: "45px" }} />
                    Raio Desentupidora
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> <b>Menu</b>
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link aria-label="Home" to={"/"} className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link aria-label="Quem Somos" to={"/quemsomos"} className="nav-link">
                                QUEM SOMOS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link aria-label="Nossos Serviços" to={"nossosservicos"} className="nav-link">
                                NOSSOS SERVIÇOS
                            </Link>
                        </li>
                        <li className="nav-item navbar-nav ml-auto">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                REGIÕES
                            </a>
                            <div className="dropdown-menu" style={{ "backgroundColor": "#256eb9", "fontWeight": "bold" }} aria-labelledby="navbarDropdownMenuLink">
                                <a className="nav-link"
                                    href="https://raiodesentupidora.com.br/desentupidora-em-guarulhos.html">DESENTUPIDORA EM
                                    GUARULHOS</a>
                                <a className="nav-link"
                                    href="https://raiodesentupidora.com.br/desentupidora-na-zona-norte.html">DESENTUPIDORA
                                    NA ZONA NORTE</a>
                                <a className="nav-link"
                                    href="https://raiodesentupidora.com.br/desentupidora-na-zona-leste.html">DESENTUPIDORA
                                    NA ZONA LESTE</a>
                                <a className="nav-link"
                                    href="https://raiodesentupidora.com.br/desentupidora-na-zona-oeste.html">DESENTUPIDORA
                                    NA ZONA OESTE</a>
                                <a className="nav-link"
                                    href="https://raiodesentupidora.com.br/desentupidora-na-zona-sul.html">DESENTUPIDORA NA
                                    ZONA SUL</a>
                                <a className="nav-link" href="https://raiodesentupidora.com.br/grande-sp.html">DESENTUPIDORA NA
                                    GRANDE SP</a>

                            </div>
                        </li>
                        <li className="nav-item">
                            <Link aria-label="Contato" to={"contato"} className="nav-link">CONTATO</Link>
                        </li>
                        <li className="nav-item">

                            <a href="tel:+5511980639525" className="nav-link" aria-label="Telefone de contato">
                                TELEFONE: (11) 98063-9525
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderApp;