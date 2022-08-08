<template>
  <nav>
    <div class="main-container">
    <header id="header">
      <div class="d-flex flex-column">
  
        <div class="profile">
          <img src="./assets/img/shifat_habib.jpg" alt="" class="img-fluid rounded-circle">
          <h1 class="text-light">Shifat Habib</h1>
          <div class="social-links mt-3 text-center">
            <a href="https://www.facebook.com/shifat.habib.3" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/shifat__habib/?hl=en" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://github.com/shifat514" class="github"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/shifat-habib-919b40159/" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
  
        <div id="navbar" class="nav-menu navbar">
          <ul>
            <li> <router-link class="nav-link active" to="/"><i class="bi bi-house"></i><span>Home</span></router-link></li>
            <li> <router-link class="nav-link " to="/about"><i class="bi bi-person-circle"></i><span>About</span></router-link></li>
            <li><router-link class="nav-link" to="/resume"> <i class="bi bi-file-arrow-down"></i><span>Resume</span></router-link></li>
            <li><router-link class="nav-link" to="/projects"><i class="bi bi-bookmark-fill"></i> <span>Projects</span></router-link></li>
            <li><router-link class="nav-link" to="/contacts"> <i class="bi bi-envelope"></i> <span>Others</span></router-link></li>
          </ul>
        </div><!-- .nav-menu -->
      </div>
    </header>
   
     
  </div>
     
  </nav>
  <router-view/>
</template>

<style>

/* body {
  font-family: "Open Sans", sans-serif;
  color: #272829;
} */

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  color: #42b983;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}



#header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: #0d1a2b;
    overflow-y: auto;
    padding-top: 150px;
  }
  
  #header .profile img {
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid #2c2f3f;
  }
  
  #header .profile h1 {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    -moz-text-align-last: center;
    text-align-last: center;
    font-family: "Poppins", sans-serif;
  }
  
  #header .profile h1 a,
  #header .profile h1 a:hover {
    color: #fff;
    text-decoration: none;
  }
  
  #header .profile .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #212431;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }
  
  #header .profile .social-links a:hover {
    background: #43b268;
    color: #fff;
    text-decoration: none;
  }
  
  #main {
    margin-left: 300px;
  }
  
  .nav-menu {
  padding: 30px 0 0 0;
}

.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu>ul>li {
  position: relative;
  white-space: nowrap;
}

.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: #a8a9b4;
  padding: 12px 15px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
}

.nav-menu a i,
.nav-menu a:focus i {
  font-size: 24px;
  padding-right: 8px;
  color: #6f7180;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
  text-decoration: none;
  color: #fff;
}

.nav-menu a:hover i,
.nav-menu .active i,
.nav-menu .active:focus i,
.nav-menu li:hover>a i {
  color: #43b268;
}

/* Mobile Navigation */
.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  background-color: #42b983;
  color: #fff;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 50px;
  cursor: pointer;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}


section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background: #f5f8fd;
}

.section-title {
  padding-bottom: 30px;
  text-align: left;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #173b6c;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #42b983;
  bottom: 0;
  left: 0;
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #173b6c;
}
.about .content h5 {
  font-weight: 700;
  font-size: 20px;
  color: #173b6c;
  padding-bottom:5px ;
  text-align: left;
}


.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.about .content ul strong {
  margin-right: 10px;
}

.about .content ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #42b983;
  line-height: 0;
}

.about .content p:last-child {
  margin-bottom: 0;
}


</style>
