import { useState } from "react";

function Validations() {
    const [numbers, setNumbers] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");

    //Mobile Number Validation
    const numbersValidation = () => {
        let re = /^[0-9]+$/;
        if (re.test(numbers)) {
            console.log("valid")
        } else {
            console.log("Enter Valid numbers [0-9]")
        }

    }

    //email validation
    const emailValidation = () => {
        let re = /^[A-Za-z0-9.-_]+@[A-Za-z]+\.[A-Z-a-z]{2,}$/;
        if (re.test(email)) {
            console.log("email valid")
        } else {
            console.log("not Valid email")
        }


    }

    //mobileNumber Validation
    const mobileValidation = () => {
        let re = /^[0-9]{10}$/;
        if (re.test(mobile)) {
            console.log("valid mobile number");
        } else {
            console.log("not a valid mobile number");
        }
    }

    //NameValidation
    const nameValidation = () => {
        let re = /^[A-Za-z]+$/
        if (re.test(name)) {
            console.log("valid name")
        } else {
            console.log("not valid name")
        }
    }

    return (
        <div>
            <input onChange={(e) => setNumbers(e.target.value)} value={numbers}></input>
            <button onClick={numbersValidation}>number</button>

            <input onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <button onClick={emailValidation}>email</button>

            <input onChange={(e) => setMobile(e.target.value)} value={mobile}></input>
            <button onClick={mobileValidation}>mobile</button>

            <input onChange={(e) => setName(e.target.value)} value={name}></input>
            <button onClick={nameValidation}>name</button>
        </div>
    )

}
export default Validations;