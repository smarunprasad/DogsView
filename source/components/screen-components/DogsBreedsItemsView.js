import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../../styles/StyleSheet';

export default class DogsBreedsItemView extends React.Component {
    constructor(props) {
       super(props);
    }

    render() {
        const { firstImageurl, secondImageurl } = this.props;
        return (
            <View style={{ alignItems: 'center' }}>
                {/* Load two images from the urlString */}
                <Image style={[styles.breedImagePadding]}
                    source={{ uri: firstImageurl }}
                />
                <Image style={[styles.breedImagePadding]}
                    source={{ uri: secondImageurl }}
                />
            </View>
        );
    }
}
