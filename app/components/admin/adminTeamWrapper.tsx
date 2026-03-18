import React, { useState } from 'react'
import EachAdminTeam from './eachAdminTeam'
import { useSelector } from 'react-redux'

interface Props {}

function AdminTeamWrapper(props: Props) {
    const {} = props
    const {team} = useSelector((state:any)=>state.generalSlice)
    const [showConfirm, setShowConfirm] = useState(false)
    const [action, setAction] = useState<any>(()=>{})

    function ConfirmDelete() {
        return (
            <div className={`w-full h-screen bg-black ${showConfirm?"flex":"hidden"} justify-center items-center`}>
                <div className='w-full max-w-125 h-auto p-10 bg-white text-black'>
                    <p className='mb-10 text-center font-semibold'>Are you sure you want to delete this content?</p>
                    <div className='flex gap-15'>
                        <p onClick={()=>{setShowConfirm(false); setAction(()=>{console.log("exits")})}} className='px-20 py-4 cursor-pointer rounded-[10px] bg-gray-700 text-white'>No</p>
                        <p onClick={()=>{action()}} className='px-20 py-4 cursor-pointer rounded-[10px] bg-red-700 text-white'>Yes</p>
                    </div>
                </div>
            </div>
        )
    }

    if(!team.length){
        return (
            <div className='w-full h-auto p-10 flex justify-center bg-white text-black'>
                <p>No data yet...</p>
            </div>
        )
    }

    return (
        <div className='w-full h-auto relative'>
            <ConfirmDelete />
            <div className={`${showConfirm?"hidden":"flex"} w-full h-auto p-10 flex-wrap justify-center items-center gap-10`}>
                {
                    team.map((item: any, index: number)=>{
                        return <EachAdminTeam 
                            key={index} 
                            data={item}
                            setShowConfirm={setShowConfirm}
                            setAction={setAction}
                        />
                    }).reverse()
                }
            </div>
        </div>
    )
}

export default AdminTeamWrapper
