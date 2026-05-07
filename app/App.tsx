
import CalculatorButton from '../components/CalculatorButton';
import TipButton from '../components/TipButton';
import { Colors } from '../constants/theme';
import { useTipCalculator } from '../hooks/useTipCalculator';
import { globalStyles } from '../styles/global.styles';

import * as Haptics from 'expo-haptics';

import {
  Pressable,
  Text,
  View,
} from 'react-native';

export default function App() {
  const {
    amount,
    people,
    tipPercentage,

    tipAmount,
    totalPerPerson,

    buildAmount,
    deleteLast,

    increasePeople,
    decreasePeople,

    setTipPercentage,
  } = useTipCalculator();

  const handlePeopleAction = async (
    action: () => void
  ) => {
    await Haptics.selectionAsync();

    action();
  };

  return (
    <View style={globalStyles.background}>
      <View style={globalStyles.calculatorContainer}>
        {/* RESULTADOS */}
        <View style={globalStyles.resultsContainer}>
          <Text style={globalStyles.subResult}>
            Cuenta Total
          </Text>

          <Text style={globalStyles.mainResult}>
            C${amount}
          </Text>

          <Text style={globalStyles.subResult}>
            Propina:  C${tipAmount.toFixed(2)}
          </Text>

          <Text style={globalStyles.totalPerPerson}>
            C${totalPerPerson.toFixed(2)}
            {'\n'}
            por persona
          </Text>
        </View>

        {/* CONTROLES */}
        <View style={globalStyles.controlsContainer}>
          <View style={globalStyles.tipButtonsRow}>
            {[10, 15, 20].map(tip => (
              <TipButton
                key={tip}
                percentage={tip}
                active={tip === tipPercentage}
                onPress={() =>
                  setTipPercentage(tip)
                }
              />
            ))}
          </View>

          <View style={globalStyles.counterContainer}>
            <Pressable
              style={globalStyles.counterButton}
              onPress={() =>
                handlePeopleAction(
                  decreasePeople
                )
              }
            >
              <Text
                style={
                  globalStyles.counterButtonText
                }
              >
                -
              </Text>
            </Pressable>

            <Text style={globalStyles.counterText}>
              {people} Personas
            </Text>

            <Pressable
              style={globalStyles.counterButton}
              onPress={() =>
                handlePeopleAction(
                  increasePeople
                )
              }
            >
              <Text
                style={
                  globalStyles.counterButtonText
                }
              >
                +
              </Text>
            </Pressable>
          </View>
        </View>

        {/* TECLADO */}
        <View>
          <View style={globalStyles.row}>
            <CalculatorButton
              label="1"
              onPress={() =>
                buildAmount('1')
              }
            />

            <CalculatorButton
              label="2"
              onPress={() =>
                buildAmount('2')
              }
            />

            <CalculatorButton
              label="3"
              onPress={() =>
                buildAmount('3')
              }
            />
          </View>

          <View style={globalStyles.row}>
            <CalculatorButton
              label="4"
              onPress={() =>
                buildAmount('4')
              }
            />

            <CalculatorButton
              label="5"
              onPress={() =>
                buildAmount('5')
              }
            />

            <CalculatorButton
              label="6"
              onPress={() =>
                buildAmount('6')
              }
            />
          </View>

          <View style={globalStyles.row}>
            <CalculatorButton
              label="7"
              onPress={() =>
                buildAmount('7')
              }
            />

            <CalculatorButton
              label="8"
              onPress={() =>
                buildAmount('8')
              }
            />

            <CalculatorButton
              label="9"
              onPress={() =>
                buildAmount('9')
              }
            />
          </View>

          <View style={globalStyles.row}>
            <CalculatorButton
              label="."
              onPress={() =>
                buildAmount('.')
              }
            />

            <CalculatorButton
              label="0"
              onPress={() =>
                buildAmount('0')
              }
            />

            <CalculatorButton
              label="del"
              color={Colors.orange}
              onPress={deleteLast}
            />
          </View>
        </View>
      </View>
    </View>
  );
}