<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>

  <header>
    
    <div class="wrapper">
      <h1 class="title">Mind & Body</h1>
     <nav>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Usluge</RouterLink>
        <RouterLink to="/price">Cjenik</RouterLink>
        <RouterLink to="/about">O nama</RouterLink>
       
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
<!-- Copyright -->
<div class="copyright">
    © 2022 Copyright
  </div>
  <!-- Copyright -->
</footer>
</template>

<style>
@import "@/assets/base.css";



#app {
  max-width: 1280px;
  margin: auto;
  padding: 2em;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  text-align: center;
}
header{
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: normal;
  
}

h1{
  text-align: center;
}
h1.title{
    font-weight: 100;
    padding-bottom: 1em;
    justify-content: center;
    align-items: center;
    text-align: center;
}
nav{
  text-align: center;
}

a,
.nav {
  text-decoration: none;
  color: black;
  transition: 0.4s;
}




footer{
    justify-content: center;
    align-items: center;
    bottom:0;
    width:100%;
    height:10px;
}
.copyright{
  display: flex;
  justify-content: center;
}

@media (hover: hover) {
  a:hover {
    opacity: 50%;
  }
}

nav {
  width: 100%;
  font-size: 12px;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {

 padding: 3em;
  
}

nav a:first-of-type {
  border: 0;
}




@media (min-width: 275px) and (max-width: 991.98px) {
 
  header {

    padding-right: calc(var(--section-gap) / 2);
  }
  .wrapper{

    justify-content: center;
    align-items: center;
    text-align: center;
}

  header .wrapper {
    margin: 0em;
  }

  nav{
    font-size: 4pt;
    padding: 0;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
 
  footer{

    bottom:0;
    width:100%;
    height:10px;

  }
  .copyright{
    margin-top: 3em;
    font-size: 6pt;
    text-align: center;
  }
}
</style>
