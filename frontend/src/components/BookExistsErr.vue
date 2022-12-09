<script setup lang="ts">

defineProps({
    errMsg: String
});

</script>

<template>
    
    <div v-if="errMsg" class="err-container">
        <div>
            <img width=30 height=30 src="../assets/x-delete red.svg" alt="X sign in red">
            {{ errMsg }}
        </div>
    </div>
</template>

<style scoped>
.err-container img {
    display: inline-block;
    vertical-align: middle;
}

.err-container {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    background: white;
    width: var(--register-desktop-width);
    margin: auto;
    border-radius: var(--border-radius);
    padding: .5rem;
    border: 5px solid var(--error-msg-color);
    color: var(--error-msg-color);
    font-family: 'Ubuntu Condensed', sans-serif;
    text-align: center;
}

@media screen and (min-width:0px) and (max-width:700px){
    .err-container {
        width: var(--register-mobile-width);
    }
}
</style>
