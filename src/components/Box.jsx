import styles from './Box.module.css'

function Box({ title, desc }) {
    return (
            <section>

                <aside className={styles.title}>
                    // aqui vem um icone pra categoria
                    <h2>{title}</h2>
                </aside>
                <section className={styles.mainDiv}>
                    <p>{desc}</p>
                </section>
                
            </section>
        
    )
}

export default Box