import React from 'react'
import { View, Text } from 'react-native'
import { colors, styles } from '../../../styles/StyleSheet'

export default class NoDataAlertView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.noDataAlertContainer}>
                <Text style={{ color: colors.gray, textAlign: 'center' }}>{this.props.noDataText}</Text>
            </View>
        )
    }
}
