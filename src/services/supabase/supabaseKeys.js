import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://bmqwenjexvppcsyqyfky.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcXdlbmpleHZwcGNzeXF5Zmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMDk4NTEsImV4cCI6MjA2Mzg4NTg1MX0.aT2nst_qeXcsjYpzQm-ggccz1IGnoNKZ6aHj53iTFbk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)