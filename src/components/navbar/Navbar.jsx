import Styles from "./navbar.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = ({sections}) => {

    return (
        <div className={Styles.container}>
            <div className={Styles.logoBox}><img src={process.env.PUBLIC_URL + '/1hcaM-logo.png'} alt="Logo" /></div>
            <div className={Styles.menuOptions}>
                <ul>
                    {sections.map(el=><li><AnchorLink key={Math.random()} href={el.linkId}>{el.name}</AnchorLink></li>)}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;