import React from 'react';

const Person = (props) => {

    const {role, name,age, country, contributionValue, img} = props.person || {}

    console.log(props.person);
    return (
        <div className="col-md-4 g-4">
            <div className="bg-secondary text-white card h-100">
                <div className="d-flex justify-content-center p-3">
                <img src= {img} className="card-img-top" style={{"width":"200px", "height": "200px", "borderRadius": "50%"}} alt="..."/>
                </div>
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text"><b>Role:</b> {role}</p>
                <p className="card-text"><b>Age:</b> {age}</p>
                <p className="card-text"><b>Country:</b> {country}</p>
                <p className="card-text"><b>Contribution Value:</b> £{contributionValue}</p>
            </div>
            <div className="card-footer d-flex justify-content-end">
            <button 
            onClick={()=>props.handleAddPerson(props.person)}
            className="btn btn-warning text-white"><i className="fas fa-user-circle"></i> Add to Cart</button>
            </div>
            </div>
        </div>
    );
};

export default Person;