import './sale.css'
import saleImg from './../../img/images/promo-img.jpg'


const Sale = () => {
    return ( 
        <section className="sale">
            <div className="sale__flex">
                <img src={saleImg} alt="Promo" />
                <div className="sale__content">
                    <div className="sale__title">
                        <span className="highlight highlight--sale">
                            <span>PAYDAY</span>
                        </span> 
                        SALE NOW
                    </div>
                    <div className="sale__subtitle">
                        Spend minimal $100 get 30% off
                        voucher code for your next purchase
                    </div>
                    <div className="sale__date">
                        <span>1 June - 10 June 2021</span>
                        *Terms & Conditions apply
                    </div>
                    <a href="#!" className='sale__btn-link'>show now</a>
                </div>
            </div>
        </section> );
}
 
export default Sale;