import React, { useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

export const Forecast = () => {

    const locationKey = '71690_PC';
    const apiKey = 'XgyYKEGy7ri2QTcDgv1wgzzU0524lUNr';

    useEffect(() => {
        fetch(
            'http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apiKey}'
            )
            .then( res => res.json())
            .then(res => console.log(res));
    }, 
    []);

    return (<>
        Working!
    </>
    );
}

export default Forecast;