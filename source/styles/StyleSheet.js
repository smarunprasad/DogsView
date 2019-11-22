import { StyleSheet, Dimensions } from 'react-native'

const dimensions = Dimensions.get('window');

export const colors = {
    //App
    primary: '#0022F5',
    white: '#ffffff',
    black: '#000000',
    DarkGray: '#424242',
    gray: '#CCCCCC',
    seperator: '#e1e1e1e1'
}

export const styles = StyleSheet.create({

    containerPadding12: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 50,
        backgroundColor: colors.primary
    },
    containerPadding8: {
        flex: 1,
        padding: 8,
        backgroundColor: colors.primary
    },
    dogsListItemViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: colors.seperator,
        borderRadius: 20,
        marginTop: 12,
        paddingLeft: 20,
        backgroundColor: colors.white
    },
    breedTitleTextPadding: {
        paddingBottom: 4,
        paddingHorizontal: 20,
        color: colors.white,
        textAlign: 'center'

    },
    breedImagePadding: {
        marginTop: 20,
        width: dimensions.width * .7,
        height: dimensions.width * .6,
        borderRadius: 8,
    },
    activityIndicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noDataAlertContainer: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dogsListItemText: {
        paddingVertical: 15,
        color: colors.black,
    },
})


export const fonts = {

    thin: { fontWeight: '100' }, // thin
    ultra_light: { fontWeight: '200' }, // Ultra Light
    light: { fontWeight: '300' }, // Light
    regular: { fontWeight: '400' }, // Regular
    medium: { fontWeight: '500' }, // Medium
    semi_bold: { fontWeight: '600' }, // Semibold
    bold: { fontWeight: '700' }, // Bold
    heavy: { fontWeight: '800' }, // Heavy
}

export const fontSizes = {
    xxlarge: { fontSize: 38 },
    xlarge: { fontSize: 30 },
    large: { fontSize: 20 },
    medium: { fontSize: 18 },
    regular: { fontSize: 14 },
    small: { fontSize: 12 },
    xsmall: { fontSize: 10 }
}

export const customFontFamily = {
    bold: {
        xxlarge: {
            ...fonts.bold,
            ...fontSizes.xxlarge,
        },
        xlarge: {
            ...fonts.bold,
            ...fontSizes.xlarge,
        },
        large: {
            ...fonts.bold,
            ...fontSizes.large,
        },
        medium: {
            ...fonts.bold,
            ...fontSizes.medium,
        },
        regular: {
            ...fonts.bold,
            ...fontSizes.regular,
        },
        small: {
            ...fonts.bold,
            ...fontSizes.small,
        },
        xsmall: {
            ...fonts.bold,
            ...fontSizes.xsmall,
        }
    },
    semi_bold: {
        xxlarge: {
            ...fonts.semi_bold,
            ...fontSizes.xxlarge,
        },
        xlarge: {
            ...fonts.semi_bold,
            ...fontSizes.xlarge,
        },
        large: {
            ...fonts.semi_bold,
            ...fontSizes.large,
        },
        medium: {
            ...fonts.semi_bold,
            ...fontSizes.medium,
        },
        regular: {
            ...fonts.semi_bold,
            ...fontSizes.regular,
        },
        small: {
            ...fonts.semi_bold,
            ...fontSizes.small,
        },
        xsmall: {
            ...fonts.semi_bold,
            ...fontSizes.xsmall,
        }
    },
    medium: {
        xxlarge: {
            ...fonts.medium,
            ...fontSizes.xxlarge,
        },
        xlarge: {
            ...fonts.medium,
            ...fontSizes.xlarge,
        },
        large: {
            ...fonts.medium,
            ...fontSizes.large,
        },
        medium: {
            ...fonts.medium,
            ...fontSizes.medium,
        },
        regular: {
            ...fonts.medium,
            ...fontSizes.regular,
        },
        small: {
            ...fonts.medium,
            ...fontSizes.small,
        },
        xsmall: {
            ...fonts.medium,
            ...fontSizes.xsmall,
        }
    },
    regular: {
        xxlarge: {
            ...fonts.regular,
            ...fontSizes.xxlarge,
        },
        xlarge: {
            ...fonts.regular,
            ...fontSizes.xlarge,
        },
        large: {
            ...fonts.regular,
            ...fontSizes.large,
        },
        medium: {
            ...fonts.regular,
            ...fontSizes.medium,
        },
        regular: {
            ...fonts.regular,
            ...fontSizes.regular,
        },
        small: {
            ...fonts.regular,
            ...fontSizes.small,
        },
        xsmall: {
              ...fonts.regular,
              ...fontSizes.xsmall,
          }
    },
    light: {
        xxlarge: {
            ...fonts.light,
            ...fontSizes.xxlarge,
        },
        xlarge: {
            ...fonts.light,
            ...fontSizes.xlarge,
        },
        large: {
            ...fonts.light,
            ...fontSizes.large,
        },
        medium: {
            ...fonts.light,
            ...fontSizes.medium,
        },
        regular: {
            ...fonts.light,
            ...fontSizes.regular,
        },
        small: {
            ...fonts.light,
            ...fontSizes.small,
        },
        xsmall: {
            ...fonts.light,
            ...fontSizes.xsmall,
        }
    }
}