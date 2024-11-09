import Image from "next/image";
import "../style/hero.css";

 
function Hero(){
    return(
       <div className="hero-container">
            <div className="hero-boxes-com">
                {/* left */}
                <div>
                   <Image src={"/pic1.png"}
                   width={200}
                   height={200}
                   className="hero-image"
                   alt="profile"/>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I'm Ayesha Rana</h1>
                    <p className="des-hero">I am a student of GIAIC,pursing a course in artificaial intellignt,
                     web 3.0 & Metaverse passionate about technology and constantly learning
                      new skill to stay up-to-date  with a latiest innovations.</p>
                     
                       <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
       </div>
    )
}
export default Hero