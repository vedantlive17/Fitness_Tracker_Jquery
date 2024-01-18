const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
const OpenAI = require('openai');
const path = require('path');

config();

const app = express();
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.API_KEY
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath);
});

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": userMessage }],
    });

    const gptResponse = chatCompletion.choices[0].message.content;
    res.json({ reply: gptResponse });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing your message');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
