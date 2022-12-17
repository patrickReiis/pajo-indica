<script setup lang="ts">
import SearchError from './SearchError.vue';
import SimilarBooks from './SimilarBooks.vue';
import type { BookPercentageMatch } from './SimilarBooks.vue';
import type { Ref } from 'vue';
import { ref } from 'vue';

const errors:Ref<Array<string>> = ref([]);
const books:Ref<BookPercentageMatch[]> = ref([]);


async function findSimilarBooks() {
    const bookName = (document.getElementById('search-bar') as HTMLInputElement).value;

    // for each new request clean array
    errors.value = [];
    books.value = [];

    const response = await fetch('http://localhost:5173/api/v1/book/recommend', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ book: bookName })
    })

    try {
        if (response.ok) {
            const data = await response.json();
            books.value = data;
        } else {
            if (response.status === 404) {
                const data = await response.json();
                errors.value = data['errors'];
            }
            if (response.status === 500) {
                errors.value = ['Erro do servidor', 'Tente novamente mais tarde']
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}

</script>

<template>

    <div class="general-search-container">
        <h1 class="search-title">
            Encontre sua próxima leitura
        </h1>
        <h3 class="search-title">
            cite um livro parecido com o que você esteja procurando
        </h3>
        <div class="search-container">
            <input type="search" id="search-bar" placeholder="Ex: A noite maldita; invernos de verão...">
            <div class="icon-search" @click="findSimilarBooks">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                    <g>
                        <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z">
                        </path>
                    </g>
                </svg>
            </div>
        </div>
        <SearchError :messages="errors"/>
        <SimilarBooks v-if="books.length" :similarBooks ="books"/>
    </div>
</template>

<style scoped>

.general-search-container {
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    color: var(--color-background-soft);
}

.search-container {
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    padding-bottom: 2.45rem;
}

.search-title {
    text-align: center;
}

#search-bar {
    width: 80%;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0.4rem;
    border-radius: 10px;
    border: 2px solid var(--color-heading);
}

#search-bar:focus-visible {
    box-sizing: none;
    outline: none;
    background: #EAEAEA;
}

.icon-search {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 85%;
    stroke: var(--color-text);
    cursor: pointer;
}

@media screen and (min-width:0px) and (max-width:700px){
    #search-bar {
        width: 95%;
    }

    .icon-search {
        left: 80%;
    }
}

</style>
