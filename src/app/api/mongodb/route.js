import { connectToDatabase } from "@/services/mongoService";

export async function GET(request) {
  const user = await fetchData();
  return new Response(["prueba", user]);
}

async function fetchData() {
  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("user");
    const usersData = await usersCollection.find().toArray();
    return usersData;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}
