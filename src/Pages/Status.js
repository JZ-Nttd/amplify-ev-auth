import React, {useState, useContext, useEffect } from "react";
import {AccountContext} from "./Account";


const Status = () => { 
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => { 
        alert("Trying to get the session");
        getSession()
        .then((session) => {
            console.log("Session: ", session);
            setStatus(true);
        });
    }, []);

    return (<div style={{fontSize: "24px" }}>
            {status ? <button onClick={logout}>logout</button>: "Please Login!!"}
    </div>);
};

export default Status;