<script setup lang="ts">

defineProps({
    successMsg: String
});

</script>

<template>
    
    <div v-if="successMsg" class="success-container">
        <div>
            <img width=30 height=30 src="../assets/confirm success.svg" alt="confirm/check sign">
            {{ successMsg }}
        </div>
    </div>
</template>

<style scoped>
.success-container img {
    display: inline-block;
    vertical-align: middle;
}

.success-container {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    background: white;
    width: var(--register-desktop-width);
    margin: auto;
    border-radius: var(--border-radius);
    padding: .5rem;
    border: 5px solid var(--success-msg-color);
    color: var(--success-msg-color);
    font-family: 'Ubuntu Condensed', sans-serif;
    text-align: center;
}

@media screen and (min-width:0px) and (max-width:700px){
    .success-container {
        width: var(--register-mobile-width);
    }
}
</style>
