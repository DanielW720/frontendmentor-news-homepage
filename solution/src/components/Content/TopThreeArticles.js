import retroPCs from "./../../assets/images/image-retro-pcs.jpg";
import topLaptops from "./../../assets/images/image-top-laptops.jpg";
import gamingGrowth from "./../../assets/images/image-gaming-growth.jpg";
import styles from './TopThreeArticles.module.css';

const TopThreeArticles = () => {
    return (
        <div className={styles['top-three-articles']}>
            <div className={styles['top-article']}>
                <img src={retroPCs} alt="Retro PCs" />
                <span>
                    <h2>01</h2>
                    <h3><a href="#">Reviving Retro PCs</a></h3>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </span>
            </div>
            <div className={styles['top-article']}>
                <img src={topLaptops} alt="Retro PCs" />
                <span>
                    <h2>02</h2>
                    <h3><a href="#">Top 10 Laptops of 2022</a></h3>
                    <p>Our best picks for various needs and budgets.</p>
                </span>
            </div>
            <div className={styles['top-article']}>
                <img src={gamingGrowth} alt="Retro PCs" />
                <span>
                    <h2>03</h2>
                    <h3><a href="#">The Growth of Gaming</a></h3>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </span>
            </div>
        </div>
    )
}

export default TopThreeArticles;