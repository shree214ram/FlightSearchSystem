import React, { useState, Fragment, useEffect } from "react"

import '../Styles/Styles.css'
import Details from "./Details"

import { validateMessage } from '../../../../constants/common-constants'
import MendatorySpan from "../../../CommonComponents/MendatorySpan/MendatorySpan"

const onlyDateValidate = RegExp(/^((19|20)?[0-9]{2}[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|[1-3][0-9]))*$/)
//yyyy/mm/dd


const SearchFlights = ({
  saveFlightsSearch,  
  sourceDestinationCities,
  values,
  vehicleId
}) => {
  const [fields, setFields] = useState({
    source_city: "",
    destination_city: "",
    travel_date: "",
    return_date: "",
  })

  //fill the form in error mode
  const filtered = Object.keys(fields)
    .filter(key => !(typeof fields[key] === "boolean" || fields[key] === ""))
    .reduce((obj, key) => {
      obj[key] = fields[key];
      return obj;
    }, {});

  if (values !== null &&
    filtered // null and undefined check
    && Object.keys(filtered).length === 0 && filtered.constructor === Object
  ) {
    // setSteps(lastSteps)
    setFields({
      ...values,
    })
  }

  // Copy fields as they all have the same name
  const [filedError, setFieldError] = useState({
    ...fields
  })

  const [isError, setIsError] = useState(false)

  //save register 
  const submitFlightsSearch = () => {
    // submit form fields of register
    saveFlightsSearch(fields);
  }

  const handleChangeAutoComplete = (input, value) => {
    // Set values to the fields
    setFields({
      ...fields,
      [input]: value,
    });
  };


  const handleChangeSwitch = input => ({ target: { checked } }) => {
    // Set checked to the radio (boolean) fields
    setFields({
      ...fields,
      [input]: checked
    })
    const formErrors = { ...filedError }

    // set error hook
    Object.values(formErrors).forEach(error =>
      error.length > 0 ? setIsError(true) : setIsError(false)
    )
    // set errors hook
    setFieldError({
      ...formErrors
    })
  }

  // Handle fields change
  const handleChange = input => ({ target: { value } }) => {
    // Set values to the fields
    setFields({
      ...fields,
      [input]: value
    })

    // Handle validations cases errors
    const formErrors = { ...filedError }
    const lengthValidate = value.length > 0 && value.length < 3
    var today = new Date();
    var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const issueDateValidate = () => {
      var d1 = new Date(value);
      var d2 = new Date(currentDate);
      return d1.getTime() <= d2.getTime()
    }
    const expDateValidate = currentKey => {
      var d1 = new Date(value);
      var d2 = new Date(fields[currentKey]);
      return d1.getTime() > d2.getTime()
    }

    
    switch (input) {
      case 'source_city':
        formErrors.source_city = lengthValidate
          ? validateMessage['string']
          : '';
        break;
      case 'destination_city':
        formErrors.destination_city = lengthValidate
          ? validateMessage['string']
          : '';
      case "regIssueDate":
        formErrors.regIssueDate = !onlyDateValidate.test(value) ? validateMessage['datetime'] : !issueDateValidate()
          ? validateMessage['issueDateValidate']
          : ""
        break
      case "regExpDate":
        formErrors.regExpDate = !onlyDateValidate.test(value) ? validateMessage['datetime'] : !expDateValidate("regIssueDate")
          ? validateMessage['expDateValidate']
          : ""
        break
      default:
        break
    }

    // set error hook
    Object.values(formErrors).forEach(error =>
      error.length > 0 ? setIsError(true) : setIsError(false)
    )
    // set errors hook
    setFieldError({
      ...formErrors
    })
  }
  //check any thing missing in form for enable next button / Check if all errors are  empty
  const fieldsErrorCheck = filedError;
  const filteredForError = Object.keys(fieldsErrorCheck)
    .filter(key => !(typeof fieldsErrorCheck[key] === "boolean" || fieldsErrorCheck[key] === ""))
    .reduce((obj, key) => {
      obj[key] = fieldsErrorCheck[key];
      return obj;
    }, {});
  let errorFixed = false
  if (filedError !== null &&
    filteredForError // null and undefined check
    && Object.keys(filteredForError).length === 0 && filteredForError.constructor === Object
  ) {
    errorFixed = true
  }
  
  
  // Handle components
  return (
    <Fragment>
          <Fragment>
            <MendatorySpan specificClassName={"MendatorySpanForChangePass"}/>
            <Details
            sourceDestinationCities={sourceDestinationCities}
            handleChange={handleChange}
            handleChangeSwitch={handleChangeSwitch}
            handleChangeAutoComplete={handleChangeAutoComplete}
            values={fields}
            isError={isError}
            filedError={filedError}
            errorFixed={errorFixed}
            vehicleId={vehicleId}
            saveFlightsSearch={submitFlightsSearch}
          />
          
          </Fragment>
    </Fragment>
  )
}

export default SearchFlights


