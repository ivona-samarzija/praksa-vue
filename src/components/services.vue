<template>

<div class="body wrapper-bg">

<h1>Naše usluge</h1>

    <p class="services">
        Sve počinje jednim dodirom. Masaža ima blagotvorno djelovanje na um i tijelo. Opušta napete mišiće, pospješuje krvotok, oslobađa od psihičke i fizičke napetosti.</p>


    <div class="wrap">


        <img class="pic" src="../assets/massage.jpg">


        
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
        <img class="bigpic" src="../assets/facial.jpg">
    </div>

    <h3>Hvala vam na povjerenju!</h3>


</div>

</template>

<style>
    
    .wrapper-bg{
        justify-content: center;
        align-items: center;
        text-align: center;
    }
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
        grid-template-columns: 400px 300px;
        margin: auto;
        padding: auto;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .pic{
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

    @media (min-width: 375px) and (max-width: 991.98px) { 
        h1{
            padding: 1em;
        }
        .pic{
            max-width: 60%;
            margin-left: 3em;
            
        }
        .bigpic{
             max-width: 100%;
        }
        .wrap{
            grid-template-columns: 200px 180px;
            margin: 1em;
        }
        .wrapper-bg{
            margin: 0em;
            padding: 0em;
            background-color: rgba(255, 255, 255, 0.35);
        }
        .services{
            max-width: 50%;
            margin-bottom: 2em;
            font-size: 10pt;
        }
        ul{
            font-size: 10pt;
            margin: 1em;
            word-wrap: break-word;
        }
    }
</style>



<script setup lang="ts">
    
</script>