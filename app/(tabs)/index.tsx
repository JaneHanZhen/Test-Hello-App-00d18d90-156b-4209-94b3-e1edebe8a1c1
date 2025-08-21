import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  SafeAreaView 
} from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      setShowGreeting(true);
    }
  };

  const resetForm = () => {
    setName('');
    setShowGreeting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Hello World App</Text>
          
          {!showGreeting ? (
            <>
              <Text style={styles.label}>What is your name?</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                autoFocus
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
              />
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleSubmit}
                disabled={!name.trim()}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>
                Hello {name}, how are you today?
              </Text>
              <TouchableOpacity 
                style={[styles.button, styles.resetButton]} 
                onPress={resetForm}
              >
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#555',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4a80f5',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#f56a4a',
    marginTop: 20,
  },
  greetingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    width: '100%',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
});