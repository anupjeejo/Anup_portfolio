export const validateFormData = (value: unknown, maxLen: number) => {
    if(!value || typeof value !== "string" || value.length > maxLen) 
        return false;
    return true;
}

export const getErrorMsg = (error: unknown) => {
    let errorMsg: string;

    if(error instanceof Error){
        errorMsg = error.message;
    }
    else if(error && typeof error === 'object' && 'message' in error){
        errorMsg = String(error.message);
    } 
    else if(typeof error === "string"){
        errorMsg = error;
    }
    else{
        errorMsg = "Something went wrong";
    }

    return errorMsg;
}