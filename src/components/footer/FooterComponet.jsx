const FooterComponent = ({children}) => {
    
    const styles = {
            width: "100%",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "aliceblue"
    };

    const textStyle = {
            fontSize: "24px",
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: "bold",
            margin: "0px",
            height: "fit-content"
    };
    
    return <div style={styles}><h3 style={textStyle}>{children}</h3></div>
}
export default FooterComponent;