import React from 'react'

interface Props {}

function ConstructionPage(props: Props) {
    const {} = props

    return (
        <div className="w-full h-screen bg-black flex justify-center items-center p-7 text-white text-center">
            <p>This project is currently under construction, to get a preview, you'll have to contact the developer to grant you access...</p>
        </div>
    )
}

export default ConstructionPage
