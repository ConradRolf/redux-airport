import React, { useState } from 'react';

function AirlineList(props){

    const [airlineList, setAirlineList] = useState([])

    return(
        <div key={airlineList.i}>
        {airlineList.map(airline => (
          <li>{airline}</li>
        ))}
        </div>
    )
}

