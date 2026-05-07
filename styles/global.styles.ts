import { Colors } from '../constants/theme';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  // RESULTADOS
  resultsContainer: {
    marginBottom: 30,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 60,
    textAlign: 'right',
    fontWeight: '300',
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 28,
    textAlign: 'right',
    fontWeight: '300',
  },

  totalPerPerson: {
    color: Colors.success,
    fontSize: 42,
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: 20,
  },

  // CONTROLES
  controlsContainer: {
    gap: 25,
    marginBottom: 30,
  },

  tipButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },

  counterText: {
    color: Colors.textPrimary,
    fontSize: 28,
    fontWeight: 'bold',
  },

  counterButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counterButtonText: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: 'bold',
  },

  // FILAS
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  // BOTONES
  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },

  // TIP BUTTON
  tipButton: {
    width: 90,
    height: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkGray,
  },

  activeTipButton: {
    backgroundColor: Colors.success,
  },

  tipButtonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});