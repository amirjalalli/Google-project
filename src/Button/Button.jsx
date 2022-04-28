import "./Button.css"
const Button = ()=>{
    return(
        <div className="center">
        <div className="btn-content">
            <button className="btn">Google Search</button>
            <button className="btn">I'm Feeling Lucky</button>
        </div>
        <span className="footer-btn">Google offerd in: <a href="#">قارسی</a></span>
        </div>
    )
}

export default Button;