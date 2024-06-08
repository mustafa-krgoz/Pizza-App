import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Firebase yapılandırma dosyasını içe aktarın
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Categories');
      }
    });
  }, []);

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Kullanıcı', user.email);
      })
      .catch(error => Alert.alert('Kayıt Hatası', error.message));
  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Kullanıcı giriş yaptı', user.email);
      })
      .catch(error => Alert.alert('Giriş Hatası', error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image 
        source={{ uri: 'https://qzeen.ro/wp-content/uploads/2024/03/pizza-qzeen12-scaled-e1709337071334.jpg' }} // Resmin URL'sini buraya ekleyin
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>HOŞGELDİNİZ</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.outlineButton]}>
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
  logo: {
    width: 320, // Logonuzun genişliğini ayarlayın
    height: 200, // Logonuzun yüksekliğini ayarlayın
    marginBottom: 20, // Giriş alanlarının üstünde yer bırakmak için bir alt boşluk ekleyin
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    marginBottom: 30, // Giriş alanlarının üstünde yer bırakmak için bir alt boşluk ekleyin
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
    backgroundColor: '#FFA500', // Turuncu renk
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
    borderColor: '#FFA500', // Turuncu kenarlık
    borderWidth: 2,
  },
  outlineButtonText: {
    color: '#FFA500', // Turuncu metin rengi
    fontWeight: '700',
    fontSize: 16,
  },
});

