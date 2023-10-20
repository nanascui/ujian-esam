const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Codingan disini

app.post("/berat", (req,res) => 
{
    let tipe = req.body.tip3
    let brt = Number(req.body.brt)
    let hold =0
    let response
    let kg,hg,dag,g,dg,cg,mg

    if (tipe === "mg") 
    { 
        mg = brt
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi MG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        
        }
    }
    else if(tipe === "cg")
    {
        mg = brt / 10
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi CG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe === "dg")
    {
        mg = berat / 100
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi DG",
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
        mg = berat / 1000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi G",
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
        mg = berat / 10000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi DAG",
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
        mg = berat / 100000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi HG",
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
        mg = berat / 1000000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi KG",
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