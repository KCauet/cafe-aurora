import styles from './Cardapio.module.css'
import imgCafe1 from '../Images/Café expresso.webp';
import imgCafe2 from '../Images/Cappuccino.webp';
import imgCafe3 from '../Images/Mocha.webp';

function Cardapio() {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.subDiv}>
                <h1>Cardápio</h1>
                <p style={{
                    fontSize: '35px',
                    marginBottom: '15px'
                }}><strong>Confira os principais cafés disponiveis para você aproveitar</strong></p>
                
                <div className={styles.detail}>
                    <div className={styles.itemsGrid}>

                        <div style={{
                            marginLeft: '25px'
                        }}>
                            <h2>Café Expresso</h2>
                            <div style={{
                                height: '10px',
                                width: '75%',
                                backgroundColor: "var(--corPrincipal)",
                                marginTop: '5px',
                                marginBottom: '20px'
                            }}></div>
                            <img src={imgCafe1} alt="Café Expresso"/>
                        </div>

                        <p>Um café sem enrolação, direto e rápido, perfeito para os que querem uma energia rápida</p>
                        <p>Um café sofisticado e com a dose certa de elegância e energia, ótimo para se abastecer sem perder o toque elegante que queira manter.</p>
                        
                        <div style={{
                            marginLeft: '25px',
                            textAlign: 'end',
                            marginRight: '35px'
                        }}>
                            <h2>Cappuccino</h2>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'end'
                            }}>
                                <div style={{
                                height: '10px',
                                width: '75%',
                                backgroundColor: "var(--corPrincipal)",
                                marginTop: '5px',
                                marginBottom: '20px'
                                
                            }}>
                            </div>
                            </div>
                            
                            <img src={imgCafe2} alt="Cappuccino"/>
                        </div>

                        <div style={{
                            marginLeft: '25px'
                        }}>
                            <h2>Mocha</h2>
                            <div style={{
                                height: '10px',
                                width: '75%',
                                backgroundColor: "var(--corPrincipal)",
                                marginTop: '5px',
                                marginBottom: '20px'
                            }}></div>
                            <img src={imgCafe3} alt="Mocha"/>
                        </div>

                        <p>Um café com bastante apetitoso, se destacando bastante dos outros que temos, sendo uma ótima opção em geral com energia e sabor esplêndidos</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cardapio