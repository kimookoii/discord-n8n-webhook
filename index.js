// Import library
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config(); // Untuk ambil token dari .env file

// Buat client Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// Event saat bot sudah login
client.once('ready', () => {
  console.log(`✅ Bot sudah online sebagai ${client.user.tag}`);
});

// Event saat pesan baru masuk
client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // abaikan pesan dari bot lain

  if (message.content.startsWith('!kirim')) {
    const data = { text: message.content.slice(7).trim() };

    try {
      const res = await axios.post('https://rosaline-unglacial-nondialectally.ngrok-free.dev/webhook/discord', data);
      console.log('Webhook response:', res.data);
      await message.reply('✅ Pesan terkirim ke n8n!');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      await message.reply('❌ Gagal mengirim ke webhook.');
    }
  }
});

// Jalankan bot pakai token dari file .env
client.login(process.env.DISCORD_TOKEN);
