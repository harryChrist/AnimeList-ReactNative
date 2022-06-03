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

// Authenticated = Login
import { Auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

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

export const singInUser = (email, password) => {
    signInWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            return user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return null;
            console.log(error.message)
        });
}

export const registerUser = async (user, email, password) => {
    try {
        await createUserWithEmailAndPassword(Auth, email, password)
            .catch((err) =>
                console.log(err)
            ).then((re) => {
                console.log(re);
            });
        await sendEmailVerification(Auth.currentUser).catch((err) =>
            console.log(err)
        );
        await updateProfile(Auth.currentUser, {
            displayName: user,
            photoURL: 'https://cdn.discordapp.com/attachments/981189453777338419/981189539789934612/unknown.png',
        })
            .catch(
                (err) => console.log(err)
            );
    } catch (err) {
        console.log(err);
    }
}

export const singOutUser = () => {
    signOut(Auth).then(() => {
        // Sign-out successful.
        return true;
    }).catch((error) => {
        // An error happened.
        console.log(error)
        return false;
    });
}

// Pegar Dados
// return: user, library
export function getUser(data) {

}

// Verificar se a conta é logavel
// Data: token, user, password
export function VerifyLogin(data) {

}