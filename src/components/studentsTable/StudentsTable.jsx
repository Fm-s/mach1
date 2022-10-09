import CancelButton from "../cancelButton/CancelButton";
import Styles from "./studentsTable.module.css";

const StudentsTable = ({tableData,deleteFn}) => {
    let tbody = <tr></tr>;

    if(tableData.length > 0) {
        tbody = tableData.map(
            (element, index) => {
             return (
                 <tr key={"StudentTable_"+index}>
                     <td>{element.name}</td>
                     <td>{element.email}</td>
                     <td>{element.cpf}</td>
                     <td>{element.course}</td>
                     <td><CancelButton callbackFn={()=>{deleteFn(index)}}/></td>
                 </tr>
             );
            }
        );
    }else {
        return <h3 className={Styles.noData}>Sem Alunos Cadastrados</h3>
    }

    return (
        <table className={Styles.studentTable}>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>CPF</td>
                    <td colSpan="2">Curso</td>
                </tr>
            </thead>
            <tbody>{tbody}</tbody>
        </table>
    );
}

export default StudentsTable;