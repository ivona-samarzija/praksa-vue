<template>

<div class="body wrapper-bg">

<h1>Naše usluge</h1>

    <p class="services">
        Sve počinje jednim dodirom. Masaža ima blagotvorno djelovanje na um i tijelo. Opušta napete mišiće, pospješuje krvotok, oslobađa od psihičke i fizičke napetosti.</p>
 
    <div class="wrap">

        

        <img class="image" src="~@/assets/massage.webp">
        
        <div>
            <p class="massage">Masaže</p>
            <ul>
                <li>Švedska masaža</li>
                <li>Tu ina masaža</li>
                <li>Refleksoterapija</li>
                <li>Anticelulitna masaža</li>
                <li>Brazilska maderoterapija</li>
            
            </ul>
        </div>
    </div>
    

    <div class="wrap">
        
        <div>
            <p class="massage">Depilacija</p>
            <ul>
                <li>Depilacija voskom</li>
                <li>Depilacija šećernom pastom</li>
            </ul>

            <br />

            <p class="massage">Tretmani lica</p>
            <ul>
                <li>Marma terapija lica</li>
                <li>Lash lift</li>
                <li>Farbanje obrva</li>
            </ul>
        </div>

        <img class="bigpic" src="~@/assets/facial.webp">
    </div>

    <h3>Hvala vam na povjerenju!</h3>


</div>

</template>

<style>
    .body{
        color: black;
        padding: 5em;
    }
    h1{
        color: gray;
        padding-bottom: 3em;
    }
    .services{
        max-width: 50%;
        margin: auto;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-bottom: 5em;
        font-size: 16pt;
    }
    .wrap{
        display: grid;
        grid-template-columns: 500px 500px;
        margin: auto;
        padding: auto;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .image{
        max-width: 100%;
    }
    .massage{
        margin-left: 1em;
        font-weight: bold;
    }
    ul{
        list-style-type: none;
    }
    .bigpic{
        max-height: 50%;
    }
    h3{
        color: gray;
        font-size: 12pt;
    }
</style>



<script setup lang="ts">
    
</script>