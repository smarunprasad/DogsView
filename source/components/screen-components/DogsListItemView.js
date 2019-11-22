import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles, colors, customFontFamily } from '../../styles/StyleSheet';

export default class DogsListItemView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, onClickItem } = this.props;
        return (
            <TouchableOpacity style={styles.dogsListItemViewContainer}
                activeOpacity={1}
                onPress={onClickItem}>
                <View>
                    <Text style={[
                      styles.dogsListItemText,
                      customFontFamily.regular.regular,
                    ]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
