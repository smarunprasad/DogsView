import { StyleSheet } from 'react-native'

export const colors = {
  //App
  primary: '#00C6B7',
  white: '#ffffff',
  black: '#000000',
  DarkGray: '#424242',
  gray: '#CCCCCC',
  seperator: '#e1e1e1e1'
}

export const styles = StyleSheet.create({

    containerPadding12: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.white
    },
    containerPadding8: {
      flex: 1,
      padding: 8,
      backgroundColor: colors.white
  },
    setting: {
        paddingVertical: 15
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
    xxlarge: { fontSize: 40 },
    xlarge: { fontSize: 32 },
    large: { fontSize: 22 },
    medium: { fontSize: 18 },
    regular: { fontSize: 16 },
    small: { fontSize: 14 },
    xsmall: { fontSize: 12 }
  }
  
  export const customFontFamily = {
    bold: {
      xxlarge: {
        ...fonts.bold,
        ...fontSizes.xxlarge,
        color: colors.black
      },
      xlarge: {
        ...fonts.bold,
        ...fontSizes.xlarge,
        color: colors.black
      },
      large: {
        ...fonts.bold,
        ...fontSizes.large,
        color: colors.black
      },
      medium: {
        ...fonts.bold,
        ...fontSizes.medium,
        color: colors.black
      },
      regular: {
        ...fonts.bold,
        ...fontSizes.regular,
        color: colors.black
      },
      small: {
        ...fonts.bold,
        ...fontSizes.small,
        color: colors.black
      },
      xsmall: {
        ...fonts.bold,
        ...fontSizes.xsmall,
        color: colors.black
      }
    },
    semi_bold: {
      xxlarge: {
        ...fonts.semi_bold,
        ...fontSizes.xxlarge,
        color: colors.black
      },
      xlarge: {
        ...fonts.semi_bold,
        ...fontSizes.xlarge,
        color: colors.black
      },
      large: {
        ...fonts.semi_bold,
        ...fontSizes.large,
        color: colors.black
      },
      medium: {
        ...fonts.semi_bold,
        ...fontSizes.medium,
        color: colors.black
      },
      regular: {
        ...fonts.semi_bold,
        ...fontSizes.regular,
        color: colors.black
      },
      small: {
        ...fonts.semi_bold,
        ...fontSizes.small,
        color: colors.black
      },
      xsmall: {
        ...fonts.semi_bold,
        ...fontSizes.xsmall,
        color: colors.black
      }
    },
    medium: {
      xxlarge: {
        ...fonts.medium,
        ...fontSizes.xxlarge,
        color: colors.black
      },
      xlarge: {
        ...fonts.medium,
        ...fontSizes.xlarge,
        color: colors.black
      },
      large: {
        ...fonts.medium,
        ...fontSizes.large,
        color: colors.black
      },
      medium: {
        ...fonts.medium,
        ...fontSizes.medium,
        color: colors.black
      },
      regular: {
        ...fonts.medium,
        ...fontSizes.regular,
        color: colors.black
      },
      small: {
        ...fonts.medium,
        ...fontSizes.small,
        color: colors.black
      },
      xsmall: {
        ...fonts.medium,
        ...fontSizes.xsmall,
        color: colors.black
      }
    },
    regular: {
      xxlarge: {
        ...fonts.regular,
        ...fontSizes.xxlarge,
        color: colors.black
      },
      xlarge: {
        ...fonts.regular,
        ...fontSizes.xlarge,
        color: colors.black
      },
      large: {
        ...fonts.regular,
        ...fontSizes.large,
        color: colors.black
      },
      medium: {
        ...fonts.regular,
        ...fontSizes.medium,
        color: colors.black
      },
      regular: {
        ...fonts.regular,
        ...fontSizes.regular,
        color: colors.black
      },
      small: {
        ...fonts.regular,
        ...fontSizes.small,
        color: colors.black
      },
      xsmall: {
        ...fonts.regular,
        ...fontSizes.xsmall,
        color: colors.black
      }
    },
    light: {
      xxlarge: {
        ...fonts.light,
        ...fontSizes.xxlarge,
        color: colors.black
      },
      xlarge: {
        ...fonts.light,
        ...fontSizes.xlarge,
        color: colors.black
      },
      large: {
        ...fonts.light,
        ...fontSizes.large,
        color: colors.black
      },
      medium: {
        ...fonts.light,
        ...fontSizes.medium,
        color: colors.black
      },
      regular: {
        ...fonts.light,
        ...fontSizes.regular,
        color: colors.black
      },
      small: {
        ...fonts.light,
        ...fontSizes.small,
        color: colors.black
      },
      xsmall: {
        ...fonts.light,
        ...fontSizes.xsmall,
        color: colors.black
      }
    }
  }