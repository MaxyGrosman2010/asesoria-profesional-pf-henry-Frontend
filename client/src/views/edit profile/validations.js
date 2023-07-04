const validationsEdit = (edit) => {
    const errors = {};
    if(!edit.name){
        errors.name = 'Required'
    }

    if(!edit.password){
        errors.password = 'Required'
    }

    if(!edit.repeatPassword){
        errors.repeatPassword = 'Required'
    }

    if(!edit.cellphone){
        errors.cellphone = 'Required'
    }

    if(!edit.email){
        errors.email = 'Required'
    }

    if(!edit.picture){
        errors.picture = 'Required'
    }



    return errors;
}

export default validationsEdit;


