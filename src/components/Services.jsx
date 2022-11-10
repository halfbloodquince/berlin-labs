import { delay, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import CircleFirst from "../svg-components/CircleFirst"
import CircleSecond from "../svg-components/CircleSecond"

export default function Services() {

    const {ref:ref1, inView:inView1} = useInView({threshold:0.5})
    const animation1 = useAnimation()

    useEffect(() => {
        if (inView1) {
            animation1.start({
                opacity:1,
                x:"-50%",
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:0.7
                }
            })
        } 
        if (!inView1) {
            animation1.start( {
                opacity:0,
                x:"-50%",
                y:20,
            })
        }
    }, [inView1])

    return (
        <div className="Services">
            <div className="services--title"><h1>Our Services</h1></div>

                <motion.div animate={animation1} ref={ref1} className="services--1">
                    <CircleFirst />
                    <h4>Analytics Consulting</h4>
                    <p>Our team of experienced anlysts use data science techniques to enable your team to make informed strategic decisions.</p>
                </motion.div>
                <motion.div animate={animation1} className="services--2">
                    <CircleSecond />
                    <h4>Data Visualisation</h4>
                    <p>Our unique use data visualisation tools allow us to create insightful reporting and data visualisation.</p>
                </motion.div>

        </div>
    )
}