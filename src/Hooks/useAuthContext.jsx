import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/config";

const useAuthContext = ()=>{

    const {user, setUser, authIsReady, setAuthIsReady} = useContext(AuthContext);

    useEffect(()=>{
        auth.onAuthStateChanged((res)=>{
            setUser(res);
            setAuthIsReady(true);
        })
    },[])

    return {user,setUser,authIsReady};
}
export default useAuthContext;