<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import PajoIcon from './PajoIcon.vue'

const genres:Ref<Array<string>> = ref([]);

genres.value[0]

</script>

<template>
    <div class="register-container">
        <header class="header-container">
            <PajoIcon/> 
            <h1 id="register-title">registre um livro</h1>
        </header>
        <div class="form-container">
            <form>
                <div class="cover-container">
                    <label for="cover" id="cover-label">Faça Upload da capa (clique aqui) <span class="custom-placeholder">Formatos permitidos: PNG e JPG</span></label>
                    <input type="file" id="cover"
                        accept="image/png, image/jpeg"
                        hidden
                        name="cover-picture"
                    >
                </div>
                <div class="book-name-container">
                    <label for="book-name">Nome do livro:</label>
                    <input type="text" id="book-name" placeholder="Ex: Invernos de verão">
                </div>
                <div class="genre-container">
                    <label for="genre-select">Gênero do livro</label>
                    <select id="genre-select" name="genres" required>
                        <option value="">Nenhum</option>
                        <option value="poesia">Poesia</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                        <option value="terror">Terror</option>
                    </select>
                </div>
                <div class="author-name-container">
                    <label for="author-name">Autor do livro:</label>
                    <input type="text" id="author-name" placeholder="Ex: Jorge Luiz Possamai">
                </div>
                <input type="submit">
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
    width: var(--register-desktop-width); 
    display: inline-flex;
    justify-content: space-between;
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

.book-name-container, .author-name-container {
    border-radius: 2rem;
    width: var(--register-desktop-width);
    background: white;
}

#author-name:placeholder-shown, #book-name:placeholder-shown{
    text-align: right;
}

.genre-container {
    width: var(--register-desktop-width);
}

#genre-select {
    width: 50%;
    padding: 1rem;
    font-size: 1rem;
}

select {
    display: inline;
    background:red;
    transition-duration: 15s !important;
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

    .genre-container, .book-name-container, .author-name-container, .cover-container {
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
        border-radius: 2rem;
        width: 100%; 
    }

    #author-name:placeholder-shown, #book-name:placeholder-shown{
        text-align: center;
    }
}
</style>
