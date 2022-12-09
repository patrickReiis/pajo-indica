<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import PajoIcon from './PajoIcon.vue'

const genres:Ref<Array<string>> = ref(['romance', 'conto', 'crônica', 'poesia', 'suspense', 'fantasia', 'biografia', 'terror', 'ficção científica', 'autoajuda', 'negócios', 'espiritualidade']);

const currentSelected:Ref<string> = ref('');

function genreSelect(event:Event) {

    currentSelected.value = ((event.target as HTMLLIElement)?.textContent as string); 
}

const showGenres:Ref<boolean> = ref(false);

const imageFlipClass:Ref<string> = ref('image-flip');

const displayErrorUpload:Ref<boolean> = ref(false);
const displayErrorGenre:Ref<boolean> = ref(false);


function doesErrorsExists(fileUploaded:  HTMLInputElement, currentGenre: string) {
    let count = 0;

    if (fileUploaded.value == '') {
        displayErrorUpload.value = true
        count ++;
    } else {
        displayErrorUpload.value = false
    }

    if (currentGenre == '') {
        displayErrorGenre.value = true
        count ++;
    } else {
        displayErrorGenre.value = false
    }

    return count >= 1 ? true : false
}

function tryRegisterBook(e: Event) {
    e.preventDefault()

    const fileUploaded = (document.getElementById('cover-upload') as HTMLInputElement)

    if (doesErrorsExists(fileUploaded, currentSelected.value) === true) {
        return
    }
    
    const author = (document.getElementById('author-name') as HTMLInputElement).value
    const bookName = (document.getElementById('book-name') as HTMLInputElement).value 
    const genre = currentSelected.value;
    const bookImg = (fileUploaded.files as FileList)[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(bookImg);

    fileReader.addEventListener('loadend', async () => {
        const bookImgBase64 = fileReader.result;

        // try and catch
        const response = await fetch('http://localhost:5173/api/v1/book/register', {
            method: 'POST',
            body: JSON.stringify({ author: author, title: bookName, genre: genre, keywords: 'arrumar', imageBase64: bookImgBase64}),
        })
    })
}

</script>

<template>
    <div class="register-container">
        <header class="header-container">
            <PajoIcon/> 
            <h1 id="register-title">registre um livro</h1>
        </header>
        <div class="form-container">
            <form @submit="tryRegisterBook">
                <div class="cover-container">
                    <label for="cover-upload" id="cover-label">Faça Upload da capa (clique aqui) <span class="custom-placeholder">Formatos permitidos: PNG e JPG</span></label>
                    <input type="file" id="cover-upload"
                        accept="image/png, image/jpeg"
                        hidden
                        name="cover-picture"
                    >
                </div>
                    <div class="error-submit" v-if="displayErrorUpload">
                        Você precisa fazer o upload de uma imagem
                    </div>
                <div class="book-name-container">
                    <label for="book-name">Nome do livro:</label>
                    <input type="text" id="book-name" placeholder="Ex: Invernos de verão" required>
                </div>
                <div class="genre-container">
                    <label class="genre-label" @click="showGenres = !showGenres" for="genre-select">
                        Gênero do livro
                        <span class="genre-right-container">
                            {{currentSelected}} 
                            <span class="arrow-container">
                                <img v-if="showGenres" :class="imageFlipClass" src="../assets/arrow down.svg" alt="arrow down">
                                <img v-else src="../assets/arrow down.svg" alt="arrow down">
                            </span>
                        </span>
                    </label>
                    <div class="genre-options" v-if="showGenres">
                        <ul>
                            <li v-for="genre in genres" :key="genre" class="genre-list" @click="showGenres = !showGenres"> 
                                <label :for="'genre-' + genre" @click="genreSelect"> {{genre}} </label> 
                                <input :id="'genre-' + genre" type="radio" name="radiobuttons-genre" required>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="error-submit" v-if=" displayErrorGenre">
                    Você precisa selecionar um gênero
                </div>
                <div class="author-name-container">
                    <label for="author-name">Autor do livro:</label>
                    <input type="text" id="author-name" placeholder="Ex: Jorge Luiz Possamai" required>
                </div>
                <div class="submit-container">
                    <input type="submit" id="submit-register">
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

.register-container {
    background: url('../assets/background-books.svg');
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

#register-title {
    background: var(--color-heading);
    color: var(--color-background-soft);
    font-family: 'Ubuntu Condensed', sans-serif;
    width: 40%;
    border-radius: 1rem;
    padding: 0 1.5rem;
    font-size: 2.2rem;
    right: 50%;
    transform: translateX(50%);
}

form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    font-family: var(--content-font);
    font-weight: bold;
    color: var(--color-heading);
    line-height:normal;
}

form div {
    margin: 1rem;
}

label {
    background: white;
    cursor: pointer;
    padding: 1rem;
    border-radius: 2rem 0 0 2rem;
    display: inline-block;
    width: 50%;
}

#cover-label {
    border-radius: 2rem;
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
}

.cover-container {
    width: var(--register-desktop-width); 
}

.custom-placeholder {
    color: #41535D;
    margin-left: 5rem;
}

input {
    font-family: var(--content-font);
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0 2rem 2rem 0;
    border: none;
    width: 50%;
}

input:active {
    border: none;
}

input:focus-visible {
    outline: 2px solid black;
}

.book-name-container, .author-name-container, .submit-container {
    border-radius: 2rem;
    width: var(--register-desktop-width);
    background: white;
}

#author-name:placeholder-shown, #book-name:placeholder-shown{
    text-align: right;
}

.genre-container {
    width: var(--register-desktop-width);
    background: white;
    border-radius: var(--border-radius);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}


.genre-label {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-right: 0;
    border-radius: var(--border-radius);
}

.genre-right-container img{
    vertical-align: middle;
}

.genre-right-container {
    /* making image and selected text not selectable */

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.genre-list input{
    display: none;
}

.genre-list label {
    width: 100%;
    border-radius: 1rem;
    background: var(--color-background-light);
}

.genre-list {
    margin: 0.5rem;
    color: var(--color-heading);
    font-weight: 300;
    text-align: center;
}

.genre-options ul {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    align-items: center;
    justify-content: center;
    grid-row-gap: 1rem;
    grid-column-gap: 0.5rem;

}

.genre-options ul li {
    margin: 0;
}

.arrow-container {
    background: var(--color-background-soft);
    padding: 1rem 1.5rem;
    margin-left: auto;
    border-radius: var(--border-radius);
}

.image-flip {
    transform: rotate(180deg);
}

#submit-register {
    width: 100%;
    border-radius: var(--border-radius);
    cursor: pointer;
}

.error-submit {
   text-align: center;
   background: red;
}

@media screen and (min-width:0px) and (max-width:700px){
    #register-title {
        width: 70%;
        right: 40%;
        line-height: 1.8rem;
        font-size: 1.8rem;
    }

    #cover-label {
        width: 100%;
        text-align: center;
    }

    .genre-container, .book-name-container, .author-name-container, .cover-container, .submit-container {
        width: var(--register-mobile-width); 
    }

    .custom-placeholder {
        margin-left: 0;
    }

    label {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    input, label {
        border-radius: var(--border-radius);
        width: 100%; 
    }

    #author-name:placeholder-shown, #book-name:placeholder-shown{
        text-align: center;
    }
}
</style>