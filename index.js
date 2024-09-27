const express = require("express") // impor modul express
const app = express() // inisialisasi express
const port = 3000 // port

//route /
app.get("/", (req, res) => {
    res.send ("Hello");
});

//route /about
app.get("/about", (req, res) => {
    res.send("About Us");
});

//route /contact
app.get("/contact", (req, res) => {
    //res.send("Contact Us");
    res.sendFile(__dirname + "/contact.html");
});

//route /mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data Mahasiswa",
        "data" : [
            {npm :2226240001, nama :"ahmad"},
            {npm :2226240002, nama :"lala"},
            {npm :2226240001, nama :"caca"}
        ]
    })
});

//route /dosen
app.get("/dosen", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data Dosen",
        "data" : [
            {
                Prodi :"Sistem Informasi", 
                dosen :["Iis","Faris","Dafid"]
            },
            {
                Prodi :"Informatika", 
                dosen :["Derry", "Siska", "Yohanes"]
            },
        ]
    })
});
//handle route yang tidak terdaftar 
app.use("/", (req,res) => {
    res.send("<h1>404 Not Found<h1>");
});

//jalankan server
app.listen(port, () => {
    console.log(`Server dapat di akses di http://localhost:${port}`);
});



