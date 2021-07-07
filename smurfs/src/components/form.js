import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions/index';


const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState(
            {
                name: '',
                age: 0,
                height: '',
                id: 0
            }
);
    // console.log(props.smurf)
    //used age variale to change age string into number.
    let age = Number(newSmurf.age);
    let height = (newSmurf.height+'cm')

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewSmurf({ ...newSmurf, id: Date.now()})
        props.addNewSmurf({...newSmurf, age: age, height: height})
    }

    const handleChanges = (e) => {
        let name = e.target.name;
        setNewSmurf({ ...newSmurf, [name]: e.target.value})
    }
    // console.log(newSmurf)

    return (
        <div>
            <form>
                <input name='name' type='text' placeholder='Name' onChange={handleChanges}/>
                <input name='age' type='number' placeholder='Age' onChange={handleChanges}/>
                <input name='height' type='text' placeholder='Height' onChange={handleChanges}/>
                <input type='submit' value='New Smurf' onClick={handleSubmit}/>
                <input type="reset"></input>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      smurf: state.smurf
    };
  };

export default connect(mapStateToProps,
    { addNewSmurf }
)(SmurfForm);


