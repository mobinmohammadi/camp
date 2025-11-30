
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zurrgjyamnrmgvrxfjjx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1cnJnanlhbW5ybWd2cnhmamp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MjE5NjcsImV4cCI6MjA4MDA5Nzk2N30.8DRxF4hBCtQ9Js42ea_OoFgTV_b8-87WLGlPXpXQThQ"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase