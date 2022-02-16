import React from 'react';
import {Box, makeStyles} from '@material-ui/core'
import logo from '../Assets/w1.png'

const useStyles1 = makeStyles({
    component:{
        height :'100vh',
        display:'flex',
        alignItems : 'center',
        width : '65%',
        margin : '0 auto',  
    }
})

const useStyles2 = makeStyles({
    leftContainer :{

        backgroundImage: `url(${logo})`,
        height : '80%',
        width : '30%',
        backgroundSize : 'cover',
        borderRadius : '20px 0px 0px 20px'
    }
})

const useStyles3 = makeStyles({
    rightContainer:{
        background :'linear-gradient(to right , #e74c3c , #e67e22)',
        height:'80%',
        width : '70%'
    }
})


const Forecast = () => {
  
    return (
        <Box className={useStyles1.component}>
        <Box className={useStyles2.leftContainer}>

        </Box>
        <Box className = {useStyles3.rightContainer}>
        </Box>
        
        </Box>
    );
}

export default Forecast;