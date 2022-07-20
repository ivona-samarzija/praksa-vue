<template>

<div class="wrapper-bg">
    <div class="price-title">
    <h3>CJENIK</h3>
    </div>

    <h4>Masaže</h4>
    <div class="price-wrapper">
    <div>Švedska masaža - cijelo tijelo</div>
    <div>200,00kn</div>
    <div>Švedska masaža - leđa</div>
    <div>100,00kn</div>
    <div>Tui na masaža - cijelo tijelo</div>
    <div>250,00kn</div>
    <div>Tui na masaža - leđa</div>
    <div>150,00kn</div>
    <div>Refleksoterapija</div>
    <div>150,00kn</div>
    <div>Anticelulitna masaža</div>
    <div>130,00kn</div>
    <div class="paket">Paket 5 + 1</div>
    <div>650,00kn</div>
    <div>Brazilska maderoterapija</div>
    <div>170,00kn</div>
    <div class="paket">Paket 5 + 1</div>
    <div>850,00kn</div>
    <div>Brazilska maderoterapija + anticelulitna masaža</div>
    <div>300,00kn</div>
    <div class="paket">Paket 6 + 4</div>
    <div>1200,00kn</div>
    </div>

    <h4>Depilacija voskom</h4>
    <div class="price-wrapper">
        <div>Noge</div>
        <div>100,00kn</div>
        <div>Ruke</div>
        <div>60,00kn</div>
        <div>Cijelo tijelo</div>
        <div>120,00kn</div>
    </div>

     <h4>Depilacija šećernom pastom</h4>
    <div class="price-wrapper">
        <div>Noge</div>
        <div>120,00kn</div>
        <div>Ruke</div>
        <div>80,00kn</div>
        <div>Cijelo tijelo</div>
        <div>200,00kn</div>
    </div>

    <h4>Tretmani lica</h4>
    <div class="price-wrapper">
        <div>Marma terapija lica</div>
        <div>150,00kn</div>
        <div>Lash lift</div>
        <div>150,00kn</div>
        <div>Farbanje obrva hennom</div>
        <div>50 kn</div>
        <div class="paket">Lash lift + farbanje obrva hennom</div>
        <div>170,00kn</div>
    </div>
</div>

</template>
<style>
    h3{
        color: black;
       text-align: center;
       padding-bottom: 2em;
    }
    .wrapper-bg{
        color: black;
        margin: 3em;
        background-color: rgba(255, 255, 255, 0.35);
        padding: 3em;
        
    }
    .price-wrapper{
        color: black;
        display: grid;
        grid-template-columns: 700px 500px;
        margin: auto;
        padding: 3em;
    }
    @media (min-width: 414px) and (max-width: 991.98px) {
        .price-wrapper{
            font-size: 8pt;
            color: black;
            display: grid;
            grid-template-columns: 150px 100px;
            margin: auto;
            padding: 3em;
        }
    }

</style>