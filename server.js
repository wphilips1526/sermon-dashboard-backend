const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sermon Dashboard Backend is running!');
});

app.post('/convert-sermon', (req, res) => {
  const { sermonText, styleName } = req.body;
  const converted = `Converted ${sermonText} with style ${styleName}`;
  res.json({ converted });
});

app.post('/save-style', (req, res) => {
  const { sermonText, converted, styleName } = req.body;
  res.json({ message: 'Style saved successfully' });
});

app.post('/clear-style', (req, res) => {
  const { styleName } = req.body;
  res.json({ message: `Style ${styleName} cleared` });
});

app.post('/backup', (req, res) => {
  res.json({ message: 'Backup created successfully' });
});

app.post('/generate-social-post', (req, res) => {
  const { sermonText } = req.body;
  const socialPost = `🌟 Key takeaway from this week's sermon: "${sermonText.substring(0, 50)}..." Join us next Sunday for more! #SermonInsights`;
  res.json({ socialPost });
});

app.post('/generate-ebook', (req, res) => {
  const { sermonText } = req.body;
  const ebookContent = `# Sermon eBook\n\n## Chapter 1: Key Message\n${sermonText}\n\n## Reflection\nTake a moment to reflect on this message.`;
  res.json({ ebookContent });
});

app.post('/generate-devotional', (req, res) => {
  const { sermonText } = req.body;
  const devotional = `**Daily Devotional**\nScripture: Romans 8:28\nReflection: "${sermonText.substring(0, 100)}..." Pray for God's guidance today.`;
  res.json({ devotional });
});

app.post('/generate-teacher-manual', (req, res) => {
  const { sermonText } = req.body;
  const manual = `**Teacher Manual: Sermon Insights**\n\n### Introduction\n${sermonText}\n\n### Discussion Questions\n1. How does this sermon apply to your life?\n2. What scriptures support this message?`;
  res.json({ manual });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.post('/clear-style', (req, res) => {
  const { styleName } = req.body;
  res.json({ message: `Style ${styleName} cleared` });
});

app.post('/backup', (req, res) => {
  res.json({ message: 'Backup created successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));