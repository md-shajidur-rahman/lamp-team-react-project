import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';

const Body = () => {

    const [persons, setPersons] = useState([]);

    // state declaration for cart

    const [cart, setCart] = useState([]);

    const handleAddPerson = (person) => {
        const newCart = [...cart, person];
        setCart(newCart)
    }

    useEffect( () => {
        fetch('/lampTeamData.json')
        .then(res => res.json())
        .then(data => setPersons(data));
    } , [])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            persons.map(person => 
                            <Person
                            key={person.id}
                            person={person}
                            handleAddPerson={handleAddPerson}
                            >

                            </Person> )
                        }
           
                    </div>
                </div>
                <div className="col-md-3">
                   <Cart
                   cart ={cart}
                   >

                   </Cart>
                </div>
            </div>
        </div>
    );
};

export default Body;