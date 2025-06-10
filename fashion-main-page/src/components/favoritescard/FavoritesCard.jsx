import styles from './FavoritesCard.module.css'
import arrowimg from './../../img/icons/arrow.svg'

const FavCard = ({title,img}) => {
    return ( 
        <div className={styles.card}>
        <a href="#!" className={styles.card__link}></a>
        <img className={styles.card__img} src={img} alt="Category" />
        <div className={styles.card__body}>
            <div className={styles.card__text}>
                <div className={styles.card__title}>
                    {title}
                </div>
                <div className={styles.card__muted}>
                    Explore Now!
                </div>
            </div>
            <div className={styles.card__icon}>
                <img src={arrowimg} alt="Arrow" />
            </div>
        </div>
    </div>
     );
}
 
export default FavCard;