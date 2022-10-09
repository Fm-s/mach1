const CpfStrip = (cpf) => {
    const striped = cpf.toString().replace(/\D/g,"");
    if ( striped.length !== 11 ) return "00000000000";
    return striped
}

const TestaCPF = (strCPF) => {
    var Soma;
    var Resto;
    Soma = 0;   
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    strCPF = CpfStrip(strCPF);
    //
    if (strCPF === "00000000000")
	return false;
    for (let i=1; i<=9; i++)
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) 
	Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)) )
	return false;
	Soma = 0;
    for (let i = 1; i <= 10; i++)
       Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) 
	Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11) ) )
        return false;
    return true;
}

export default TestaCPF;