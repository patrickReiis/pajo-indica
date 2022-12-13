<script setup lang="ts">
import SearchBook from './SearchBook.vue';

</script>

<template>
    <header class="header-pajo">
        <div class="header-container">
            <div class="pajo-title-container">
                <h1 id="pajo">
                    Pajó
                </h1>
                <h1 id="indica">
                    Indica
                </h1>
            </div>
            <ul class="pajo-brief-ul">
                <li>escolha sua</li>
                <li>próxima leitura</li>
                <li>sem sair de casa.</li>
            </ul>
        </div>
    </header>
    <main>
        <nav>
            <ul class="nav-pajo-ul">
                <li><a href="#/entenda-como-funciona">entenda como funciona</a></li>
                <li><a href="#/registrar">registre um livro</a></li>
                <li><a href="#/sobre-nos">sobre nós</a></li>
            </ul>
        </nav>
        <SearchBook/>
    </main>

</template>

<style scoped>

#pajo {
    font-size: 4.2rem;
}

#indica {
        font-size: 3.2rem;
}

.pajo-title-container h1 {
    width: 200px;
} 

.pajo-title-container {
    font-family: 'Oswald', sans-serif;
    text-align: center;
}

.header-container {
    display: flex;
    justify-content: space-between;
}

.header-pajo {
    background: var(--color-background-soft);
    line-height: 1.2;
    color: var(--color-text);
}

.pajo-brief-ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Ubuntu Condensed', sans-serif;
    font-weight: lighter;
    font-size: 1.5rem;
    margin-right: 1.8rem; 
    line-height: 2;
    text-align: right;
}

.nav-pajo-ul {
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    list-style: none;
    justify-content: space-around;
}

.nav-pajo-ul li {
    background: var(--color-heading); 
    color: #A7B9C4; 
    font-family: 'Ubuntu Condensed', sans-serif;
    width: 30%;
    text-align: center;
    border-radius: 0 0 20px 20px;
    font-size: 1.2rem;
} 

main {
    background: repeat url('../assets/background-books.svg');
}


@media screen and (min-width:0px) and (max-width:700px){

    .pajo-title-container h1 {
        width: 150px;
    } 

    .nav-pajo-ul {
        flex-flow: column nowrap;
        align-items: flex-end;
    }

    .nav-pajo-ul li {
        border-radius: 10px 0 0 10px;
        margin-top: 0.5rem;
        padding-right: 1rem;
        width: 70%;
        text-align: right;
    }
}
</style>
