"use client"
import { supabase } from '@/utils/supabase'
import React, { useEffect, useState } from 'react'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'
import { useSelector } from 'react-redux'

interface Props {}

function Workings(props: Props) {
    const {} = props
    const {setGeneralAlpha} = generalFunctions()
    const {updated_database} = useSelector((state:any)=>state.generalSlice)
    const [count, setCount] = useState(0)
    
    async function fetchData(which:string) {
        // return
        // const {error, data} = await supabase.from("team").select("*")
        const {error, data} = await supabase
        .from(which)
        .select("*")
        .order("created_at", {ascending: true})

        if(error) {
            console.log("error encountered")
            console.log(error)
            return
        } else {
            // console.log("completed", which)
            // console.log({which, data})
            setGeneralAlpha(which, data)
            // setNewData(data)
        }
    }

    async function prepareData() {
        await fetchData("team")
        await fetchData("gallery")
        await fetchData("blog")
        setCount(1)
    }

    useEffect(()=>{
        // console.log("ready for work...")
        prepareData()
    }, [updated_database])


    return (
        <></>
    )
}

export default Workings
