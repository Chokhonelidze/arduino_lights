
import "./software.css";
export default function Software(){
    return <div className="software">
        <div className="code">
            <a href="lights/code/arduino_lights.ino" className="btn btn-primary m-3" role="button">Download</a>
        <iframe title='Lights' src="lights/codes/arduino_lights.html" className="iframe"></iframe>
        </div>
    </div>
}