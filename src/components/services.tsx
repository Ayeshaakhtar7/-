import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { SiAmazonwebservices } from "react-icons/si";
import { BsPersonVideo3 } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { CgAssign } from "react-icons/cg";

function Services(){
    return(
       <main className="main">
        <div className="ser-container">
            {/* top div */}
            <div className="top-dev-ser">
                <h2 className="title-ser">MY Services</h2>
                <p className="des-ser"> I'm a full-stack developer with a passion for
                     building beautiful websites and applications. </p>
            </div>
            {/* button div */}
            <div  className="boxes-com">
                <div className="box">
                <FaLaptopCode className="ser-icon" />
                <h3>Web Developmwnt</h3>
                <span> Blog,E-commeres</span>
                </div>
            </div>
            <div  className="boxes-com">
                <div className="box">
                 <SiAmazonwebservices className="ser-icon" />
                <h3>Web Developmwnt</h3>
                <span> Blog,E-commeres</span>
                </div>
            </div>
            <div  className="boxes-com">
                <div className="box">
                <BsPersonVideo3 className="ser-icon" />
                <h3>Web Developmwnt</h3>
                <span> Blog,E-commeres</span>
                </div>
            </div>
            <div  className="boxes-com">
                <div className="box">
                < GrUserAdmin className="ser-icon" />
                <h3>Web Developmwnt</h3>
                <span> Blog,E-commeres</span>
                </div>
            </div>
            <div  className="boxes-com">
                <div className="box">
                <CgAssign  className="ser-icon" />
                <h3>Web Developmwnt</h3>
                <span> Blog,E-commeres</span>
                </div>
            </div>
            <div  className="boxes-com">
                <div className="box">
                <GiSoundOn  className="ser-icon" />
                <h3>Web Developmwnt</h3>
                <span> Blog,E-commeres</span>
                </div>
            </div>
         </div>
       </main>
    )
}
export default Services 


