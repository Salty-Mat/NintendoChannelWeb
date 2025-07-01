import express from 'express'
const app = express()
const port = 80

console.log(__dirname)

app.get('///////f/248/49125/1h/entus.wapp.wii.com/6/VHFQ3VjDqKlZDIWAyCY0S38zIoGAoTEqvJjr8OVua0G8UwHqixKklOBAHVw9UaZmTHqOxqSaiDd5bjhSQS6hk6nkYJVdioanD5Lc8mOHkobUkblWf8KxczDUZwY84FIV/list/US/en/434968891.LZ', (req, res) => {

  res.sendFile(__dirname+ "\\" + "static\\2\\1\\dllist.bin")
})



app.get('///////f/248/49125/1h/entus.wapp.wii.com/6/VHFQ3VjDqKlZDIWAyCY0S38zIoGAoTEqvJjr8OVua0G8UwHqixKklOBAHVw9UaZmTHqOxqSaiDd5bjhSQS6hk6nkYJVdioanD5Lc8mOHkobUkblWf8KxczDUZwY84FIV/thumbnail/US/en/434968891-001.thumb', (req, res) => {

  res.sendFile(__dirname+ "\\" + "static\\thumbnail.bin")
})

app.get('///////f/248/59036/1h/entusm.wapp.wii.com/6/VHFQ3VjDqKlZDIWAyCY0S38zIoGAoTEqvJjr8OVua0G8UwHqixKklOBAHVw9UaZmTHqOxqSaiDd5bjhSQS6hk6nkYJVdioanD5Lc8mOHkobUkblWf8KxczDUZwY84FIV/movie/US/en/:id(\\d+)-h', (req, res) => {

  res.sendFile("F:/NintendoChannelWeb/assets/videos/"+req.params.id+".mo")
})

app.get('///////f/248/49125/1h/entus.wapp.wii.com/6/VHFQ3VjDqKlZDIWAyCY0S38zIoGAoTEqvJjr8OVua0G8UwHqixKklOBAHVw9UaZmTHqOxqSaiDd5bjhSQS6hk6nkYJVdioanD5Lc8mOHkobUkblWf8KxczDUZwY84FIV/movie/US/en/:id(\\d+)-h.mo', (req, res) => {

  res.sendFile("F:/NintendoChannelWeb/assets/videos/"+req.params.id+".mo")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})