import "dotenv/config";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

async function test() {
  const url = process.env.DATABASE_URL;
  console.log("URL:", url ? "Defined" : "UNDEFINED");
  if (!url) return;

  try {
    const pool = new Pool({ connectionString: url });
    console.log("Pool created. Executing query...");
    const res = await pool.query("SELECT NOW()");
    console.log("Query success:", res.rows[0]);
    await pool.end();
  } catch (err) {
    console.error("Pool test failed:", err);
  }
}

test();
