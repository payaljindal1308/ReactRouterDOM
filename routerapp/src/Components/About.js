import profilepic from './Images/ProfilePic.jpeg'
export const About = () =>{
    return <div class="About">
    <div>
    <h2>Biography</h2>
    <p>
    I am Payal Jindal. I am home-maker cum Software Developer Trainee at Mountblue Technologies.<br>
    </br>
    I completed my graduation in B.Tech IT from Maharishi Dayanand University.
    <br></br>
    I have been preparing for SSC CGL Exams for some years and now decided to pursue Coding.
    I am hoping to make through it and become a successful Software Engineer.
    </p>
    </div>
    <div className="AboutImage">
    <img src={profilepic} alt="Logo" />
    <p>I am currently undergoing an internship at MountBlue to become a full-stack developer. Here, I am learning about JavaScriot, HTML, CSS, ReactJS, etc. For any queries you can send an email to: payal.jindal.19.1@mountblue.tech</p>
    <p>Email: payal.jindal.19.1@mountblue.tech</p>
    </div>
   </div>
}