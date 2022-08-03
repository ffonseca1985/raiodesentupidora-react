
import whatApp from "../assets/images/whatsapp.png"

export const BtnWhatsApp: React.FC<{}> = () => {

    return <div className="block-left col-xs-12 col-sm-3 col-md-3 col-lg-3" style={{ "margin": "2" }}>
        <a href="https://api.whatsapp.com/send?phone=5511980639525" aria-label="WhatsWapp"
            className="btn btn-success col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ "paddingTop": "15px", "paddingBottom": "15px" }}>
            <div style={{ "float": "left", "width": "20%" }}>
                <img src={whatApp} alt="whats app" />
            </div>
            <div style={{ "float": "left", "textAlign": "left", "width": "80%", "fontSize": "13px" }}>
                <b>FAÇA SEU ORÇAMENTO AGORA MESMO</b>
            </div>
        </a>
    </div>
}


export const WhatsAppFlutuante: React.FC<{}> = () => {

    return (

        <a href="https://wa.me/5511980639525" style={{ "position": "fixed", "width": "60px", "height": "60px", "bottom": "40px", "right": "40px", "backgroundColor": "#25d366", "color": "#FFF", "borderRadius": "50px", "textAlign": "center", "fontSize": "30px", "boxShadow": "1px 1px 2px #888", "zIndex": "1000" }} target="_blank">
            <i style={{ "marginTop": "16px" }} className="fa fa-whatsapp"></i>
        </a>

    )
}