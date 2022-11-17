import { delay, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

import CircleThird from "../svg-components/CircleThird"

export default function About() {

    const {ref:ref3, inView:inView3} = useInView({threshold:1})
    const animateText = useAnimation()
    const fadeIn1 = useAnimation()
    const fadeIn2 = useAnimation()
    const fadeIn3 = useAnimation()
    const fadeIn4 = useAnimation()

    useEffect(() => {
        if (inView3) {
            animateText.start({
                opacity:1,
                transition: {
                    type:"spring", ease:'easeIn', duration:1.5, delay:0.1
                }
            })
            fadeIn1.start({                
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2.5 }
            })
            fadeIn2.start({                
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2.6 }
            })
            fadeIn3.start({                
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2.7 }
            })
            fadeIn4.start({                
                opacity:1, 
                x:0,
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:2.8 }
            })
        }
        if (!inView3) {
            animateText.start({
                opacity:0,
            })
            fadeIn1.start({
                opacity:0,
                x:"-13%",
                y:-20,
            })
            fadeIn2.start({
                opacity:0,
                x:"-13%",
                y:0,
            })
            fadeIn3.start({
                opacity:0,
                x:"13%",
                y:0,
            })
            fadeIn4.start({
                opacity:0,
                x:"13%",
                y:-20,
            })

        }
    })

    return (
        <div className="About">
            <CircleThird />

            <div className="about--flex">
                <motion.div  animate={animateText} className="about--main--text">
                    <h2>Working with us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi id, temporibus iusto illum dolorem dolore cumque inventore ut minima, accusamus eos eius minus aut doloribus reiciendis magni possimus iure! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi id, temporibus iusto illum dolorem dolore cumque inventore ut minima, accusamus eos eius minus aut doloribus reiciendis magni possimus iure!</p>
                </motion.div>

                <div className="about--ref" ref={ref3}></div>
                <div className="about--sections">
                    <motion.div className="about--section--1" animate={fadeIn1}>
                        <div className="number--icon">1</div>
                        <p>This is a cool thing that we do</p>
                    </motion.div>
                    <motion.div className="about--section--2" animate={fadeIn2}>
                        <div className="number--icon">2</div>
                        <p>This is another cool thing that we do</p>
                    </motion.div>
                    <motion.div className="about--section--3" animate={fadeIn3}>
                        <div className="number--icon">3</div>
                        <p>Then, we will get you by doing this</p>
                    </motion.div>
                    <motion.div className="about--section--4" animate={fadeIn4}>
                        <div className="number--icon">4</div>
                        <p>And then we will do this</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}