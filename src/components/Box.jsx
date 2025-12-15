import styles from './Box.module.css'
import {Coffee, Tag, Handshake } from 'lucide-react'

function Box({ title, desc, icon, extra }) {
    return (
            <section>

                <aside className={styles.title}>

                    <h2>{title}</h2>

                    <div style={{marginTop: '35px', marginBottom: '35px'}}>
                        {icon === 'coffee' ? (
                            <Coffee size={90}></Coffee>
                        ) : (
                            icon === 'tag' ? (
                                <Tag size={90}></Tag>
                            ) : (
                                <Handshake size={90}></Handshake>
                            )
                        )}
                    </div>

                </aside>
                <section className={styles.mainDiv}>
                    <p>{desc}</p>
                    <p>{extra}</p>
                </section>
                
            </section>
        
    )
}

export default Box