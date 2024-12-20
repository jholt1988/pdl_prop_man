export const idParameterValidator = async ({params}) => {
    
    const details = await params
   
    const { id } =  details

console.log(id)
    const idParams = Number( id);
    if (Number.isNaN(idParams)) {
        return { isValid: false, errorMessage: `${params.id} is not a number` };
    }
    return { isValid: true };
}

