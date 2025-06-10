import './footer.css'
import fb from './../../img/socials/fb.svg'
import inst from './../../img/socials/inst.svg'
import tw from './../../img/socials/tw.svg'
import inImg from './../../img/socials/in.svg'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__title">
                        <h1>FASHION</h1>
                        <p>Complete your style with awesome <br /> clothes from us.</p>
                        <div className="socials">
                            <img src={fb} alt="social" />
                            <img src={inst} alt="social" />
                            <img src={tw} alt="social" />
                            <img src={inImg} alt="social" />
                        </div>
                    </div>
                    <div className="footer__list">
                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Support</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="footer__list">
                        <ul>
                            <li>Quick Link</li>
                            <li>Share Location</li>
                            <li>Orders Tracking</li>
                            <li>Size Guidet</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer__list">
                        <ul>
                            <li>Legal</li>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;