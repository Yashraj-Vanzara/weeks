import { useEffect,useState } from "react";

export default function useIsOnline() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        handleonline()
    },[])

    function handleonline(){
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })

        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })
    }
    return isOnline
}