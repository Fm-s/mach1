const CancelButton = ({callbackFn}) => {
    
    const styles = {
        borderRadius: "50%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        padding: 0,
        heigh: "20px",
        width: "20px",
        fontWeight: "bold",
        fontSize: "14px",
        cursor: "pointer"
    }
    
    return <button style={styles} onClick={callbackFn}>X</button>
}

export default CancelButton;