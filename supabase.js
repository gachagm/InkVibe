import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://qkfvtsrjxombytdvtkja.supabase.co";

const supabaseKey = "DEIN_ANON_KEY";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);