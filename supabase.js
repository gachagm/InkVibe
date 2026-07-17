import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://qkfvtsrjxombytdvtkja.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrZnZ0c3JqeG9tYnl0ZHZ0a2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMDAxMzAsImV4cCI6MjA5OTg3NjEzMH0.yG8GdTRNkDzd_wEIOJXZjxibqfSWkXJrg706xPP_i2g";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);