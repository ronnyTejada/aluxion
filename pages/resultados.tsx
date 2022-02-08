import BusInfo from '../components/BusInfo'
import styles from '../styles/Results.module.css'



const Resultado=()=>{

    return(
        <div className={styles.container}>
           <div className={styles.section__one}>
                <div className={styles.section__one_nav}>
                    <h2>ALUXION</h2>
                    <input type="text" name="" placeholder="¿Cual es tu parada?" id="" />
                </div>

                <div className={styles.section__one_midsection}>
                    <h1>316,  Ruben dario</h1>

                    <div>
                        <span>4</span>
                        <span>2</span>
                    </div>
                </div>
                <hr id={styles.hr}/>

                <div className={styles.section__one_cardSection}>
                    <BusInfo></BusInfo>
                    <BusInfo></BusInfo>
                    <BusInfo></BusInfo>
                    <BusInfo></BusInfo>

                    

                </div>

           </div>
           <div className={styles.section__two}>
           </div>
        </div>
    )

}


export default Resultado