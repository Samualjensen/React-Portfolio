import gitPic from "../assets/github.png"
import linkPic from "../assets/linkedin.png"


export default function Footer() {

    return (
        <div className="footer--pin">
            <a href='https://github.com/Samualjensen' target="_blank" rel="noreferrer noopener" className="footer">
                <img className='gitPic' src={gitPic} alt='GitHub icon' />
            </a>
            <a href='https://www.linkedin.com/in/sam-jensen-b03b0a254/' target="_blank" rel="noreferrer noopener" className="footer">
                <img className='gitPic' src={linkPic} alt='LinkedIn icon' />
            </a>
        </div>
    )

}