import React from 'react'
import {View, Text} from 'react-native'
import {colors} from '../../../styles/StyleSheet'

export default class NoDataAlertView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ 
                flex: 1, 
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent:'center'
            }}>
               <Text style={{color: colors.gray, textAlign: 'center'}}>{this.props.noDataText}</Text>
            </View>
        )
    }
}
