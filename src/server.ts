import express from "express";
import { join } from "path";
import { config } from "dotenv"
const app = express();
config();
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(process.cwd(), "public")));
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
    res.render('index');
})
app.get('/image', (req, res) => {
    res.sendFile('image.tar.gz');
})
app.post('/', (req, res) => {
    const { key } = req.body;
    if (!["eeecff8e68", "90693e4550"].includes(key)) {
        res.render('solution');
    }
})
app.listen(3000, () => {
    console.log('ready');
})