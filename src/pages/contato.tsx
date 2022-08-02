import React from "react";
import { BtnWhatsApp } from "../componentes/whatsApp";
import sliderinternofundojpg from "../assets/images/slider-interno-fundo.jpg";
import OrcamentoGratis from "../componentes/orcamentoGratis";

const Home: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <section className="hero-wrap hero-wrap-2" style={{ "backgroundImage": `url(${sliderinternofundojpg})` }}
                data-stellar-background-ratio="0.5">

                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-center" style={{ "height": "100px !important" }}>
                        <div className="col-md-9  mb-5 text-center">
                            <p className="breadcrumbs mb-0"><span className="mr-2">
                            </span>Contato <span><i
                                className="fa fa-chevron-right"></i></span></p>
                            <h4 style={{ "color": "white" }}>Entre em contato e agende um orçamento gratuito
                                e sem compromisso!</h4>
                        </div>
                    </div>
                    <BtnWhatsApp />
                    <div className="block-left">

                        <a href="tel:+5511980639525"
                            id="btnLigarAgora"
                            aria-label="Ligue"
                            className="btn btn-primary margin-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <b> LIGUE AGORA </b>
                        </a>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper px-md-4">
                                <div className="row mb-5">
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Endereço:</span> Rua Nobel de Almeida Kuke, 485 - Parque Continental II
                                                    Guarulhos - SP</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Telefone:</span>
                                                    <a href="tel://5511980639525"> 98063-9525</a> ou
                                                    <a href="tel://5511980639525"> 98039-9879</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Email:</span> <a href="mailto:contato@raiodesentupidora.com.br">
                                                    contato@raiodesentupidora.com.br</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Website</span> <a href="#">www.raiodesentupidora.com.br</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OrcamentoGratis />
            </section>
        </React.Fragment>

    )
}

export default Home;