import { createClient } from "@supabase/supabase-js";


const supabaseurl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT || ""

export const supabase = createClient(supabaseurl, supabaseKey)