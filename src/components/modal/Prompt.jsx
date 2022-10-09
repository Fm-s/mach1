import Styles from "./modal.module.css";

const Prompt = ({children,callbackFn}) => {
    return (
        <div className={Styles.modalFrame}>
            <p>{children}</p>
            <div className={Styles.promptBox}>
                <button className={Styles.confirm} onClick={()=>{callbackFn(true)}}>Sim</button>
                <button className={Styles.cancel} onClick={()=>{callbackFn(false)}}>Não</button>
            </div>
        </div>
    );
}

export default Prompt;