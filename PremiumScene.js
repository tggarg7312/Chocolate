"use client";

import { motion } from "framer-motion";

export default function PremiumScene(){

const letters="Sushii".split("");

return(
<div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#140605] to-black overflow-hidden">

{[...Array(20)].map((_,i)=>(
<motion.div
key={i}
className="absolute text-pink-400"
initial={{y:120,opacity:0}}
animate={{y:-700,opacity:[0,1,0]}}
transition={{duration:8,repeat:Infinity,delay:i*.3}}
style={{left:Math.random()*100+"%"}}
>
❤️
</motion.div>
))}

<motion.div
initial={{scale:.5,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:1.3}}
className="grid grid-cols-4 gap-3 bg-[#3b221d] p-5 rounded-2xl shadow-2xl"
>
{[...Array(8)].map((_,i)=>(
<motion.div
key={i}
initial={{y:40,opacity:0}}
animate={{y:0,opacity:1}}
transition={{delay:1+i*.08}}
className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#6b3e34] to-[#2a1512] relative"
>
{i===4 && (
<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{delay:2}}
className="absolute w-6 h-6 bg-black rounded-full -top-2 -right-2"
/>
)}
</motion.div>
))}
</motion.div>

<div className="flex mt-16 text-6xl font-semibold gold-text">
{letters.map((letter,index)=>(
<motion.span
key={index}
initial={{y:120,opacity:0,rotate:20}}
animate={{y:0,opacity:1,rotate:0}}
transition={{
delay:2.4+index*.25,
type:"spring",
stiffness:120
}}
className="mx-1"
>
{letter}
</motion.span>
))}
</div>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:4.5}}
className="mt-6 text-xl text-neutral-300"
>
Happy Chocolate Day 🍫 — Life is infinitely sweeter with you.
</motion.p>

</div>
);
}
