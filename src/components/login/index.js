import React, {useState} from 'react';
import 
{  View,
     Text,
      StyleSheet,
         SafeAreaView,
               TextInput,
                TouchableOpacity,} from 'react-native';
                import firebase from '../../services/firebaseconection';


export default function Login ({changeStatus}){
    
    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin (){
            if(type === 'login'){
            //Execução do Login

            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then( (user) => {
                changeStatus(user.user.uid)
            }  )
            .catch( (err) => {
                console.log(err)
                alert('Ops, ocorreu um erro! Tente novamente!')
                return;
            } )
        }else {
            //Cadastro do Usuário
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( (user) => {
                changeStatus(user.user.uid)
            }  )
            .catch( (err) => {
                console.log(err)
                alert('Ops, ocorreu um erro! Tente novamente!')
            } )

        }

    }

    return(
        <SafeAreaView style={styles.container}>

            <TextInput
            placeholder='Email/Login'
            style={styles.input}
            value={email}
            onChangeText={ (text) => setEmail(text) }
            />
            <TextInput
            placeholder='********'
            style={styles.input}
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true}
            />

            <TouchableOpacity style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6fa' : '#141414'}]}
            onPress={handleLogin}
            >
                <Text style={styles.loginText}>
                {type === 'login' ? 'Acessar' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'Acessar' : 'Cadastrar')}>
                <Text style={{textAlign: 'center'}}>

                    {type === 'Login' ? 'Criar uma conta' : 'Ja possui uma conta? Clique aqui!'}

                </Text>

                
            </TouchableOpacity>







        </SafeAreaView>
    )











}

const styles= StyleSheet.create({
    
    container:{
       
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F2f6fc',
        paddingHorizontal: 10,

    },

    input:{
        
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'

    },
    
    handleLogin:{
        
        alignItens: 'center',
        justifyContent: 'center',
        height: 45,
        marginBotton: 10,

    },
    
    loginText:{
        
        color: '#FFF',
        fontSize: 17

    }
});