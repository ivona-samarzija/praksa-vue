<script lang="ts">
export default {
  methods: {
	  say(message: any): void {
    	alert(message)
  	}
	}
}
</script>
<template>

    <div class="quote-wrapper m-lg-5">
        <h3 class="quote">"Relax  like <br /> your life <br /> depends on it!"</h3>


            <button 
            class="quote-button" @click="say('Za narudžbe nazovite nas na broj 091-456/7890')">
            Zakaži termin</button>


    </div>

</template>

<style>
.quote-wrapper{
    display: grid;
}

.quote{
    
    padding: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-weight: 100;
    font-size: 50pt;
}

.quote-button{
    border: none;
    background-color: black;
    color: white; 
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    padding: 10px;
    outline: none;
    margin: auto;
    
}
.quote-button:hover{
    background-color: white;
    color: black;
    border:1px solid black;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

@media (min-width: 414px) and (max-width: 991.98px) {

    .quote-wrapper{
    display: flex;
    flex-flow: column;
}

    .quote{
    font-weight: 100;
    font-size: 50pt;
}

.quote-button{
    border: none;
    width: 30%;
    background-color: black;
    color: white; 
    border-radius: 2px;
    padding: 15px;
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    

    
}
.quote-button:hover{
    background-color: white;
    color: black;
    border:1px solid black;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
}
</style>
>