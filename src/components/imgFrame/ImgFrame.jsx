const ImgFrame = ({imgPath, altText}) => {
    
    const style = {
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }
    
    return (
            <div style={style}>
                <img style={{height: "100%"}} src={process.env.PUBLIC_URL + imgPath} alt={altText} />
            </div>
            );
}
export default ImgFrame;