import profilepic from './Images/ProfilePic.jpeg'
export const About = () =>{
    return <div class="About">
    <div>
    <h2>Biography</h2>
    <p>
    I am Payal Jindal. I am home-maker cum software developer trainee at Mountblue Technologies.<br>
    </br>
    I completed my graduation in B.Tech IT from Maharishi Dayanand University.
    <br></br>
    I have been preparing for SSC CGL Exams for some years and now decided to pursue Coding.
    I am hoping to make it through it and become a successful software Engineer.
    </p>
    </div>
    <div className="AboutImage">
    <img src={profilepic} alt="Logo" />
    <p>I am currently undergoing an internship at MountBlue to become a full-stack developer. Also, I am taking care of my family while pursuing it. For any queries you can send an email to: payal.jindal.19.1@mountblue.tech</p>
    <p>Email: payal.jindal.19.1@mountblue.tech</p>
    </div>
   </div>
}