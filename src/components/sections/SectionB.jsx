import Styles from "./sections.module.css";

const SectionB = ({sectionId,title,sectionContent,background}) => {

    if(!background) background = "";

    return <section id={sectionId} className={Styles.container + " " + Styles[background]}>
        <h2>{title}</h2>
        <div className={Styles.content}>{sectionContent}</div>
        </section>;
}

export default SectionB;