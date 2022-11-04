<script setup lang="ts">
import PajoIcon from './PajoIcon.vue'
</script>

<template>
    <div class="how-it-works-container">
        <header class="header-container">
            <PajoIcon/> 
            <h1 id="how-title">entenda como funciona</h1>
        </header>
        <div class="how-content">
            <p>
                Você leu um livro e gostou da temática, do jeito como é escrito e gostaria de
ler mais livros iguais a essa sua leitura inesquecível? Então veio ao lugar
certo. Digite o nome do livro que você leu na "barra de pesquisa" da página
inicial que te indicamos outros livros parecidos (mas não iguais) com seu
livro.
            </p>
        </div>
        <div class="brief-container">
            <img src="../assets/book.svg" style="display: block" width=80 alt="book silhouette livro silhueta">
            <p class="brief-content">
                Leia seus livros com mais vontade,
                <br>
                encontre livros que sejam a sua cara.
            </p>
        </div>
    </div>
</template>

<style scoped>

.how-it-works-container {
    background: url('../assets/background-books.svg');
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

#how-title {
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

.how-content {
    color: var(--content-font-color); 
    font-family: var(--content-font);
    font-size: 1.1rem;
    padding: 9rem 2rem;
    text-align: justify;
}

.brief-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
}

.brief-content {
    background: var(--color-heading);
    color: var(--content-font-color); 
    font-family: var(--content-font);
    width: fit-content;
    padding: 0.75rem;
    border-radius: 2rem;
    margin: 0.5rem;
}

@media screen and (min-width:0px) and (max-width:700px){
    #how-title {
        width: 70%;
        right: 40%;
        line-height: 1.8rem;
        font-size: 1.8rem;
    }
}
</style>
