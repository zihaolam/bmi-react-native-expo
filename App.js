import React from 'react';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
  Pressable,
} from 'react-native';

export default function App() {
	const [height, setHeight] = useState(0);
	const [mass, setMass] = useState(0);
	const [resultText, setResultText] = useState('');
	const [resultNum, setResultNum] = useState(0);

	const handleCalculate = () => {
		const BMI = mass / ((height/100) ** 2);
		setResultNum(BMI.toFixed(2));
		if (BMI < 18.5) return setResultText('Underweight');
		if (BMI > 18.5 && BMI < 25) return setResultText('Normal Weight');
		if (BMI >= 25 && BMI < 30) return setResultText('Overweight');
		return setResultText('Obesity');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>BMI Calculator</Text>
			<View style={styles.top}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Height (cm)</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(height) => setHeight(height)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Mass (kg)</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(mass) => setMass(mass)}
          />
        </View>
			</View>

				<Pressable onPress={handleCalculate} style={styles.button} color="#ffffff">
          <Text style={styles.buttonText}>
            Calculate
          </Text>
        </Pressable>
			<Text style={styles.resultNum}>{resultNum}</Text>
			<Text style={styles.resultText}>{resultText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1D1D1B',
    paddingTop: 30
	},
	top: {
		flexDirection: 'row',
    marginTop: 50
	},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#FFCB1F',
    marginTop: 20,
    marginHorizontal: 15
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
	input: {
		textAlign: 'center',
		fontSize: 25,
		marginTop: 12,
		color: '#FFFFFF',
    minWidth: 100,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: 'gray'
	},
	resultNum: {
		alignSelf: 'center',
		color: '#FFCB1F',
		fontSize: 65,
		padding: 15,
    fontWeight: 'bold'
	},
	resultText: {
		alignSelf: 'center',
		color: '#FFFFFF',
		fontSize: 35,
		padding: 15,
    fontWeight: 'bold'
	},
	title: {
		color: '#FFCB1F',
		padding: 20,
		fontSize: 35,
    fontWeight: '700',
		textAlign: 'center',
	},
  inputGroup: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputLabel: {
    color: "#ffffff",
    fontSize: 20,
  }
});