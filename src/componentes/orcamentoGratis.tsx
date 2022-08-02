
import React from "react";
import { BtnWhatsApp } from "./whatsApp";

const OrcamentoGratis: React.FC<{}> = () => {
    return (<div className="container" id="myanchor">
        <div className="row no-gutters">
            <div className="col-md-12">
                <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Faça um Orçamento Grátis</h3>
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="name">Nome</label>
                                    <input type="text" id="name" required className="form-control" name="name" placeholder="Nome" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="email">Email</label>
                                    <input type="email" id="email" required className="form-control" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="subject">Telefone</label>
                                    <input type="tel" id="tel" required className="form-control" name="subject" placeholder="(xx) xxxxx-xxxx" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">Mensagem</label>
                                    <textarea name="message" id="mensagem" required className="form-control" cols={30} rows={4} placeholder="Escreva aqui a sua mensagem"></textarea>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-12">
                                <div className="form-group">
                                    <input type="submit" id="btnEnvio" value="Enviar Formulário" className="btn btn-primary" />
                                    <div className="submitting"></div>
                                </div>
                            </div>
                            <BtnWhatsApp />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>)
}

export default OrcamentoGratis;