import express from "express";
import { join } from "path";
import { config } from "dotenv";
import { readFile } from "fs/promises";
const app = express();
config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(process.cwd(), "public")));
app.set("view engine", "ejs");

app.get("/", (_, res) => {
  res.render("index");
});
app.get("/image.tar.gz", (req, res) => {
  const path = join(process.cwd(),"./public/image.tar.gz");
  console.log(path);
  res.sendFile(path);
});
app.post("/", (req, res) => {
  const { key } = req.body ;
  if (!["eeecff8e68", "90693e4550"].includes(key)) {
    res.render("solution", { data: undefined });
  } else if (key == "eeecff8e68") {
    res.render("solution", { data: "ctf{cool_cat_flag_1_fou_nd}" });
  } else {
      key
      res.render("solution", {
        data: "ctf{co_ol_catt_flag_2_fou_nd_>.<_game_over}",
      });
  }
});

const nonces = [
  "b8b95a0b9a",
  "a291bb10c2",
  "5c75ee6613",
  "9e136a7c31",
  "8a0f98c67c",
  "3da4d18d0c",
  "763bbebc9b",
  "ac3a096c18",
];

app.get("/nonce", async (_, res) => {
    return res.json({ nonces });
})

app.get("/solution",async(_,res) => {
  res.render("solution");
})

app.post("/nonce", async (req, res) => {
    const { nonce } = req.body;
    if (nonce != "a291bb10c2") {
        res.json({
            solution : "https://ctf.pancham1305.repl.co/solution"
        })
    } else {
        res.json({
            solution: "90693e4550",
        });
    }
})

app.get("/devtools", async (_, res) => {
    res.set('Content-Type', 'image/png');
    res.send(await readFile("public/devtools.png"));
})

app.listen(3000, () => {
  console.log("ready");
});
