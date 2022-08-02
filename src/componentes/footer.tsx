
import { Link } from "react-router-dom";

const AppFooter: React.FC = () => {

    return (<footer className="ftco-footer">
        <div className="container">
            <div className="row mb-5">
                <div className="col-sm-12 col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2 logo">Sobre Nós</h2>
                        <p>Raio Desentupidora - Somos movido pelo desafio de promover a cada dia serviços de qualidade e
                            eficiência, fazendo a diferença, respeitando o consumidor, garantindo por escrito serviços
                            de qualidade a sociedade com competência , ética, cordialidade e respeito à diversidade.</p>
                        <ul className="ftco-footer-social list-unstyled mt-2">
                            <li className=""><a aria-label="Twitter"
                                href="https://www.facebook.com/raiodesentupidoradedetizadora/"><span
                                    className="fa fa-twitter"></span></a></li>
                            <li className=""><a aria-label="Facebook"
                                href="https://www.facebook.com/raiodesentupidoradedetizadora/"><span
                                    className="fa fa-facebook"></span></a></li>
                            <li className=""><a aria-label="Instagram"
                                href="https://www.facebook.com/raiodesentupidoradedetizadora/"><span
                                    className="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md">
                    <div className="ftco-footer-widget mb-4 ml-md-4">
                        <h2 className="ftco-heading-2">Institucional</h2>
                        <ul className="list-unstyled">
                            <li>
                                <Link aria-label="Home" to={"/"}><span
                                    className="fa fa-chevron-right mr-2">
                                </span>HOME</Link>
                            </li>
                            <li><Link aria-label="Quem somos" to={"/quemsomos"}><span
                                className="fa fa-chevron-right mr-2"></span>QUEM SOMOS</Link>
                            </li>
                            <li><Link aria-label="Nossos Serviços" to={"/nossosservicos"}><span
                                className="fa fa-chevron-right mr-2"></span>NOSSOS SERVIÇOS</Link></li>
                            <li><Link aria-label="Contato" to={"/contato"}><span
                                className="fa fa-chevron-right mr-2"></span>CONTATOS</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md">
                    <div className="ftco-footer-widget mb-4 ml-md-4">
                        <h2 className="ftco-heading-2">Contato(s)</h2>
                        <ul className="list-unstyled">
                            <li><a aria-label="Telefone 1" href="tel://5511980639525"><span
                                className="fa fa-chevron-right mr-2"></span>Tel: (11) 98063-9525</a></li>
                            <li><a aria-label="Telefone 2" href="tel://5511980639525"><span
                                className="fa fa-chevron-right mr-2"></span>Tel: (11) 98039-9879</a></li>
                        </ul>
                    </div>

                    <div className="ftco-footer-widget mb-4 ml-md-4">
                        <h2 className="ftco-heading-2">Formas de Pagamento</h2>
                        <ul className="list-unstyled">
                            <li><span className="fa fa-chevron-right mr-2"></span>Cartões</li>
                            <li><span className="fa fa-chevron-right mr-2"></span>Cheque</li>
                            <li><span className="fa fa-chevron-right mr-2"></span>Dinheiro</li>
                            <li><span className="fa fa-chevron-right mr-2"></span>Deposito bancário</li>
                            <li><span className="fa fa-chevron-right mr-2"></span>Parcelamos também!</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">E-mail</h2>
                        <ul className="list-unstyled">
                            <li><a aria-label="Email Contato" href="#"><span
                                className="fa fa-chevron-right mr-2"></span>contato@raiodesentupidora.com.br</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Endereço</h2>
                        <ul className="list-unstyled">
                            <li>Rua Nobel Almeida Kuke, 485,
                                Guarulhos - São Paulo
                                CEP: 07084-210</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid px-0 py-5 bg-black">
        </div>
    </footer>)

}

export default AppFooter;