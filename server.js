const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

const DELHIVERY_API_KEY = process.env.DELHIVERY_API_KEY;

app.get('/api/track/:waybill', async (req, res) => {
    const waybill = req.params.waybill;
    
    try {
        const response = await axios.get(https://track.delhivery.com/api/v1/packages/json/?waybill=${waybill}, {
            headers: {
                'Authorization': Token ${DELHIVERY_API_KEY},
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Delhivery API se connection nahi ho pa raha." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));
