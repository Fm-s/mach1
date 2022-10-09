import { useRef, useState } from "react";
import Styles from "./registerStudent.module.css";
import CpfMask from "../../services/CpfMask";
import TestaCPF from "../../services/TestaCPF";

const RegisterStudent = ({addFn}) => {

    const nameRef = useRef();
    const emailRef = useRef();
    const cpfRef = useRef();
    const courseRef = useRef();

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [errorObj, setErrorObj] = useState({});

    const LetterMask = value => value.replace(/[^A-Za-z\s]/,"");

    const RegexTest = (regex,value) => new RegExp(regex).test(value);

    const ValidToClass = value => value ? Styles.valid : Styles.invalid;

    const SetErrorMsg = (msg,field,validator) => {
        setErrorObj((oldValue)=>{return {...oldValue, [field]: validator ? "" : msg } })
    }

    const NameHandler = (e) => {
        const maskedValue = LetterMask(e.target.value);
        setName(maskedValue);
    }
    
    const CpfHandler = (e) => {
        const maskedValue = CpfMask(e.target.value);
        setCpf(maskedValue);
    }

    const NameValidator = () => {
        const isValid = (nameRef.current.value.length > 8);
        nameRef.current.className = ValidToClass(isValid)
        SetErrorMsg("É necessário nome completo do aluno","name",isValid);
        return isValid;
    }
    
    const EmailValidator = () => {
        const isValid = RegexTest("[a-z0-9]+@[a-z]+.[a-z]{2,3}",emailRef.current.value);
        emailRef.current.className = ValidToClass(isValid)
        SetErrorMsg("E-mail inválido","email",isValid);
        return isValid;
    }

    const CpfValidator = () => {
        const isValid = TestaCPF(cpfRef.current.value);
        cpfRef.current.className = ValidToClass(isValid);
        SetErrorMsg("CPF inválido","cpf",isValid);
        return isValid;
    }

    const CourseValidator = () => {
        const isValid = (courseRef.current.value.length > 0);
        courseRef.current.className = ValidToClass(isValid)
        SetErrorMsg("O Curso não pode estar em branco","course",isValid);
        return isValid;
    }

    const Validator = () => {
        let isValid = NameValidator();
        isValid = EmailValidator() && isValid;
        isValid = CpfValidator() && isValid;
        isValid = CourseValidator() && isValid;
        return isValid;
    }

    const ResetForm = (e) => {
        setName("");
        nameRef.current.className = "";
        
        setCpf("");
        cpfRef.current.className = ""
        
        emailRef.current.value = "";
        emailRef.current.className = ""

        courseRef.current.value = "";
        courseRef.current.className = ""

        setErrorObj({});
    }


    const SubmitHandler = (e) => {
        e.preventDefault();
        if(Validator()){
            const {success, errorMsg} = addFn({name: name, email: emailRef.current.value, cpf: cpf, course: courseRef.current.value});
            if(success){
                ResetForm();
            } else {
                if(errorMsg.cpf) cpfRef.current.className = ValidToClass(false);
                if(errorMsg.email) emailRef.current.className = ValidToClass(false);
                setErrorObj(errorMsg);
            } 
        }

    }

    return (
        <form className={Styles.form} onSubmit={SubmitHandler}>
            <div className={Styles.formGroup}>
                <div className={Styles.formControl}>
                    <label>
                        <span>Nome</span>
                        <input type="text" name="name" value={name} onChange={NameHandler} onBlur={NameValidator} ref={nameRef} />
                        {errorObj.name && <p>{errorObj.name}</p>}
                    </label>
                </div>
                <div className={Styles.formControl}>
                    <label>
                        <span>E-mail</span>
                        <input type="text" name="email" onBlur={EmailValidator} ref={emailRef} />
                        {errorObj.email && <p>{errorObj.email}</p>}
                    </label>
                </div>
                <div className={Styles.formControl}>
                    <label>
                        <span>CPF</span>
                        <input type="text" name="cpf" value={cpf} onChange={CpfHandler} onBlur={CpfValidator} ref={cpfRef} />
                        {errorObj.cpf && <p>{errorObj.cpf}</p>}
                    </label>
                </div>
                <div className={Styles.formControl}>
                    <label>
                        <span>Curso</span>
                        <input ref={courseRef} name="course" type="text" onBlur={CourseValidator} />
                        {errorObj.course && <p>{errorObj.course}</p>}
                    </label>
                </div>
            </div>
             <input className={Styles.aButton} type="submit" value="Cadastrar" />
        </form>
    );
}

export default RegisterStudent;