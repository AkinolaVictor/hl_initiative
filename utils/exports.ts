import { generalFunctions } from "@/app/redux/store_controllers/generalFunctions"


export const allLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Gallery",
        href: "/gallery"
    },
    {
        title: "Our Team",
        href: "/team"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Contact",
        href: "/contact"
    },
    
]

export const cares = [
    {
        title: "Health",
        description: `To be a voice to the less privileged by creating opportunities 
                that supports their voices and ideas. And with positivity towards 
                a more productive future. 
        `,
        icon: "",
        background: "#4f3130"
    },
    {
        title: "Outreaches",
        description: `To be a voice to the less privileged by creating opportunities 
        that supports their voices and ideas. And with positivity towards 
        a more productive future. 
        `,
        icon: "",
        background: "#753742"
    },
    {
        title: "Research",
        description: `To be a voice to the less privileged by creating opportunities 
        that supports their voices and ideas. And with positivity towards 
        a more productive future. 
        `,
        icon: "",
        background: "#aa5042"
    },
    {
        title: "Education",
        description: `To be a voice to the less privileged by creating opportunities 
        that supports their voices and ideas. And with positivity towards 
        a more productive future. 
        `,
        icon: "",
        background: "#d8bd8a"
    },
    {
        title: "Webinars",
        description: `To be a voice to the less privileged by creating opportunities 
        that supports their voices and ideas. And with positivity towards 
        a more productive future. 
        `,
        icon: "",
        background: "#4f3130"
    },
]



export function delayer(props: {working:any, timeout:any, time:number, func:any}){
    const {working, timeout, time, func} = props

    if(working.current){
        clearTimeout(timeout.current)
        working.current = false
    }
    
    working.current = true
    
    timeout.current = setTimeout(() => {
        if(func) func()
        working.current = false
    }, time||500);
}

export const team_members = [
    {
        name: "Oluwaseun John",
        role: "General Manager"
    },
    {
        name: "Ayooluwa Michael",
        role: "Outreach Manager"
    },
    {
        name: "Ubong Gloria",
        role: "Research Developer"
    },
    {
        name: "Blessing Otobong",
        role: "Facilitator Manager"
    },
    {
        name: "Sandi Paramo",
        role: "External Supporter"
    },
]

export function decideblog(item:{title:string, href:string}, path:any){
    if (item.title==="Blog"){
        return path.includes("blog")
    } else if (item.title==="Our Team"){
        return path.includes("team")
    } else if (item.title==="Gallery"){
        return path.includes("gallery")
    } else if (item.title==="Contact" && !path.includes("team")){
        return path.includes("contact") || path.includes("volunteer")
    } else {
        return path===item.href
    }
}



export function overlay_menu_listener(data:{which:string, ScrollTrigger: any, working: any, timeout: any, setGeneralAlpha}){
    const {which, ScrollTrigger, working, timeout, setGeneralAlpha} = data
    
    ScrollTrigger.create({
        trigger: `.${which}`,
        start: "top 80%",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self:any)=>{
            delayer({
                working, 
                timeout, 
                time:400, 
                func: ()=>{
                    // const {setGeneralAlpha} = generalFunctions()
                    if(self.direction>0){
                        setGeneralAlpha("menu_overlay_listener", true)
                    } else {
                        setGeneralAlpha("menu_overlay_listener", false)
                    }
                    console.log("dir", self.direction);
                }
            })
        }
    })
}