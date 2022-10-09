import AnchorButton from '../anchorButton/AnchorButton';
import Styles from "./contentBlock.module.css";

const ContentBlockB = () => {
    return (
        <div className={Styles.container}>
            <h2>Dados de Preenchimento</h2>
            <ul>
                <li>Nome Completo do Aluno</li>
                <li>Número de Cadastro de Pessoa Física (CPF)</li>
                <li>E-mail único (cada aluno deve ter o seu email)</li>
                <li>O Curso que o aluno participa</li>
            </ul>
            <AnchorButton href="#cadastrar">Cadastrar</AnchorButton>
        </div>
    );
}

export default ContentBlockB;