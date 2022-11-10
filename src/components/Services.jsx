
import CircleFirst from "../svg-components/CircleFirst"
import CircleSecond from "../svg-components/CircleSecond"

export default function Services() {
    return (
        <div className="Services">
            <div className="services--title"><h1>Our Agency Services</h1></div>
            <div className="services--1">
                <CircleFirst />
                <h4>Analytics Consulting</h4>
                <p>Our team of experienced anlysts use data science techniques to enable your team to make informed strategic decisions.</p>
            </div>
            <div className="services--2">
                <CircleSecond />
                <h4>Data Visualisation</h4>
                <p>Our unique use data visualisation tools allow us to create insightful reporting and data visualisation.</p>
            </div>
        </div>
    )
}