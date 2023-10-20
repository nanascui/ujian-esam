const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Codingan disini

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get("/konversi/:tipe_berat/:berat", (req,res) => 
{
    let tipe_berat = req.params.tipe_berat
    let berat = req.params.berat
    let response
    let kg,hg,dag,g,dg,cg,mg

    if (tipe_berat === "mg") 
    {
        mg = berat
        cg = mg / 10
        dg = mg / 100
        g = mg / 1000
        dag = mg / 10000
        hg = mg / 100000
        kg = mg / 1000000
        response = {
            Soal: "Konversi Berat MG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "cg")
    {
        cg = berat
        mg = cg * 10
        dg = cg / 10
        g = cg / 100
        dag = cg / 1000
        hg = cg / 10000
        kg = cg / 100000
        response = {
            Soal: "Konversi Berat CG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "dg")
    {
        dg = berat
        mg = dg * 100
        cg = dg * 10
        g = dg / 10
        dag = dg / 100
        hg = dg / 1000
        kg = dg / 10000
        response = {
            Soal: "Konversi Berat DG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "g")
    {
        g = berat
        mg = g * 1000
        cg = g * 100
        dg = g * 10
        dag = g / 10
        hg = g / 100
        kg = g / 1000
        response = {
            Soal: "Konversi Berat G",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "dag")
    {
        dag = berat
        mg = dag * 10000
        cg = dag * 1000
        dg = dag * 100
        g = dag * 10
        hg = dag / 10
        kg = dag / 100
        response = {
            Soal: "Konversi Berat DAG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "hg")
    {
        hg = berat
        mg = hg * 100000
        cg = hg * 10000
        dg = hg * 1000
        g = hg * 100
        dag = hg * 10
        kg = hg / 10
        response = {
            Soal: "Konversi Berat HG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "kg")
    {
        kg = berat
        mg = kg * 1000000
        cg = kg * 100000
        dg = kg * 10000
        g = kg * 1000
        dag = kg * 100
        hg = kg * 10
        response = {
            Soal: "Konversi Berat KG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }

    res.json(response)
})



app.post("/vst", (req, res) => {
    let soal = req.body.type;
    let var1 = Number(req.body.diket1);
    let var2 = Number(req.body.diket2);


    if (soal === "v") {
        hasil = var1 / var2;
        response = {
            Soal: "Mencari kecepatan (Velocity) per detik",
            Jarak: var1 + ' meter',
            Waktu: var2 + ' detik',
            Hasil: hasil + ' m/detik',
        };
    } else if (soal === "s") {
        hasil = var1 * var2;
        response = {
            Soal: "Mencari Jarak (Space)",
            Kecepatan: var1 + ' m/detik',
            Waktu: var2 + ' detik',
            Hasil: hasil + ' meter',
        };
    } else if (soal === "t") {
        hasil = var1 / var2;
        response = {
            Soal: "Mencari Waktu (Time)",
            Jarak: var1 + ' meter',
            Kecepatan: var2 + ' m/detik',
            Hasil: hasil.toFixed(2) + ' detik',
        };
    } else {
        response = "Tipe tidak ada!\nCoba salah satu dari berikut Tipe:[v, s, t]";
    }

    res.json(response);
});


  

// Codingan disini

const portt = 8000
app.listen(portt, () => 
{
    console.log("Server run on port \""+portt+'\"');
}) 
