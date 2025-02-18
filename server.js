const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// MTA G Train status URL (No API key required)
const MTA_G_TRAIN_URL = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-g';

// Fetch G Train status
async function getGTrainStatus() {
    try {
        const response = await axios.get(MTA_G_TRAIN_URL);
        return { running: true }; // Placeholder (real parsing needed)
    } catch (error) {
        console.error("Error fetching MTA data:", error);
        return { running: false };
    }
}

// Define API Route
app.get('/status', async (req, res) => {
    const status = await getGTrainStatus();
    res.json(status);
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
