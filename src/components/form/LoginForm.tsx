// Login form
// Contains:
// Username/Email and Password

// Tell user that it is invalid AFTER pushing the login button if it is not working.
import { TextField, Button } from "@mui/material"
import React from "react"

function LoginForm () {

    return (
        <>
            <TextField id="outlined" label="Username" />
            <TextField id="outlined" label="Password" />
            <Button variant="text">Log In</Button>
        </>

    )
}

export default LoginForm