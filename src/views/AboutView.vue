<template>

<div class="bg">
      <div class="text m-lg-5">
        <h3>Želite termin? Kontaktirajte nas i rezervirajte željeni termin.</h3>
      
      </div>
      <div class="contact">
        
        <h4 class="kontakt">Kontakt:</h4>
        <ul>
          <li>
           Tel: <a href="tel:123-456-7890">123-456-7890</a>
          </li>
          <li>
            Mob: <a href="tel:123-456-7890"> 091-456/7890</a>
          </li>
          <li>
            Email: <a href="mailto:mindandbody@gmail.com">mindandbody@gmail.com</a>
          </li>
          <li>Adresa: Kvaternikova 58, 51000 Rijeka</li>
        </ul>
      </div>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="537" height="213" id="gmap_canvas" src="https://maps.google.com/maps?q=kvaternikova%2058&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                
              </div>
            </div>
        </div>

</template>

<style>
.bg{
    margin: 5em;
    background-color: rgba(255, 255, 255, 0.35);
    padding: 3em;

}
  h3{
    color: gray;
    font-size: 20pt;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  li{
    color: gray;
  }
  a:hover{
    color: white;
  }
  .kontakt{
    color: gray;
    font-size: 30pt;
    padding-left: 1em;

  }
  .contact{
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1cm;
    padding: auto;
    margin-bottom: 5em;
  }
  ul{
    list-style-type: none;
  }
  .mapouter{
    position:relative;
    text-align:right;
    height:213px;
    width:537px;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:213px;
    width:537px;
  }

@media (min-width: 414px) and (max-width: 991.98px) {
  .text {
    display: flex;
    align-items: center;
  }
  .iframe{
    width: 279px;
    height: 363px;
  }
 .mapouter{
  position:relative;
  text-align:right;
  height:363px;
  width:279px;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:363px;
    width:279px;
    }
}
</style>
