// Data Verif = user, email, password, password_confirm
const Users = {
    _id: String,
    user: String,
    email: String,
    password: String,
    library: String,
    image: String,
    createdAt: Date.now(),
};

// Banco de Dados
import { db } from "../config/firebase";
import { collection, getDocs } from 'firebase/firestore/lite'

const onSubmit = (data) => {
    console.log(data)
}

// Criar uma nova Conta
export async function CreateUser(json) {
    let data = JSON.stringify(json)
    const UserRef = collection('Users');
    // Verificar se Existe
    const CatchUser = UserRef.where('user', '==', "Shiro")
    //const CatchEmail = UserRef.where('email', '==', data.email)
    if (CatchUser || CatchEmail) { // se algum deles for true, então a conta já existe!
        console.log("Essa conta já existe!")
        return false;
    } else {
        /*const NewUser = UserRef.doc(data.user).set({
            user: data.user,
            email: data.email,
            password: data.password,
            library: [],
            image: 1,
            createdAt: Date.now(),
        })
        console.log(NewUser)*/
        console.log("Conta criada!")
    }
}

// Verificar se a conta existe, e etc.
export function VerifyCreate(data) {

}

// Pegar Dados
// return: user, library
export function getUser(data) {

}

// Verificar se a conta é logavel
// Data: token, user, password
export function VerifyLogin(data) {

}