// ! debug only
// username: bagassn
// pw: merak32
// username: heru30
// pw: heru1234
// username: joko123
// pw: joko1234

const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session");
const dotEnv = require("dotenv");
const mysql = require("mysql");
const passwordHash = require("password-hash");
const path = require("path");
// const cookieParser = require("cookie-parser");
// const { Session } = require("express-session");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "app_sedekah_rw14",
});

const store = new MySQLStore({
    host: "localhost",
    user: "root",
    password: "password",
    database: "app_sedekah_rw14",
});

const isUserLoggedIn = (req, res, next) => {
    if (req.session.user) {
        res.redirect("/");
    } else {
        next();
    }
};

const app = express();
dotEnv.config();
app.use(express.json());
app.use(
    session({
        secret: "sdfslfslfaflsfdl",
        saveUninitialized: false,
        resave: false,
        // name: "user",
        store: store,
    })
);
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")))
// app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

con.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");

    app.get("/", (req, res) => {
        // res.json({
        //     test: "test",
        // })
        let query =
            "SELECT * FROM warga LEFT JOIN sedekah USING(id_warga) ORDER BY sedekah.added_time DESC";
        con.query(query, (err, result, fields) => {
            if (err) throw err;
            const listCitizen = result;
            query = "SELECT DISTINCT rt FROM warga ORDER BY warga.rt ASC";
            con.query(query, (err, result, fields) => {
                const listRT = result;
                res.render("../public/index", {
                    listCitizen: listCitizen,
                    listRT: listRT,
                    user: req.session.user ? req.session.user : null,
                });
            });
        });
    });

    app.get("/cari-kk/:id", (req, res) => {
        const id = req.params.id;
        let query = `SELECT * FROM warga WHERE warga.id_warga = ${id}`;
        con.query(query, (err, result, fields) => {
            if (err) throw err;
            res.render("../public/cari-kk", {
                id,
                result,
                user: req.session.user,
            });
        });
    });

    app.post("/buat-data-sedekah", (req, res) => {
        const data = req.body;
        const query = `INSERT INTO sedekah(id_warga, sudah_sedekah, added_by, jumlah_sedekah) VALUES(${data.dataCharity.idFamily}, 1, '${data.user.nameUser}', ${data.dataCharity.amount})`;
        con.query(query, (err, result) => {
            if (err) throw err;
            if (
                req.get("user-agent").match("Dart") &&
                result.affectedRows > 0
            ) {
                res.json({
                    status: "Success",
                });
            } else {
                res.json({
                    status: "Failed",
                    title: "Gagal Buat Data Sedekah",
                    message: "Pastikan No KK dan Jumlah Sedekah sudah diisi",
                });
            }
        });
    });

    app.get("/pendaftaran-warga", (req, res) => {
        res.render("../public/pendaftaran-warga");
    });

    app.post("/daftar-warga-baru", (req, res) => {
        const citizen = req.body;
        let query = `INSERT INTO warga(id_warga, nama_warga, rt) VALUES(${citizen.idFamily}, '${citizen.fullName}', ${citizen.noRT})`;
        con.query(query, (err, result) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.json({
                    status: "Success",
                });
            } else {
                res.json({
                    status: "Failed",
                });
            }
        });
    });

    app.get("/masuk", isUserLoggedIn, (req, res) => {
        res.render("../public/masuk");
    });

    app.get("/daftar-admin", isUserLoggedIn, (req, res) => {
        res.render("../public/daftar-admin");
    });

    app.post("/daftar-admin", isUserLoggedIn, (req, res) => {
        const user = req.body;
        user.idUser = Math.floor(Math.random() * 999999999);
        user.password = passwordHash.generate(user.password);
        user.permission = parseInt(user.permission);
        const query = `INSERT INTO users(id_user, name_user, username, password, permission) VALUES(${user.idUser}, '${user.fullName}', '${user.username}', '${user.password}', ${user.permission})`;
        con.query(query, (err, result) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.json({
                    status: "Success",
                    message: "Anggota berhasil ditambahkan ke dalam sistem",
                });
            } else {
                res.json({
                    status: "Failed",
                    title: "Anggota gagal ditambahkan ke dalam sistem",
                    message: err,
                });
            }
        });
    });

    app.post("/masuk", (req, res) => {
        ssn = req.session;
        const user = req.body;
        const query = `SELECT * FROM users WHERE username = '${user.username}'`;
        con.query(query, (err, result) => {
            console.log(result);
            if (result !== undefined) {
                if (passwordHash.verify(user.password, result[0].password)) {
                    if (req.get("user-agent").match("Dart")) {
                        const data = {
                            idUser: result[0].id_user,
                            nameUser: result[0].name_user,
                            username: result[0].username,
                            password: result[0].password,
                            permission: result[0].permission,
                        };
                        res.json(data);
                    } else {
                        req.session.user = {
                            idUser: result[0].id_user,
                            nameUser: result[0].name_user,
                            username: result[0].username,
                            password: result[0].password,
                            permission: result[0].permission,
                        };
                        req.session.save();
                        res.json({
                            status: "Success",
                        });
                    }
                } else {
                    res.json({
                        status: "Failed",
                        title: "Kata sandi anda salah",
                        message: "Silahkan coba lagi.",
                    });
                }
            } else {
                res.json({
                    status: "Failed",
                    title: "Username anda salah",
                    message: "Silahkan coba lagi.",
                });
            }
        });
    });

    app.get("/keluar", (req, res) => {
        if (req.session.user) {
            req.session.destroy();
            return res.redirect("/");
        }
        return res.sendStatus("404");
    });
});
module.exports = app;