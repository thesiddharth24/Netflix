

const  FormValidation = (Email , Password) => {
  

    const isvalidEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(Email);

    const isValidPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/.test(Password);

    if(!isvalidEmail)
        return "Email is not valid!!";
    
    if(!isValidPassword) return "Password is not valid!!";


    else 
        return null;
}

export default FormValidation