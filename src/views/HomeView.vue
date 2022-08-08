<template>

  <section id="home" class="d-flex flex-column justify-content-center align-items-center">
    
    <div class="card">
      <div class="card-body">
          <div class="container">
         <div class="row homeFormat">
          <div class="col-lg-6">
              <div class="textFormat">
                    <div class="textTitle">
                     <h1 class="hi">Hi,</h1>
                    </div>
                    <div class="textParagraph">
                      <p>
                        I am an aspiring software engineer. I have done BSc in Computer Science & Engineering from East West University. Currently, I am working on improving my programming skill sets.
                        I have an eye for details and try to find flaws in things. I am also highly enthusiastic about technology. I have made contents about tech which are available on <span><a href="https://www.youtube.com/c/HardwareSentinels">YouTube</a></span> .
                        I also like cycling, photography and watching movies.
                     </p>
                    </div>
              </div>
          </div>
          <div class="col-lg-6  imageTile">
                <div class="">
                  <img class="imagehome" src="../assets/img/homeImage.jpg" alt="">
                </div>
          </div>        
    </div>

    </div>

      </div>
    </div>
    
   
    
  </section>


    <!-- <div class="container1">
      <h1>hello world</h1>
    </div> -->






</template>

<script>



export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style>
.card{
  margin-left: 150px;
  margin-bottom: 50px;
  box-shadow: #0d1a2b;
  border: none;
}
.card-body{
  background-color: #0d1a2b;
   
  
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}



#home{
  height: 100vh;
  background-color: #0d1a2b;
}

  /* .container1{
    height:100vh;
    background-color: #071a34;
  } */
 
 .hi{
  color: #43b268;
  margin-right:470px;
  font-size:xx-large;
 }
 
  .homeFormat{
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
  }
  .textFormat{
    padding-top:9px;
    color:aliceblue;
    font-size: large;
    margin-left: 30px;

  }

  .textParagraph{
    text-align: justify;
    display:flex;
    /* width:50%; */
    /* margin-left:250px; */


  }
  .nameTitle{
    color:#7b9bc5;
    font-weight: 600;
  }
  .imageTile{

    align-items: between;
    margin-bottom: 40px;
  }
  .imagehome{
      max-width: 100%;
      border-radius:2px;
  }

</style>