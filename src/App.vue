<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>

  <header >
    
    <div class="wrapper ">
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

  <footer class="">
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
  padding: 2rem;
  font-weight: normal;
}

h1{
  text-align: center;
}
h1.title{
    font-weight: 100;
    padding-bottom: 1em;
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
    position:absolute;
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



@media (min-width: 414px) and (max-width: 991.98px) {
 

  header {

    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    margin: 1em;
  }

  nav{
    font-size: 6pt;
    padding: 0;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
 
  footer{
    position:absolute;
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
