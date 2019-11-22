import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors, styles } from '../../../styles/StyleSheet'

export default class ActivityIndicatorView extends React.Component {

    render() {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true} size="large" color={colors.primary} />
            </View>
        )
    }
}
