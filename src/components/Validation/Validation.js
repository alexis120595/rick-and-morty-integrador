const validation = (userData)=> {

const errors = {};

if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test( userData.email )) {

    errors.email = "el email no es valido"; 


}

if(!userData.email){

    errors.email = "debe ingresar un mail";

}

if ( userData.email.lenght > 35 ) {

    errors.email = "el email es muy largo"
    
}

if(!/.*\d+.*/.test(userData.password)) {

    errors.password = "la password debe contener un numero";
}

if(userData.password.lenght < 6 && userData.password.lenght > 10) {

    errors.password = " la password debe tener un minimo de 6 caractees y un maximo de 10 caracteres "

}

return errors;


}

export default validation; 