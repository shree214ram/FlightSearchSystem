import React, { useState, Fragment, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import "./styles/styles.css"

const MendatorySpan = ({ specificClassName
}) => {
    // Handle components
    return (
        <Fragment >
            <Grid className={specificClassName && specificClassName !== "" ? specificClassName : ""} container spacing={4} xs={12} sm={10} justify="center" noValidate>
                <Grid item xs={12} sm={12}>
                    <span className="starFielldMendat">Any one field is mendatory.</span>
                </Grid>
            </Grid>
        </Fragment>

    )
}

export default MendatorySpan
