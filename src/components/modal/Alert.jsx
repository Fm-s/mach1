import Styles from "./modal.module.css";

const Alert = ({children,callbackFn}) => {
    return (
        <div className={Styles.modalFrame}>
            <p>{children}</p>
            <button onClick={()=>{callbackFn()}}>Ok</button>
            
        </div>
    );
}

export default Alert;