
import ImgFrame from "../imgFrame/ImgFrame";
import Styles from "./contentBlock.module.css";

const ContentBlockC = () => {
    return (
        <div className={Styles.container + " " + Styles.blockC}>
                <span></span>
                <div>
                    <ImgFrame imgPath="security.jpeg" altText="Segurança" />
                    <p>Segurança</p>
                </div>
                <div>
                   <ImgFrame imgPath="agile.png" altText="Ágil"/>
                    <p>Agilidade</p>
                </div>
                <div>
                    <ImgFrame imgPath="5star.png" altText="Ágil"/>
                    <p>Facilidade</p>
                </div>
            </div>
    );
}

export default ContentBlockC;