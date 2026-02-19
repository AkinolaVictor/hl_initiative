import { format_img_assets } from '@/utils/exports';
import { v4 as uuidv4 } from 'uuid';
// uuidv4()
export const antimicrobial_resistance = {
    // id: uuidv4(),
    id: "AMR_Campaign_in_Collaboration_With_Millenium_Fellowship",
    type: ["outreach"],
    path: "amr",
    title: "AMR Campaign in Collaboration With Millenium Fellowship",
    theme: "Antimicrobial Resistance (AMR) Campaign",
    venue: "Wesley Girls Junior Secondary School, Lagos",
    date: "",
    image: "amr_1.jpg",
    image_alt: "amr_4.jpg",
    description: `
        A health outreach at Wesley Girls Junior Secondary School focused on educating 
        students about antimicrobial resistance, its prevention, and responsible practices 
        to protect families, communities, and future generations.
    `,
    introduction: [
        "We conducted a health outreach at Wesley Girls Junior Secondary School to raise awareness about antimicrobial resistance (AMR).",
        "The session aimed to help students understand what AMR is, how it develops, and why it poses a serious public health threat.",
        `Recognizing that young students are powerful influencers within their homes, we aimed to demystify how "superbugs" develop. By simplifying complex medical concepts, we prepared them to lead the charge in preserving the efficacy of life-saving medicines.`,
        // "The outreach aimed to empower students with knowledge that supports informed decisions and lifelong health consciousness."
    ],
    objective: [
        "Knowledge Transfer: To define AMR and explain the biological process of how bacteria evolve to resist standard treatments.",
        "Advocacy for Stewardship: To discourage self-medication and the misuse of antibiotics within families and local communities.",
        "Prevention Strategies: To emphasize the link between personal hygiene, vaccinations, and reducing the need for antimicrobial drugs.",
        "Community Leadership: To equip students with the tools to educate friends and relatives on completing prescribed dosages."
    ],
    impact: [
        `The students at Wesley Girls showed remarkable curiosity, asking insightful questions about common household habits like sharing leftover prescriptions. We observed a significant shift in perspective as they realized that improper drug use affects everyone, not just the individual.`,
        `The session was both vibrant and sobering. By the end, the students pledged to be "AMR Guardians." This experience highlighted the necessity of school-based interventions in building a resilient community that respects the power and limits of modern medicine.`
    ],
    assets: [
        ...format_img_assets({name: "amr", count: 10}),
        {
            type: "video",
            name: "amr_11.mp4",
            vid_width: 464,
            vid_height: 832
        }
    ],
    colors: {
        bg: "#E1E7DD",
        color: "black",
        iconbg: null
    }
}   





// PROMPT TO CHATGPT AND GEMINI

// In my NGO Foundation, we went for an outreach to a secondary school called Wesley Girls Junior Secondary School.

// We went to enlighten the students on antimicrobial resistance (AMR), how to prevent this and things they must set in place to ensure this does not occur with them in their families, communities, and to friends.

// write me a description of less than 31 words to paste on the front page

// Write me an introduction of less than 100 words in max of 4 paragraphs

// Write me a well structured objective section of less than 100 words in max of 4 paragraphs

// Write me a well structured impact and experience section of less than 100 words in max of 3 paragraphs
