
import { globalStyles } from '../styles/global.styles';
import { Pressable, Text } from 'react-native';

interface Props {
  percentage: number;
  active: boolean;
  onPress: () => void;
}

const TipButton = ({
  percentage,
  active,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        globalStyles.tipButton,
        active && globalStyles.activeTipButton,
      ]}
    >
      <Text style={globalStyles.tipButtonText}>
        {percentage}%
      </Text>
    </Pressable>
  );
};

export default TipButton;