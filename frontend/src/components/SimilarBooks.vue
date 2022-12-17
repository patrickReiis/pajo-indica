<script setup lang="ts">

export type BookPercentageMatch = {
    book: {
        author: string,
        genre: string,
        imagePath: string,
        keywords: string[],
        title: string
    },
    percentage: number
}

interface Props {
    similarBooks: BookPercentageMatch[]
}

const props = defineProps<Props>();
</script>

<template>
    <h2 id="title-search">
        Resultados da sua pesquisa:
    </h2>
    <div class="books-container">
        <div class="book-container" :key="bookWithPercentage.book.title" v-for="bookWithPercentage in props['similarBooks']">
            <div class="details" style="text-align: center;">
                {{ bookWithPercentage.book.title }}
            </div>
            <img width=117.5 height=187.5 class="book-cover" :src="bookWithPercentage.book.imagePath" alt="book cover">
            <span class="details">
                {{ bookWithPercentage.percentage + '%' }}
            </span>
        </div>
    </div>
</template>

<style scoped>
#title-search {
    text-align: center;
    margin-bottom: 2rem;
}

.books-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

.book-cover {
    display: inline-block;
    margin: auto;
}

.book-container {
    background: var(--color-background-soft);
    border-radius: calc(var(--border-radius) - 10px);
    display: flex;
    flex-flow: column nowrap;
    padding: 0.55rem;
    margin: 0.65rem;
    width: 190px;
}

.details {
    color: var(--color-text);
    word-wrap: break-word;
}
</style>
