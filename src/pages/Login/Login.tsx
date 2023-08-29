import { Box, Tabs, Tab, Typography} from "@mui/material"
import React from "react"
import LoginForm from "../../components/form/LoginForm";
import SignUpForm from "../../components/form/SignUpForm";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function TabProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Login () {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
        <Box
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
        >
            <Box sx={{
                width: 300,
                height: 500,
                bgcolor: "pink",
            }}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider'
                }}>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="login">
                        <Tab label="Log In" {...TabProps(0)} />
                        <Tab label="Sign Up" {...TabProps(1)} />
                </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <LoginForm />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <SignUpForm />
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

export default Login