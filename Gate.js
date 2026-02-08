"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Gate(){

const router = useRouter();
const [noPos,setNoPos]=useState({top:"65%",left:"55%"});
const [yesScale,setYesScale]=useState(1);

const moveNo=()=>{
 setNoPos({
   top:Math.random()*70+"%",
   left:Math.random()*70+"%"
 });
 setYesScale(prev=>Math.min(prev+0.1,1.7));
}

return(
<div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0a08] via-[#2a120f] to-black overflow-hidden">

<motion.div
 initial={{opacity:0,y:30}}
 animate={{opacity:1,y:0}}
 className="text-center glass p-10 rounded-3xl shadow-2xl"
>

<h1 className="text-5xl mb-10 gold-text">
Should we continue, Sushii?
</h1>

<div className="relative h-40">

<motion.button
whileTap={{scale:.9}}
animate={{scale:yesScale}}
onClick={()=>router.push("/password")}
className="px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_40px_rgba(255,200,120,0.6)]"
>
YES 🍫
</motion.button>

<motion.button
onMouseEnter={moveNo}
onTouchStart={moveNo}
animate={noPos}
transition={{type:"spring",stiffness:320}}
className="absolute px-8 py-3 rounded-full bg-neutral-800"
>
NO 😈
</motion.button>

</div>
</motion.div>
</div>
);
}
