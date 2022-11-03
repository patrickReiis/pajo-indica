<script setup lang="ts">
import PajoIcon from './PajoIcon.vue';
</script>

<template>
    <div class="about-container">
        <header class="header-container">
            <PajoIcon/> 
            <h1 id="about-title">sobre nós</h1>
        </header>
        <div class="about-content">
            <p>
                Nós identificamos que havia um problema no mercado dos livros, mais
                especificamente na área da recomendação desses livros. Diversas vezes, leitores
                pedem para que os livreiros indiquem livros parecidos com o qual o leitor está
                procurando. Isso é uma atividade difícil, levando em consideração que os livreiros
                não leram todos os livros do mundo. A Amazon também tem um pequeno sistema de
                recomendação, mas que não funciona bem com livros nacionais. Então aqui
                estamos nós, pra te ajudar a achar o tipo de livro que você está procurando.
            </p>
            </div>
    </div>
</template>

<style scoped>

.about-container {
    background: url('../assets/background-books.svg');
}


.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: right;
}

#about-title {
    background: var(--color-heading);
    color: var(--color-background-soft);
    font-family: 'Ubuntu Condensed', sans-serif;
    width: 50%;
    border-radius: 1rem 0 0 1rem;
    padding: 0 1.5rem;
    font-size: 2.2rem;
}

.about-content {
    color: var(--content-font-color); 
    font-family: var(--content-font);
    font-size: 1.1rem;
    padding: 7.5rem 1.5rem;
    text-align: justify;
}

@media screen and (min-width:0px) and (max-width:700px){

    .about-content {
        padding: 1rem;
    }
}
</style>
