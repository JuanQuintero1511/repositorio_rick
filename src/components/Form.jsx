import { useState } from "react"
import validation from "./Validation/Validation"

const Form = () => {
    const [errors, setErrors] = useState ({})
    const [userData, serUserData] = useState ({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData ({
            ...userData,
            [event.target.name]: event.target.value
        })
        
        const validateErrors = validation({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validateErrors)
    }

    const handleSubmit = (event) => {
        event.prevenDefault ();
        login(userData);
    }   

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name ='email'type="text" value={userData.email} onChange={handleChange}/>
            {error.email && <p>{errors.email}</p>}
            <label htmlFor="Password">Password</label>
            <input name = 'password'type="text" value={userData.password} onChange={handleChange}/>
            {error.password && <p>{errors.password}</p>}
        </form>
    )
}