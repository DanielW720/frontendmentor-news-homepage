import web3mobile from './../../assets/images/image-web-3-mobile.jpg';
import web3desktop from './../../assets/images/image-web-3-desktop.jpg';
import styles from './Content.module.css';
import New from './New';
import TopThreeArticles from './TopThreeArticles';

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.web3}>
                <img src={web3mobile} alt="Web 3" className={styles.imgmobile} />
                <img src={web3desktop} alt="Web 3" className={styles.imgdesktop} />
                <div className={styles["title-ingress-button"]}>
                    <h1>The Bright Future of Web 3.0?</h1>
                    <div>
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <New />
            <TopThreeArticles />
        </div>
    );
}

export default Content;