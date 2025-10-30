# 🤖 Discord Webhook Sender Bot

Bot Discord sederhana yang dapat mengirim pesan ke **webhook n8n** menggunakan perintah `!kirim`.  
Dibangun menggunakan **discord.js v14**, **axios**, dan **dotenv** untuk manajemen token secara aman.

---

## 🚀 Fitur
- Mendeteksi perintah `!kirim <pesan>`
- Mengirim isi pesan ke endpoint webhook n8n
- Menampilkan status sukses atau gagal langsung di Discord
- Aman menggunakan `.env` untuk menyimpan token bot

---

## 🧰 Teknologi yang digunakan
- [discord.js](https://discord.js.org)
- [axios](https://axios-http.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/kimookoii/discord-n8n-webhook.git
   cd discord-n8n-webhook
   ```

2. **Install dependensi**

   ```bash
   npm install
   ```

3. **Buat file `.env`**

   ```env
   DISCORD_TOKEN=token_bot_discord_kamu
   ```

4. **Jalankan bot**

   ```bash
   node index.js
   ```

---

## 💡 Cara Menggunakan

Ketik perintah di server Discord tempat bot aktif:

```
!kirim Halo, ini pesan dari Discord ke n8n!
```

Bot akan mengirim pesan tersebut ke webhook endpoint yang sudah ditentukan di dalam kode:

```js
http://localhost:5678/webhook/<path>
```

---

## 🧠 Catatan

* Pastikan URL webhook n8n aktif (gunakan ngrok atau server publik).
* Jangan commit file `.env` ke GitHub untuk menjaga keamanan token.

---

_made with ❤️ by **[ziconakano](https://instagram.com/ziconkn_)**_