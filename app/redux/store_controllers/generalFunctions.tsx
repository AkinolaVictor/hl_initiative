
import { useDispatch } from "react-redux";
import { updateGeneralData } from "../slices/generalSlice";
// import { updateGeneralData } from "@/redux/slices/generalSlice";


    
export function generalFunctions(){
    const dispatch = useDispatch()
    function setGeneralAlpha(which?:string, payload?: any){
        const action = {
            which,
            data: payload
        }
        dispatch(updateGeneralData(action))
    }

    return {
        getGeneralData: function (which?:string){
            function setGeneral(payload?:any){
                const action = {
                    which,
                    data: payload
                }
                dispatch(updateGeneralData(action))
            }
            
            let data = null
            setGeneral((prev?:any)=>{
                let curr = prev
                data = curr
                return curr
            })
            return data
        },
        setGeneralAlpha,
    }
}
