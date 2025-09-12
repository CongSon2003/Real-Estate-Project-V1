const express = require("express");
const app = express();

// Load biến môi trường từ file .env
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 7777;

// use cors(cross origin resource sharing):
// Nó quyết định xem một trang web (frontend) có được phép gọi API từ một server (backend) khác domain hay không.
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "https://myfrontend.com"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // cho phép gửi cookie/token
  })
);

// Middleware để body parse JSON: giúp backend Express hiểu dữ liệu JSON mà client gửi lên
app.use(express.json());

// Cho phép parse dữ liệu form
app.use(express.urlencoded({ extended: true }));

// router all
app.get("/", (req: any, res: any) => {
  res.send("Hello express");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}/`);
});
