
import React, { useState } from 'react';
import { StyleSheet,  View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [password, setPassword] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorCpf, seteErrorCpf] = useState(null)
  const [errorTelefone, seteErrorTelefone] = useState(null)

  const validar = () => {
      let error  = false   
      setErrorEmail(null)
      seteErrorCpf(null)  
      if(email==null){
        setErrorEmail("Preencha seu e-mail corretamente")
      error = true
      }
      if (cpf==null){
        seteErrorCpf("Preencha seu CPF")
        error = true
      }
      return !error 

  }


  const salvar = () => {
      if (validar()){
      console.log("Salvou")
    }
  }


  return (
    <View style={styles.container}>
      <Text h2>Cadastre-se</Text>
      <Input
        placeholder="E-mail"
       style={styles}
       onChangeText={value =>{ 
           setEmail(value)
           setErrorEmail(null)
        } }
       keyboardType="email-address"
       errorMessage={errorEmail}
     />

     <Input
        placeholder="Nome"
       style={styles}
       onChangeText={value => setNome(value) }
       errorMessage={errorNome}
    />

<Input
        placeholder="CPF"
       style={styles}
       onChangeText={value => {
           setCpf(value)
           seteErrorCpf(null)
        } }
       keyboardType="number-pad"
       returnKeyType="done"
       errorMessage={errorCpf}
     />

<Input
        placeholder="Telefone"
       style={styles}
       onChangeText={value => setTelefone(value) }
       keyboardType="phone-pad"
       returnKeyType="done"
       errorMessage={errorTelefone}
     />

     <CheckBox 
     
     title="Eu aceito os termos de uso"
     checkedIcon="check"
     uncheckedIcon="square-o"
     checkedColor="green"
     uncheckedColor="red"
     checked={isSelected}
     onPress={() => setSelected(!isSelected)}
     
     />

      <Button
         icon={
      <Icon
        name="check"
        size={20}
         color="white"
      />
  }
  title="Salvar"
  buttonStyle={specificStyle.Button}
  onPress={() => salvar() }
/>

    </View>
  );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor : "#fff"
    },
    Button : {
        width: "100%",
        marginTop: 10
    }
})

