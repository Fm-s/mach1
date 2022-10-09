import AnchorLink from 'react-anchor-link-smooth-scroll';
import Styles from "./anchorButton.module.css";

const AnchorButton = ({href,children}) => {
    return <AnchorLink className={Styles.aButton} href={href}>{children}</AnchorLink>
}

export default AnchorButton;