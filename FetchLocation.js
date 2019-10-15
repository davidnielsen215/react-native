import React from 'react'
import { Button } from 'react-native'

const fetchLocation = props => {
return(
<Button title='Retrieve Location' color='white' onPress={props.getLocation}/>
)
}


export default fetchLocation