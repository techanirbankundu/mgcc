export default async function handler(req, res) {
    const { input } = req.query; // Get input from query parameters
    const apiKey = "AIzaSyD6qMG_8aq8-B9DoPHSKWFt22creH9MM8Y";
  
    if (!input) {
      return res.status(400).json({ error: 'Input is required' });
    }
  
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${apiKey}`
      );
  
      const data = await response.json();
      if (data.status === 'OK') {
        res.status(200).json(data);
      } else {
        res.status(500).json({ error: 'Error fetching places' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
  