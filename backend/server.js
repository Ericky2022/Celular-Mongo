const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://bibliaAppUser:Biblia2025@cluster0.2ij81.mongodb.net/bibliaApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado!'))
.catch(err => console.error('Erro ao conectar:', err));

const versiculoSchema = new mongoose.Schema({
  book_name: String,
  book: Number,
  chapter: Number,
  verse: Number,
  text: String,
});
const Versiculo = mongoose.model('Versiculo', versiculoSchema);

app.get('/versiculos', async (req, res) => {
  const versiculos = await Versiculo.find();
  res.json(versiculos);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
