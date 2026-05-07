import { Colors } from '../constants/theme';
import { globalStyles } from '../styles/global.styles';
import * as Haptics from 'expo-haptics';
import { Pressable, Text } from 'react-native';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
  doubleSize?: boolean;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
  doubleSize = false,
}: Props) => {
  const handlePress = async () => {
    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Heavy
    );

    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;