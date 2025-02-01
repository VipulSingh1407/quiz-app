import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/quiz", async (req, res) => {
  try {
    console.log("Fetching data from API...");
    const response = await fetch("https://api.jsonserve.com/Uw5CrX"); 
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
