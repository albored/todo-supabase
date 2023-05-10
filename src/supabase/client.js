import { createClient } from "@supabase/supabase-js";

const url = "https://vregbxaldgblirwjlafq.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZWdieGFsZGdibGlyd2psYWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjUwMjksImV4cCI6MTk5OTMwMTAyOX0.i2ZVlnW_NJFxM29zAnooAVjGaigOIqQUYEPcIfOdWYA";

const supabase = createClient(url, key);

export default supabase;
