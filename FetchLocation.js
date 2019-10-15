import React from 'react'
import { Button, Alert } from 'react-native'

const fetchLocation = props => {
return(
<Button title='Retrieve Location' color='white' onPress={() => Alert.alert('Unable to Retrieve Location')}/>
)
}


export default fetchLocation