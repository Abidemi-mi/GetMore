import "dotenv/config";
import prisma from "../db/prisma";

async function testConnection() {
  try {
    const products = await prisma.product.findMany({ take: 1 });
    console.log("Connection successful! Products fetched:", products.length);
    if (products.length > 0) {
        console.log("First product:", products[0].name);
    }
  } catch (error) {
    console.error("Connection failed:", error);
  } finally {
    // In a real app we might not disconnect, but for a script it's good practice
    // However, our singleton doesn't expose the pool directly to disconnect easily
    // so we'll just let the script exit.
    process.exit(0);
  }
}

testConnection();
