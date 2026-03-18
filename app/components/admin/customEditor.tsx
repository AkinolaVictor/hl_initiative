"use client"
import React, { useEffect } from 'react'
// import EditorJS from '@editorjs/editorjs'
// import Header from '@editorjs/editorjs'
// import List from '@editorjs/editorjs'
// import EditorjsList from '@editorjs/list'
// import Header from '@editorjs/header'

interface Props {}

function CustomEditor(props: Props) {
    const {} = props
    // const sa

    
    // function initEditor() {
    //     // const EditorJS = require('@editorjs/editorjs')
    //     const editor = new EditorJS({
    //         holder: "editorjs",
    //         tools: {
    //             Header: {
    //                 class: Header,
    //                 config: {
    //                     placeholder: 'Enter a header',
    //                     levels: [2, 3, 4],
    //                     defaultLevel: 3
    //                 },
    //                 inlineToolbar: ["link", "bold"]
    //             },
    //             List: {
    //                 class: EditorjsList,
    //                 inlineToolbar: [
    //                     "link",
    //                     "bold"
    //                 ]
    //             }
    //         }
    //     })
        
    //     const saveBtn = document.querySelector(".createpost")
    //     saveBtn?.addEventListener("click", editorSaver)
    //     // editor.s
    //     function editorSaver() {
    //         editor.save().then((output)=>{
    //             console.log({output})
    //         }).catch((err)=>{
    //             console.log({err})
    //         })
    //     }
    // }


    useEffect(()=>{
        // initEditor()
    }, [])

    return (
        <div 
            id='editorjs'
            className='w-full h-auto mt-1 p-3 rounded-[5px] bg-blue-300k'
            style={{border: "1px solid black"}}
        >

        </div>
    )
}

export default CustomEditor
