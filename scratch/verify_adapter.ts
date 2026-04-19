import "dotenv/config";
import prisma from "../db/prisma.ts";

async function main() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Defined (starts with " + process.env.DATABASE_URL.substring(0, 10) + "...)" : "UNDEFINED");
  console.log("Testing connection with Neon serverless adapter...");
  try {
    const products = await prisma.product.findMany({ take: 1 });
    console.log("Successfully fetched products:", products);
    console.log("Connection test PASSED!");
  } catch (error) {
    console.error("Connection test FAILED:");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
