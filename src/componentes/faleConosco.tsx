
import { Link } from "react-router-dom";

const title: string = "ENVIE UMA MENSAGEM"

const BntFaleConosco: React.FC<{}> = () => {

    return (<div className="block-left">
        <Link to={"/contato"} className="btn btn-danger margin-btn">{title}</Link>
    </div>)
}

export  const BntFaleConoscoMobile: React.FC<{}> = () => {

    return (<div className="btn-danger col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        <Link to={"/contato"} className="btn btn-danger margin-btn text-center">{title}</Link>
    </div>)
}

export default BntFaleConosco; 