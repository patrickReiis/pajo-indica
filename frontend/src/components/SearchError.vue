<script setup lang="ts">
const props = defineProps(['messages']);
</script>

<template>
    <div class="error-container" v-if="props.messages.length">
        <img src="../assets/sad face.jpeg" alt="sad face" width=100 height=100>
        <p v-for="message in messages" :key="message">
            {{ message }}
        </p>
    </div>
</template>

<style scoped>
.error-container {
    text-align: center;
    font-size: 1.5rem;
}
</style>
