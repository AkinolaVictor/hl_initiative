import { format_img_assets } from '@/utils/exports';
import { v4 as uuidv4 } from 'uuid';
// uuidv4()
export const building_public_health_career = {
    // id: uuidv4(),
    id: "Building_a_career_in_public_health",
    type: ["webinar"],
    path: "webinar",
    title: "Building a career in public health",
    // theme: "Is Suicide An Option?",
    venue: "Online",
    date: "",
    image: "public_health_1.jpg",
    description: `
        An inspiring virtual guide for aspiring professionals, exploring diverse career pathways, 
        essential skills, and the global impact of public health initiatives in a rapidly 
        evolving healthcare landscape.
    `,
    introduction: [
        `We hosted an insightful webinar titled "Building a Career in Public Health," designed to illuminate the vast opportunities within this vital sector. By hosting this session online, we connected students and professionals across borders, fostering a global community of future change-makers.`,
        `The event moved beyond traditional clinical roles, showcasing the multidisciplinary nature of public health. From epidemiology to policy advocacy, we explored how passion can be transformed into a structured professional journey that improves the lives of millions worldwide.`,
    ],
    objective: [
        `Career Path Clarification: To define the various sub-disciplines in public health, including biostatistics, environmental health, and community outreach.`,
        `Skill Acquisition: To identify the core competencies—such as data analysis and health communication—required to thrive in global health organizations.`,
        `Mentorship and Networking: To provide strategies for finding mentors and leveraging professional networks like LinkedIn to secure international opportunities.`,
        `Impact Awareness: To demonstrate how public health professionals solve real-world problems, from pandemic response to local sanitation improvements.`
    ],
    impact: [
        `The session was highly interactive, with participants engaging in a lively discussion about the future of global health. Many attendees noted that the webinar demystified the entry requirements for international NGOs and government agencies, turning a seemingly daunting career path into a series of manageable steps.`,
        `The experience was one of empowerment and clarity. By the end of the session, participants reported a 40% increase in their understanding of the field. The webinar successfully sparked a sense of purpose, equipping a new generation with the roadmap needed to build impactful, long-term careers in health.`,
    ],
    assets: [
        ...format_img_assets({name: "public_health", count: 4})
    ],
    colors: {
        bg: '#82b5AA',
        color: "black",
        iconbg: '#d8bd8a'
    }
}   




// We carried out a webinar session on the theme Building a career in public health?

// write me a description of less than 31 words to paste on the front page

// Write me an introduction of less than 100 words in max of 4 paragraphs

// Write me a well structured objective section of less than 100 words in max of 4 paragraphs

// Write me a well structured impact and experience section of less than 100 words in max of 3 paragraphs














