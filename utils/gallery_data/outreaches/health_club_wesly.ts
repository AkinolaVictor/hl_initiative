import { format_img_assets } from '@/utils/exports';
import { v4 as uuidv4 } from 'uuid';
// uuidv4()
export const health_club_wesly = {
    // id: uuidv4(),
    id: "78ba22be-e380-406b-9b7a-3d8424861001",
    type: ["outreach", "clubs"],
    title: "School Health Club",
    path: "school_club",
    theme: "Prevention of infecteous diseases like typhoid",
    venue: "Wesley Girls Junior Secondary School, Lagos",
    date: "",
    image: "school_club_1.jpg",
    description: `
        A school health outreach aimed at educating secondary school 
        students on the prevention of infectious diseases, promoting 
        hygiene, safe practices, and long-term health awareness.
    `,
    introduction: [
        "We organized a school outreach program during a club event at Wesley Girls Junior Secondary School, to promote health awareness among students.",
        "The session focused on educating students about common infectious diseases such as typhoid and how they spread.",
        "Through interactive discussions, students were guided on practical preventive measures including personal hygiene, safe water consumption, and healthy living habits.",
        "The outreach aimed to empower students with knowledge that supports informed decisions and lifelong health consciousness."
    ],
    objective: [
        "To educate students on the causes, symptoms, and transmission routes of typhoid and common infectious diseases.",
        "To demonstrate effective handwashing techniques and the importance of consuming treated water and hygienically prepared food.",
        "To instill a sense of personal responsibility in maintaining a clean school environment to prevent outbreaks.",
        "To empower students to recognize early warning signs and seek prompt medical attention."
    ],
    impact: [
        `The energy was palpable as students moved from curiosity to active participation. We witnessed a "lightbulb moment" during our practical hygiene demonstrations, where many realized how simple lapses in sanitation lead to serious illness.`,
        `The outreach successfully reached hundreds of students, many of whom committed to becoming "Health Ambassadors" within their families. Seeing their enthusiasm to share this life-saving information confirmed the profound impact of grassroots health education on community wellness.`
    ],
    assets: [
        // {
        //     name: "school_club_1.jpg",
        //     type: "image"
        // },
        ...format_img_assets({name: "school_club", count: 10})
    ],
    colors: {
        bg: 'green',
        color: "white",
        iconbg: 'white'
    }
}   



// PROMPT_SAMPLE TO CHATGPT AND GEMINI

// In my NGO Foundation, we went for an outreach to a secondary school called Wesley Girls Junior Secondary School.

// We went to enlighten the students on antimicrobial resistance (AMR), how to prevent this and things they must set in place to ensure this does not occur with them in their families, communities, and to friends.

// write me a description of less than 31 words to paste on the front page

// Write me an introduction of less than 100 words in max of 4 paragraphs

// Write me a well structured objective section of less than 100 words in max of 4 paragraphs

// Write me a well structured impact and experience section of less than 100 words in max of 3 paragraphs
  



