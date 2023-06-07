import React, { useState } from 'react';

function AirlineForm(props){

    

return(
        <div>
            <form>
                <input placeholder='Airline Name' />
                <button>Add Airline</button>
            </form>
            <ul>
                <AirlineList />
            </ul>
        </div>
    )
}