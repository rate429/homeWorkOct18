import "./css/index.css"

// The about-me class allows for the styling of the div element
// section is for containing my classes and my name 
export default function Home() {
    return (
            <><div className="about-me">
            <h1>About Me</h1>
            <p>In this class I have learned how to use javascript/typescript web framworks. I have also learned how to use tailwind css</p>
        </div><section>
                <h2>My Clases</h2>
                <ul>
                    <li>Auto basic</li>
                    <li>ADV English 1</li>
                    <li>ADV geo</li>
                    <li>JROTC</li>
                    <li>GPS</li>
                    <li>Spanish 2</li>
                    <li>Computer Sci Fundmentals</li>
                    <li>ADV Bio</li>
                </ul>
                <h3>Riley Rager, Period 7</h3>
            </section></>
        
    );
}