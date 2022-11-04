<script setup lang="ts">
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
        <div class="general-search-container">
            <h1 class="search-title">
                Encontre sua próxima leitura
            </h1>
            <h3 class="search-title">
                cite um livro parecido com o que você esteja procurando
            </h3>
            <div class="search-container">
                <input type="search" id="search-bar" placeholder="Ex: A noite maldita; invernos de verão...">
                <div class="icon-search">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                        <g>
                            <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z">
                            </path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </main>

    <FooterComponent/> 
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
    padding-bottom: 5.45rem;
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

    #search-bar {
        width: 95%;
    }

    .icon-search {
        left: 80%;
    }

}
</style>
