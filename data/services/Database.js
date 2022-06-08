// Banco de Dados
import { db } from "../config/firebase";
import {
    collection, getDocs, doc, updateDoc,
    setDoc, getDoc, query, where, deleteDoc,
} from 'firebase/firestore/lite'

// Authenticated = Login
import { Auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

export async function GetAnimesData(uid) {
    // Irá retornar, toda a livraria
    const q = query(collection(db, "Users", uid, 'Library'));
    const querySnapshot = await getDocs(q);
    // Todos os itens e o id(do banco)
    const queryData = querySnapshot.docs.map((detail) => ({
        ...detail.data(),
        id: detail.id
    }));
    console.log(queryData)
    return queryData;
}

// Criar uma nova Conta
export async function CreateUser(uid) {
    await setDoc(doc(db, "Users", uid));
}

export async function GetDataAnime(uid, id, data, favorited) {
    // Irá retornar, toda a livraria
    const q = query(collection(db, "Users", uid, 'Library'));
    const querySnapshot = await getDocs(q);
    // Todos os itens e o id(do banco)
    const queryData = querySnapshot.docs.map((detail) => ({
        ...detail.data(),
        id: detail.id
    }));

    // Verifica se Existe
    const Exist = queryData.find(a => a.id == id.toString());
    if (Exist) { // Exist = true = Update
        return Exist;//UpdateAnimeData(uid, id, data, favorited)
    } else { // DontExist? = false = CriarAnime
        return null;//CreateAnimeData(uid, id, data, favorited)
    }
}

export async function AnimeDataExist(uid, id, data, favorited) {
    // Irá retornar, toda a livraria
    const q = query(collection(db, "Users", uid, 'Library'));
    const querySnapshot = await getDocs(q);
    // Todos os itens e o id(do banco)
    const queryData = querySnapshot.docs.map((detail) => ({
        ...detail.data(),
        id: detail.id
    }));

    // Verifica se Existe
    const Exist = queryData.find(a => a.id == id.toString());
    if (Exist) { // Exist = true = Update
        UpdateAnimeData(uid, id, data, favorited)
    } else { // DontExist? = false = CriarAnime
        CreateAnimeData(uid, id, data, favorited)
    }
}

export async function DeleteAnime(uid, id) {
    await deleteDoc(doc(db, 'Users', uid, "Library", id.toString()));
    console.log(`Manga: ${id} deletado.`)
}

// Atualiza o Anime
export async function UpdateAnimeData(uid, id, data, favorited) {
    const AnimeRef = doc(db, 'Users', uid, "Library", id.toString());
    updateDoc(AnimeRef, {
        favorited: favorited
    })
    console.log("Atualizado: "+favorited)
}

// Adiciona o Anime a livraria!
export async function CreateAnimeData(uid, id, data, favorited) {
    const AnimeRef = doc(db, 'Users', uid, "Library", id.toString());
    const Info = {
        mal_id: id,
        title: data.title,
        title_japanese: data.title_japanese,
        title_english: data.title_english,
        title_synonyms: data.title_synonyms,
        trailer: data.trailer,
        images: data.images,
        status: data.status,
        source: data.source,
        season: data.season,
        year: data.year,
        rating: data.rating,
        popularity: data.popularity,
        type: data.type,
        url: data.url,
        episodes: data.episodes || 1,
        genres: data.genres,
        producers: data.producers,
        studios: data.studios,
        rank: data.rank,
        score: data.score,
        synopsis: data.synopsis,
        duration: data.duration,
        licensors: data.licensors,
        favorited: favorited
    }
    await setDoc(AnimeRef, Info)
}