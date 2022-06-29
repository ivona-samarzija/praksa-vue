<template>

<div class="quote-wrapper">
   <h3 class="quote m-lg-3 p-lg-5 justify-content-center align-items-center">"Relax  like your life depends on it!"</h3>
 <div class="quote-container justify-content-center align-items-center m-lg-5">

 <button 
  class="quote-button" type="button">
  Zakaži termin</button>
</div>
</div>
</template>

<style>
.quote-wrapper{
    display: flex;
    flex-flow: row;
    float: left;
}

.quote{
    font-weight: 100;
    font-size: 50pt;
}
.quote-container{
    position: relative;
  
  
}
.quote-button{
    border: none;
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

@media (min-width: 414px) and (max-width: 991.98px) {

    .quote-wrapper{
    display: flex;
    flex-flow: column;
}

    .quote{
    font-weight: 100;
    font-size: 50pt;
}
.quote-container{
    display: flex;
    position: relative;
    align-content:flex-end;
  
}
.quote-button{
    border: none;
    background-color: black;
    color: white; 
    border-radius: 2px;
    padding: 15px;
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    transition-duration: 0.4s;
    position: absolute;
  
}
.quote-button:hover{
    background-color: white;
    color: black;
    border:1px solid black;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
}
</style>

<script setup lang="ts">
    
</script>