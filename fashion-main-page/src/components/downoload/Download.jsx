import './download.css'
import appstoreImg from './../../img/icons/app-store.png'
import googleplayImg from './../../img/icons/google-play.png'
import promoImg from './../../img/images/vouchers-img.png'

const Download = () => {
    return ( 
        <section className="download">
            <div className="download__flex">
                <div className="download__content">
                    <div className="download__title">
                        DOWNLOAD APP &
                        GET THE VOUCHER!
                    </div>
                    <div className="download__subtitle">
                        Get 30% off for first transaction using
                        Rondovision mobile app for now.
                    </div>
                    <div className="download__link">
                        <a href="#!"><img src={appstoreImg} alt="" /></a>
                        <a href="#!"><img src={googleplayImg} alt="" /></a>
                    </div>
                </div>
                <div className="download__img">
                    <img src={promoImg} alt="Promo" />
                </div>
            </div>
        </section>
     );
}
 
export default Download;