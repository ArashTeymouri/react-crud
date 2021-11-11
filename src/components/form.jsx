import { useState } from "react";

const Form = ({data , setData}) => {

    const [nameValue , setNameValue] = useState("");
    const [familyValue , setFamilyValue] = useState("");
    const [emailValue , setEmailValue] = useState("");
    const [phoneValue , setPhoneValue] = useState("");

    function submit(e){
        e.preventDefault();

        const newUser = {
            name: nameValue,
            family: familyValue,
            email: emailValue,
            phone: phoneValue
        }

        let newData = [...data];
        newData.push(newUser);
        setData(newData);
    }

    return(
        <form onSubmit={submit} id="form" className="form">

                    <div className="form-controls">
                        <label htmlFor="name">نام</label>
                        <input onChange={(e) => setNameValue(e.target.value)} type="text" id="name" style={{direction: "rtl"}} />
                        <small></small>
                    </div>

                    <div className="form-controls">
                        <label htmlFor="family"> نام خانوادگی</label>
                        <input onChange={(e) => setFamilyValue(e.target.value)} type="text" id="family" style={{direction: "rtl"}} />
                        <small></small>
                    </div>


                    <div className="form-controls">
                        <label htmlFor="email">ایمیل</label>
                        <input onChange={(e) => setEmailValue(e.target.value)} type="text" id="email" />
                        <small></small>
                    </div>

                    <div className="form-controls">
                        <label htmlFor="phone">شماره تلفن</label>
                        <input onChange={(e) => setPhoneValue(e.target.value)} type="text" id="phone" />
                        <small></small>
                    </div>
                    <button id="button" type="submit">عضویت</button>
                </form>
    )
}

export default Form;