import './favorites.css'
import card01 from './../../img/images/promo-01.jpg'
import card02 from './../../img/images/promo-02.jpg'

import FavCard from '../favoritescard/FavoritesCard'

const Favorites = () => {
    return ( 
        <section className="favorites">
            <div className="container">
                <div className="favorites__header">
                    <h2 className="title-2">Young's Favorite</h2>
                </div>
                <div className="favorites__cards">
                   <FavCard img={card01} title="Trending on instagram" />
                   <FavCard img={card02} title="All Under $40" />
                   
                </div>
            </div>
        </section>
     );
}
 
export default Favorites;