import './form.css'

const Form = () => {
    return ( 
        <section className="form">
            <div className="form__title">
                <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
            </div>
            <div className="form__subtitle">
                Type your email down below and be young wild generation
            </div>
            <form action="">
                <input type="text" placeholder='Add your email here' />
                <button><p>SEND</p></button>
            </form>
        </section>
     );
}
 
export default Form;