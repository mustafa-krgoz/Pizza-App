import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [emial, setEmail ] = useState('');
  const[password, setPassword ] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email"  
        value={emial}
        onChangeText={text => setEmail(text)}/>
        <TextInput style={styles.input} placeholder="Şifre" secureTextEntry 
        value={password}
        onChangeText={text => setPassword(text)}/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  outlineButton: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  outlineButtonText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
