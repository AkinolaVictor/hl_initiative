"use client"
import React, { useEffect, useState } from 'react'

interface Props {val?:number}

function IsMobile(props: Props) {
    const {val} = props
    const [ifMobile, setIfMobile] = useState(false)

    function checkIfMobile(){
        const isMobile = window.innerWidth < (val||768);
        setIfMobile(isMobile)
    }

    useEffect(()=>{
        checkIfMobile()
    }, [])

    return {ifMobile}
}

export default IsMobile
