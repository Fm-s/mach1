import { useState } from "react";
import './App.css';
import ContentBlockA from './components/contentBlock/ContentBlockA';
import ContentBlockB from './components/contentBlock/ContentBlockB';
import ContentBlockC from "./components/contentBlock/ContentBlockC";
import FooterComponent from './components/footer/FooterComponet';
import ImgFrame from './components/imgFrame/ImgFrame';
import Modal from "./components/modal/Modal";
import Navbar from './components/navbar/Navbar';
import RegisterStudent from "./components/registerStudent/RegisterStudent";
import SectionA from './components/sections/SectionA';
import SectionB from './components/sections/SectionB';
import StudentsTable from './components/studentsTable/StudentsTable';
import LocalDatabase from "./services/LocalDatabase";

function App() {
  
  const sections = [{name:"Sistema", linkId:"#dica1"},{name:"Dados", linkId:"#dica2"},{name:"Cadastro", linkId:"#cadastrar"},{name:"Lista de Alunos", linkId:"#lista_alunos"}];

  const LocalDB = LocalDatabase();

  const [tableData, setTableData] = useState(LocalDB.getData());
  const [modal, setModal] = useState({pop: false});

  const DeleteFn = (index) => {
    const callback = () => {
      LocalDB.deleteEntry(index);
      setTableData(LocalDB.getData())
    }
    setModal({pop: true, msg: "Confirma exclusão de Aluno?", callbackFn: callback});
  }

  const AddFn = (newEntry) => {
    const obj = LocalDB.saveEntry(newEntry);
    if(obj.success) {
      setTableData(LocalDB.getData());
      setModal({pop:true, msg: "Aluno adicionado com sucesso!"})
    }
    return obj;
  }


  return (
    <div className="App">
      {modal.pop && <Modal msg={modal.msg} modalSet={setModal} callbackFn={modal.callbackFn} />}
     <Navbar sections={sections} />

     <SectionA leftContent={<ContentBlockA />} rightContent={<ImgFrame imgPath={'/userdata.jpeg'} altText="Aluno Inovador" />} background="white" />

     <SectionB sectionId="dica1" sectionContent={<ContentBlockC />} title="Sistema Pro Estudo" background="grey" />

     <SectionA sectionId="dica2" leftContent={<ImgFrame imgPath={'/aluna1.png'} altText="Aluno Inovador" />} rightContent={<ContentBlockB />} background="white" />

     <SectionB sectionId="cadastrar" title="Cadastro Aluno" sectionContent={<RegisterStudent addFn={AddFn} />} background="grey" />

     <SectionB sectionId="lista_alunos" title="Lista de Alunos" sectionContent={<StudentsTable tableData={tableData} deleteFn={DeleteFn} />} background="white" />

     <FooterComponent >Powered by Mach1 - Pilotando para o futuro!</FooterComponent>
    </div>
  );
}

export default App;
