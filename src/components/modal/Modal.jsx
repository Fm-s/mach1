import Prompt from "./Prompt";
import Alert from "./Alert";
import Styles from "./modal.module.css";

const Modal = ({msg,modalSet,callbackFn}) => {
    let content;
    
    const modalClose = (bool) => {
        if(bool) {
            callbackFn();
        }
        modalSet({pop: false});
    };

    if(typeof callbackFn === "function"){
        content = <Prompt callbackFn={modalClose}>{msg}</Prompt>;
    } else {
        content = <Alert callbackFn={modalClose}>{msg}</Alert>
    }

    return (
        <div className={Styles.modalBackdrop}>
            {content}
        </div>
    );
}

export default Modal;