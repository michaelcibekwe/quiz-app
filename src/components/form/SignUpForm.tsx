// Sign up:

// Contains:
// First and Last Name, Password, Email and confirms password.
import { Button, TextField } from "@mui/material"
import React from "react"

function SignUpForm () {

    return (
        <>
        <TextField id="outlined" label="Username" />
        <TextField id="outlined" label="E-mail" />
        <TextField id="outlined" label="Password" />
        <TextField id="outlined" label="Confirm Password" />
        <Button variant="text">Sign Up</Button>
        </>
    )
}

export default SignUpForm