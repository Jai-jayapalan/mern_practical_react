import React from "react";
import { useState } from "react";

const BankForm = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setdob] = useState('');
    const [occupation, setOccupations] = useState('');
    const [income, setIncome] = useState('');
    
    const formHandler=(event)=>{
        event.preventDefault();
        console.log('Name: ',name);
        console.log('Email: ',email);
        console.log('Dob: ',dob);
        console.log('Address: ',address);
        console.log('phone number: ',phoneNumber);
        console.log('Occupation: ',occupation);
        console.log('Income: ',income);

        setName('')
        setdob('')
        setEmail('')
        setPhoneNumber('')
        setIncome('')
        setOccupations('')
        setAddress('')

    }

    return(
        <div className="container">
            <div className="content">
                <h3>Bank Account Creation</h3>
                <form onSubmit={formHandler}>
                    <div className="field" style={{marginTop:'20px'}}>
                        <label for="fullName">FullName</label>
                        <input 
                        type="text" 
                        name="fullName" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className="field">
                        <label for="dob">D.O.B</label>
                        <input 
                        type="date" 
                        name="dob" 
                        value={dob}
                        onChange={(e)=>setdob(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className="field">
                        <label for="address">Address</label>
                        <input 
                        type="text" 
                        name="address" 
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className="field">
                        <label for="phone">Phone number</label>
                        <input 
                        type="number"
                        name="Phone number"
                        value={phoneNumber}
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className="field">
                        <label for="email">Email Address</label>
                        <input 
                        type="email"  
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className="field">
                        <label for="occ">Occupations</label>
                        <input 
                        type="text" n
                        ame="occ" 
                        value={occupation}
                        onChange={(e)=>setOccupations(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className="field">
                        <label for="income">Income</label>
                        <input 
                        type="number"
                        name="income"
                        value={income}
                        onChange={(e)=>setIncome(e.target.value)}
                        required={true}
                        />
                    </div>
                    <div className="field">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BankForm