import React, { useEffect, useState } from 'react';
import axios from "axios";

function User() {
    const [mail,setMail] = useState("");
    const [Pass,setPass] = useState("");
    // console.log(mail,Pass)
    const [flag,SetFlag] = useState(false)
    const handleClick = async (e) => {
        if (e != null) {
            e.preventDefault();
        }
        var {data} = await axios.post("http://localhost:4000/users/login", {
            email: mail,
            password: Pass,
        })
        console.log(data.users);
        if (data.users) {
            SetFlag(true)
            const timer = setInterval(()=> {
                
                if (true) {
                    SetFlag(false);
                    setMail("");
                    setPass("");
                    clearInterval(timer);
                    return;
                }
            },5000)
        }
        else {
            SetFlag(false);
        }
    }
    
    useEffect(() => {
        handleClick();
    },[flag])

    return (

        <div>
            <form action="">
                <input type="email" name="" id="" onChange={(e) => {
                    setMail(e.target.value);
                }} />
                <input type="password" name="" id="" onChange={(e) => {
                    setPass(e.target.value);
                }} />
                <input type="submit" value="submit" name="" id="" onClick={handleClick} />
            </form>
            {flag? <h1>login successfull</h1>: <h2>Invalid credential</h2>}
        </div>
    )
}

export default User
