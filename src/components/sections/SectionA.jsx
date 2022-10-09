import Styles from "./sections.module.css";

const SectionA = ({sectionId,leftContent,rightContent,background}) => {

    if(!background) background = "";

    return (
        <section id={sectionId} className={Styles.container + " " + Styles[background]}>
            <div className={Styles.leftContent}>{leftContent}</div>
            <div className={Styles.rightContent}>{rightContent}</div>
        </section>
        );
}

export default SectionA;