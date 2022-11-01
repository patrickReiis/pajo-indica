<script setup lang="ts">

</script>

<template>
    <footer class="container-footer">
        <h1 id="contato">CONTATO</h1>
        <div class="container-contact">
            <div class="emails">
                <div class="pajo-email">
                    <p>E-mail: pajoindica@gmail.com</p>
                </div>
                <div class="ceo-email">
                    <p>Contato com nosso CEO'S:</p>
                    <p>&emsp;Patrick: patrickpereirareal1@gmail.com</p>
                    <p>&emsp;Jorge: jorgelpossamai@gmail.com</p>
                </div>
            </div>
            <div class="support-pajo">
                <div>
                    <p>Contribua com qualquer quantia para que o site possa continuar.</p>
                    <p>Pix: vidadocrime@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

#contato {
    font-family: 'Oswald', sans-serif;
    text-align: center;
    background: var(--color-text);
    width: 50%;
    margin: 0 auto;
    border-radius: 1.2rem;
}

.container-footer {
    background: var(--color-background-soft);
    color: var(--color-background-soft);
    padding: 1rem 0;
}

.container-contact {
    color: var(--color-text);
    font-family: 'Ubuntu Condensed', sans-serif;
    font-size: 1.2rem;
    display: flex;
    flex-flow: row wrap;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
}

.emails div {
    border-radius: 0 20px 20px 0;
    padding: 0.5rem;
}

.emails {
    width: 45%;
}

.pajo-email {
    background: var(--color-background-light);
}

.ceo-email {
    background: var(--color-background-light);
    margin-top: 0.5rem ;
}

.support-pajo {
    background: var(--color-background-light);
    margin-left: auto;
    padding: 1rem;
    border-radius: 20px 0 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
}

@media screen and (min-width:0px) and (max-width:700px){

    .emails {
        width: 100%;
    }

    .emails div {
        border-radius: 0 0 0 0;
    }

    .support-pajo {
        border-radius: 0 0 0 0;
        width: 100%;
        justify-content: center;
        margin: 0.5rem 0;
    }
}
</style>
