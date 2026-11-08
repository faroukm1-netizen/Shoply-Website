import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ApiRouter from "./App";
import Footer from "./components/Footer";

createRoot(document.getElementById('root')!).render(
<BrowserRouter>

 <Navbar />
<ApiRouter />
<Footer />

</BrowserRouter>
)