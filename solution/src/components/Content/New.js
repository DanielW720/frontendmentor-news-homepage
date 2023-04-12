import styles from './New.module.css';

const New = () => {
    return (
        <div className={styles.new}>
            <div className={styles.article}>
                <h2>New</h2>
                <span>
                    <h3><a href="#">Hydrogen VS Electric Cars</a></h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </span>
                <hr />
                <span>
                    <h3><a href="#">The Downsides of AI Artistry</a></h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </span>
                <hr />
                <span>
                    <h3><a href="#">Is VC Funding Drying up?</a></h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </span>
            </div>
        </div>
    )
}

export default New;