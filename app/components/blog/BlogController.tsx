import React from 'react'

interface Props {}

function BlogController(props: Props) {
    const {} = props
    const categories = ["All", "Malaria", "Sex", "Cancer", "Personal Care", "Rest", "Show More"]

    return (
        <div className='text-[14px]'>
            <p className='font-semibold'>Categories</p>
            <p className='opacity-70 mt-px'>You can view posts by categories</p>

            <div className={`w-full flex justify-start items-center flex-wrap h-auto p-3.5 text-center rounded-[10px] bg-[#cbd5c0] mx-auto mt-7.5`}>
                {
                    categories.map((item, index)=>{
                        if (index===categories.length-1) return (
                            <div 
                                // style={{background: index===0?"#414834":"#51B788"}}
                                key={index}
                                className={`min-w-full w-full h-10 my-2 flex cursor-pointer justify-center items-center rounded-full hover:bg-[#809073] hover:text-white text-blue-700`}
                            >
                                <p className='text-[12px] font-bold'>{item}</p>
                            </div>
                        )

                        return (
                            <div 
                                // style={{background: index===0?"#414834":"#51B788"}}
                                key={index}
                                className={`min-w-30 w-auto h-10 m-2 flex hover:bg-[#414834] hover:text-white cursor-pointer justify-center items-center rounded-full mr-2 ${index===0?"bg-[#414834]":"bg-[#51B788]"} ${index==0?"font-semibold":""} ${index==0?"text-white":""}`}
                            >
                                <p className={``}>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogController
