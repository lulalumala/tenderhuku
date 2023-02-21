import styles from "./Hero.module.css"
import SearchIcon from '@mui/icons-material/Search';



const Hero = () => {
    return (
        <div className={styles.herosection}>
            <div className={styles.hero} >
                <div className={styles.find}>
                    <h3 className={styles.title} >Search tenders</h3>

                    <div className={styles.search} >
                        <input className={styles.input} placeholder='search' />
                        <SearchIcon className={styles.icon} />
                    </div>

                    <select className={styles.select} >
                        <option disabled selected>Select Category</option>
                        <option>Manufacturing</option>
                        <option>Consultancy</option>
                        <option>Government</option>
                        <option>Technology</option>
                        <option>Educational</option>
                    </select>
                    <div>
                        <button className={styles.button} >Search</button>
                    </div>
                </div>
                <div className={styles.simple}>
                    <h3 className={styles.title}>Simple as 123</h3>
                    <div className={styles.spananditems} >
                        <div className={styles.span}>1</div>
                        <p>Register</p>
                    </div>
                    <div className={styles.spananditems} >
                        <div className={styles.span}>2</div>
                        <p>Find tender</p>
                    </div>
                    <div className={styles.spananditems} >
                        <div className={styles.span}>3</div>
                        <p>Apply tender</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero