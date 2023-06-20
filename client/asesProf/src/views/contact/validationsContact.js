const validationsContact = (form) => {
    const errors = {};

    if(!form.name){
        errors.name = 'Required'
    }

    if(!form.email){
        errors.email = 'Required'
    }

    if(!form.message){
        errors.message = 'Required'
    }


    return errors;
}

export default validationsContact;