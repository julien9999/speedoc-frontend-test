import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../../../../config/Theme.config';
import {dimensions} from '../../../../config/Dimension.config';
interface Style {
  wrapper: ViewStyle;
  container: ViewStyle;
  switchContainer: ViewStyle;
  section: ViewStyle;
  action: ViewStyle;
  actionButton: ViewStyle;
  backdrop: ViewStyle;
  listSymptomChip: ViewStyle;
  selectedSymptomChip: ViewStyle;
  containerBottomSheet: ViewStyle;
  bottomSheetInputContainer: ViewStyle;
  bottomSheetTitle: TextStyle;
  bottomSheetSubtitle: TextStyle;
  actionButtonBottomSheet: ViewStyle;
  bottomSheetInput: ViewStyle;
}

const getStyles = (theme?: ITheme) => {
  return StyleSheet.create<Style>({
    wrapper: {
      backgroundColor: theme?.colors.surface,
      flex: 1,
    },
    container: {
      flex: 1,
    },
    containerBottomSheet: {
      flex: 1,
    },
    bottomSheetInputContainer: {marginHorizontal: 16, marginTop: 8},
    bottomSheetTitle: {fontWeight: '600', fontSize: 18},
    bottomSheetSubtitle: {letterSpacing: 0.5, color: theme.colors.text},
    bottomSheetInput: {
      backgroundColor: theme.colors.primarySoft,
    },
    actionButtonBottomSheet: {
      justifyContent: 'center',
    },
    switchContainer: {
      alignSelf: 'center',
    },
    section: {
      marginHorizontal: 16,
      marginTop: 16,
    },
    action: {
      margin: 16,
    },
    actionButton: {
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: theme.colors.grey,
    },
    backdrop: {
      backgroundColor: theme.colors.backdrop,
      width: dimensions.width,
      height: dimensions.height,
      position: 'absolute',
    },
    listSymptomChip: {},
    selectedSymptomChip: {backgroundColor: theme.colors.primaryDark},
  });
};

export default getStyles;
