import styles from './Segmento.module.css';

function Segmento( {extras, titulo, desc, img, allowImg} ) {

    return (
        <div className={styles.mainDiv}>
            
            {allowImg === true ? (
                <picture>
                    <img src={img} style={{
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${img})`,
                        height: '660px',
                        width: '100%'
                    }}/>
                </picture>
            ) : (
                <p></p>
            )}
            

            <section className={styles.sectionDiv}>
                <h1>{titulo}</h1>
                <br />
                <p>{desc}</p>
                {extras}
            </section>

            

            
        </div>
    )
}

export default Segmento