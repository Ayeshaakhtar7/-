
import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";


function About(){
    return(

        <div className="header-container">
               <div className="header-boxes-con">
                {/* left */}
                  <div>
                  <Image src={"/pic1.png"}
                   width={200}
                   height={200}
                   className="header-image"
                  alt="Profile"/> 
                 <div className="social-icon">
                <Link href={""}> <FaYoutube className="s-icon1"/></Link>
                 <Link href={""}> <FaFacebook  className="s-icon2"/></Link>
                 <Link href={""}> <FaInstagram  className="s-icon3"/></Link>
                 </div>
                  </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About us</h1>
                    <p className="des-hero">I am a student of GIAIC,pursing a course in artificaial intellignt,
                     web 3.0 & Metaverse passionate about technology and constantly learning
                      new skill to stay up-to-date  with a latiest innovations. </p>

                </div>
               </div>
        </div>
    )
}
export default About