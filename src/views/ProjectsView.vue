<template>
  <section id="portfolio" class="portfolio section-bg">
      <div class="container portfolio-container">

        <div class="section-title portfoliotitle">
          <h2>Projects</h2>
          <p>Here are some pet projects I have worked on attached with  Github links. </p>
        </div>


        <div class="row portfoliosection" data-aos="fade-up" data-aos-delay="100">

            <div class="col-lg-4 item">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="../assets/img/tech_community.png" alt="Card image cap">
                    <div class="card-body1">
                        
                       
                       
                    </div>
                     <div class="cover">
                             <p class="card-text">
                            A tech community website for tech enthusiasts, where they can post about techs, news, share their opinions about new
                            tech, and also review products. They can also delete their own posts, add comments, and like to other posts.
                            <br>Language: PHP, HTML, CSS, SQL.
                            </p>
                            <a href="https://github.com/shifat514/Tech-Community-Website" class="btn btn-primary mt-auto"><i class="bi bi-github">&nbsp;</i>Github </a>
                        </div>
                    </div>
            </div>




            <div class="col-lg-4 item">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="../assets/img/tic-tac-toe.png" alt="Card image cap">
                    <div class="card-body1">
                        
                       
                       
                    </div>
                     <div class="cover">
                             <p class="card-text">
                             A simple tic tac toe game with Vanilla Javascript and DOM manipulation.
                            <br>Language: Javascript, HTML, CSS.
                            
                            </p>
                            <a href="https://github.com/shifat514/Tic_Tac_Toe" class="btn btn-primary mt-auto "><i class="bi bi-github">&nbsp;</i>Github </a>
                        </div>
                    </div>
            </div>


            <div class="col-lg-4 item">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="../assets/img/movie-streaming.png" alt="Card image cap">
                    <div class="card-body1">
                        
                       
                       
                    </div>
                     <div class="cover">
                             <p class="card-text">
                             This is just a frontend of a movie streaming website using HTML, CSS and Bootstrap.
                            <br>Language: HTML, CSS, Bootstrap.
                            
                            </p>
                            <a href="https://github.com/shifat514/Movie-streaming" class="btn btn-primary "><i class="bi bi-github">&nbsp;</i>Github </a>
                        </div>
                    </div>
            </div>

            
        </div>

      </div>
    </section>
   
</template>

<script>
export default {

}
</script>

<style>





 .cover {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(41, 63, 53, 0.75);
  transition:opacity 0.20s ease-in;
  opacity:0;
  padding-top:20px;
  color:#fff;
  text-shadow:1px 1px 1px rgba(0,0,0,0.15);
  justify-content: flex-end;
  
  }
.item:hover .cover {
  opacity:50;
  
}
  
#portfolio{
    margin-top:40px;
  margin-bottom: 30px;
  height:100vh;
  background-color:aliceblue;
}

.portfoliotitle{
    margin-top: 100px;
}
.portfoliosection{
    margin-top: 50px;
}

.card-img-top{
    padding:20px;
    border-radius: 6px;
}


.card{
   
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border:none;
    background-color: aliceblue;
    
    
    
}
.card-body1{
    background-color: aliceblue;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom:20px;
    height: 100%;
    display: flex;
    flex-direction:column;
    
}

.card-text{
    text-align:justify;
    padding-top: 20px;
    padding-right:20px;
    padding-left: 20px;
   
}

.btn-primary{
    margin-top: auto;
    align-self: end;
    
    border-radius:3px;
    border:none;
    justify-content: flex-end;
    
}
.btn:hover{
    background-color:#41b983;
    justify-content: flex-end;
    
    
}
.card-title{
    font-weight:bold;
    color:#173B6C;
}




</style>