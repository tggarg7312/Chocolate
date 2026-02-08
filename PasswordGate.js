"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PasswordGate(){

const [password,setPassword]=useState("");
const [error,setError]=useState("");
const router = useRouter();

const handleSubmit=()=>{
 if(password==="2023"){
   router.push("/chocolate");
 }else{
   setError("Wrong password... try our special year ❤️");
 }
}

return(
<div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#140605] to-black">

<motion.div
initial={{opacity:0,scale:.9}}
animate={{opacity:1,scale:1}}
className="glass p-10 rounded-3xl text-center w-[90%] max-w-md"
>

<h2 className="text-4xl mb-4 gold-text">
Private Access
</h2>

<p className="mb-6 text-neutral-300">
Hint: our special year
</p>

<input
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
placeholder="Enter password"
className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-center mb-4 outline-none"
/>

<motion.button
whileTap={{scale:.95}}
onClick={handleSubmit}
className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 font-semibold shadow-lg"
>
Unlock 🍫
</motion.button>

{error && (
<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
className="text-red-400 mt-4"
>
{error}
</motion.p>
)}

</motion.div>
</div>
);
}
