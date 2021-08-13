export const validateMessage = {
    int: "Only number required",
    intLengthAtleastOne: "Minimum 1 number required",
    intLength: "Minimum 3 number required",
    yearLengthValidate: "Minimum 4 number required",
    yearExistValidate: "valid year required in between 1900 and current",
    string: "Minimum 3 characaters required",
    boolean: "Only boolean required",
    datetime: "Only date in the format 'dd/mm/yyyy' required",
    issueDateValidate: "Issue date should be less than or equal to currrent date",
    expDateValidate: "Exp date data should be greater than issue date",
    float: "Only decimal/float required",
    maxTyreCountlengthValidate: "Maximium 20 required",
    maxExleCountlengthValidate: "Maximium 10 required",
    maxSeatingCapacitylengthValidate: "Maximium 100 required",
    passwordValidate: "Requires at least 8 characters, max 15, 1 lower case, 1 upper case, 1 numeric, 1 non-word and no whitespace",
    confirmNewPasswordValidate: "Confirm password does not match with new password",
    newPasswordValidate: "New password should not match with old password",
}

export const alertMessageType = {
    error: "error",
    warning: "warning",
    info: "info",
    success: "success"
}

export const pageSize = 100000;
export const timeToRedirect = 3000;
export const commonBadRequestMessage = "Bad Request, something is wrong in payload. Please check";
export const commonFetchSuccessMessage = "Data Fetched Successfuly";

