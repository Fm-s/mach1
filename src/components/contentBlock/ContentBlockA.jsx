import AnchorButton from '../anchorButton/AnchorButton';
import Styles from "./contentBlock.module.css";

const ContentBlockA = () => {
    
    return (
        <div className={Styles.container}>
            <h2>Bem-Vindos ao Cadastro de Alunos!</h2>
            <p>Para seguir a sessão de cadastro de um novo aluno clique no botão abaixo.</p>
            <AnchorButton href="#cadastrar">Cadastrar</AnchorButton>
        </div>
    );
}

export default ContentBlockA;