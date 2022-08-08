<template>
   <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Shifat Bin Habib</h4>
            
              <ul>
                <li>25/D,Omar Ali Lane, Dhaka-1219, Bangladesh</li>
                 <li>01521436358</li>
                <li>shifat514@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor Of Science in Computer Science & Engineering</h4>
              <h5>2017 - 2021</h5>
               <h6>[GPA: 3.50 of 4.00]</h6>
              <p><em>East West University, Dhaka, Bangladesh</em></p>
             <p>Achievements: Merit Scholarship [2017]</p>
            </div>
            <div class="resume-item">
              <h4>Higher Secondary Certificate</h4>
              <h5>2015 - 2016</h5>
              <h6>[GPA: 5.00 out of 5.00]</h6>
              <p><em>Dhaka College, Dhaka, Bangladesh</em></p>
             
            </div>
            <div class="resume-item">
              <h4>Secondary School Certificate</h4>
              <h5>2010 - 2014</h5>
              <h6>[GPA: 5.00 out of 5.00]</h6>
              <p><em>Motijheel Govt. Boys' High School, Dhaka, Bangladesh</em></p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>   
            <div class="resume-item">
              <h4>Frontend Developer</h4>
              <h5>March, 2022 - July, 2022</h5>
              <p><em>Euromarks Global LTD, United Kingdom</em></p>
              <ul>
                <li>Have worked mainly with NopCommerce. My task was to work on a website which was built on NopCommerce.</li>
                <li>Had to fix all the styling issues and make an admin dashboard for the vendor users.</li>
                <li>Also had to populate all the data for the website and did necessary testings.</li>
                <li>Worked with JS, Jquery, html and css. I also had to learn about MVC and some asp.net basics as the website's backend was built with these.</li>
              </ul>
            </div>

            <div class="resume-item">
              <h4>Content Creator</h4>
              <h5>2018 - Present</h5>
              <p><em>Hardware Sentinels, YouTube</em></p>
              <ul>
                <li>As I have interest in tech, me with some of my friends started an tech YouTube Channel back in 2018.</li>
                <li>Made video contents about PC,smartphones, gadgets, tech news and rumors.</li>
                <li>Made scripts about tech, recorded videos and put our contents in YouTube. We also maintain a large community in YouTube.</li>
                <li>I also have to communicate with different tech brands, distributors about sponsorship, review units and events. </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resumedownload d-flex justify-content-center">
            <a href="https://drive.google.com/file/d/1pgOQKEukotXcRyFeconetPEbP70gAU4_/view?usp=sharing" class="btn btn-primary">Download Resume</a>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

.resumedownload{
  margin-top: 30px;
}

.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #050d18;
}

.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #1f5297;
  position: relative;
}

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #050d18;
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: #e4edf9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
}

.resume .resume-item ul li {
  padding-bottom: 10px;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #1f5297;
}
</style>