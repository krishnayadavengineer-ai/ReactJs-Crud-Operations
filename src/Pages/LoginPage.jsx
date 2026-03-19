import React from 'react'

const LoginPage = () => {
    const handleKeyPress = (e) => {
        if (e.charCode < 48 || e.charCode > 57) {
            e.preventDefault();
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }
    

    return (
        <div>
            <input type='text' onKeyPress={handleKeyPress} onChange={handleChange} name='val'></input>
        </div>
    )


}

export default LoginPage;
