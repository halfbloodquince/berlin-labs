import { delay, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import CircleFirst from "../svg-components/CircleFirst"
import CircleSecond from "../svg-components/CircleSecond"

export default function Team() {
    const {ref:ref4, inView:inView4} = useInView({threshold:0.5})
    const animateLeft = useAnimation()
    const animateRight = useAnimation()

    useEffect(() => {
        if (inView4) {
            animateLeft.start({
                x:"-100%",                
                y:"-50%",
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:0.7
                }
            })
            animateRight.start({
                x:"0%",                
                y:"-50%",
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:0.7
                }
            })
        }
        if (!inView4) {
            animateLeft.start({
                x:"-50%",               
                y:"-50%",
            })
            animateRight.start({
                x:"-50%",               
                y:"-50%",
            })
        }
    })


    return (
        <div className="Team">
            <h1 className="team--title">About Us</h1>
            <div className="person--1">
                <motion.div ref={ref4} className="person--1--slide" animate={animateLeft}>
                    <div className="jack--circle"><CircleFirst /></div>
                    <h1>Jack</h1>
                </motion.div>    
            </div>
            <div className="person--2">
                <motion.div className="person--2--slide" animate={animateLeft}>
                    <div className="matt--circle"><CircleSecond /></div>
                    <h1>Matt</h1>
                </motion.div> 
            </div>
            <motion.div className="person--1--about" animate={animateRight}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia quasi porro eius minima modi alias animi odit, corrupti facere! Tempore vel exercitationem ratione iste quam natus consectetur molestias eum.</p>
            </motion.div>
            <motion.div className="person--2--about" animate={animateRight}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae placeat, dolorum odit neque nostrum ut excepturi, voluptas ducimus dignissimos quod expedita magnam quaerat laudantium consequuntur perferendis ex officiis a? Laboriosam?</p>
            </motion.div>
        </div>
        
    )
}