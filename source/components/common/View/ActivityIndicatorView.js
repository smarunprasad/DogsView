import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors } from '../../../styles/StyleSheet'

export default class ActivityIndicatorView extends React.Component {

    render() {
        return (
            <View style={{ 
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center' }}>
                <ActivityIndicator animating={true} size="large" color={colors.primary} />
            </View>
        )
    }
}
