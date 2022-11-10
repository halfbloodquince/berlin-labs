import { motion } from "framer-motion"
import Svg from "../svg-components/Svg"

export default function Welcome() {

    const welcomeText = "bespoke data solutions"
    // const welcomeText = "bespoke.data.solutions( )"
    // const letters = Array.from(welcomeText)
    const letters = welcomeText.split(" ")

    const container = {
        hidden: {opacity:0},
        visible: {
            opacity:1, 
            transition:{ staggerChildren:0.87, delayChildren:2.2}
        },
    }

    const child = {
        visible:{
            opacity:1,
            y:0,
            transition:{type:"spring", damping:12, stiffness:100, ease:"linear"}
        },
        hidden:{
            opacity:0, 
            y:10,
            transition:{type:"spring", damping:12, stiffness:100}
        }
    }

    return (
        <div className="welcome">
            <div className="circle"></div>

            <div className="welcome--icon">
                <div className="icon--circle"></div>
                <div className="icon--text--box">
                    <h2>berlin</h2>
                    <h2>labs.</h2>
                </div>
            </div>
            <Svg />
            


            <motion.div className="motion--text--wrapper" variants={container} initial="hidden" animate="visible">
                {letters.map((letter, index) => (
                    <motion.div className="motion--text" style={{marginRight:"3px"}} key={index} variants={child}><h2>{letter === " " ? "\u00A0" : letter}</h2></motion.div>
                ))}
            </motion.div>

            <div className="welcome--arrow">
            <svg className="svg--scroll" width="29" height="28" viewBox="0 0 29 28" fill="none" >
                <path d="M1 14L14.814 27L28 14" />
                <path d="M1 1L14.814 14L28 1" />
            </svg>

            </div>    
        </div>
    )
}