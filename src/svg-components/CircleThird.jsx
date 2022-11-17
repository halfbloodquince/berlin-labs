import { delay, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function CircleThird() {
    const { ref:ref2, inView:inView2} = useInView({threshold:0.05})
    const animationLeftCircle = useAnimation()
    const animationRightCircle = useAnimation()
    const animationAbout = useAnimation()

    useEffect(() => {
        if (inView2) {
            animationLeftCircle.start({
                opacity:1,                
                x:"0.2%",
                y:0,
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:0.7
                }
            })

            animationRightCircle.start({
                opacity:1,                
                x:"-0.3%",
                y:"0.1%",
                transition: {
                    type:"spring", ease:'easeIn', duration:4, delay:0.7
                }
            })

            animationAbout.start({
                opacity:1,
                transition: {
                    type:"spring", ease:'easeIn', duration:2, delay:3.2
                }
            })


        }

        if (!inView2) {
            animationLeftCircle.start({
                opacity:0,                
                x:"-60%",
                y:30,
            })
            animationRightCircle.start({
                opacity:0,                
                x:"60%",
                y:-30,
            })
            animationAbout.start({
                opacity:0, 
            })
        }
    }, [inView2])

    return (
        <div>
            <div className="about--image">
                <svg ref={ref2} className="about--circle" width="167" height="167" viewBox="0 0 167 167" fill="none">
                    <circle cx="83" cy="84" r="73" fill="black"/>
                    <motion.path animate={animationLeftCircle} d="M142.543 142.543C126.884 158.203 105.646 167 83.5 167C61.3544 167 40.1159 158.203 24.4566 142.543C8.7973 126.884 1.03393e-06 105.646 0 83.5C-1.03393e-06 61.3544 8.79729 40.1159 24.4566 24.4566L83.5 83.5L142.543 142.543Z" fill="url(#paint0_radial_4_6)"/>
                    <motion.path animate={animationRightCircle} d="M24.4566 24.4566C40.1159 8.7973 61.3544 6.33581e-06 83.5 0C105.646 -6.33581e-06 126.884 8.79728 142.543 24.4566C158.203 40.1158 167 61.3544 167 83.4999C167 105.646 158.203 126.884 142.543 142.543L83.5 83.5L24.4566 24.4566Z" fill="url(#paint1_radial_4_6)"/>
                    <defs>
                    <radialGradient id="paint0_radial_4_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130 114) rotate(164.781) scale(140.943)">
                    <stop stopColor="#E72D2D"/>
                    <stop offset="0.864583" stopColor="#FF7A00" stopOpacity="0.92"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_4_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130 114) rotate(164.781) scale(140.943)">
                    <stop stopColor="#E72D2D"/>
                    <stop offset="0.864583" stopColor="#FF7A00" stopOpacity="0.92"/>
                    </radialGradient>
                    </defs>
                </svg>
                {/* <motion.div className="about--title" animate={animationAbout}><h2>About</h2></motion.div> */}
            </div>

        </div>
    )
}