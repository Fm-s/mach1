const SaveToLocal = (entry) => {
    localStorage.setItem("studentData", JSON.stringify(entry));
}

const GetFromLocal = () => {
    return JSON.parse(localStorage.getItem("studentData"));
}

const LocalDatabase = () => {
    
    const GetFromDatabase = () => {

        const localData = GetFromLocal();
        
        if(typeof localData == "object" && localData !== null) {
            if(localData.length > 0) {
                return localData;
            }
        }
        return [];
    }

    const SaveToDatabase = (newEntry) => {
        const localData = GetFromDatabase();
        const obj = {success: true, errorMsg: {}};

        if(localData.length > 0) {
            
            localData.forEach(element => {
                if(element.email.toLowerCase() === newEntry.email.toLowerCase()){
                    obj.success = false;
                    obj.errorMsg.email = "E-mail já esta em uso";
                }
                if (element.cpf === newEntry.cpf) {
                    obj.success = false;
                    obj.errorMsg.cpf = "CPF já esta cadastrado";
                }
            });
        }

        if(obj.success){
            localData.push(newEntry);
            SaveToLocal(localData);
        }

        return obj;
    }
    
    const DeleteEntry = (index) => {
        const localData = GetFromDatabase();
        localData.splice(index,1)
        SaveToLocal(localData);
    }

    return {getData: GetFromDatabase, saveEntry: SaveToDatabase, deleteEntry: DeleteEntry};
}

export default LocalDatabase;