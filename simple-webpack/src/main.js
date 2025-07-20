import { plus } from "./math.js";
import "./style.css";
import "./style.scss";
import Img from "./blazing-fast.gif";

console.log("hello world");
console.log(plus(1, 2));

const img = document.createElement("img");
img.width = 500;
img.src = Img;

document.body.appendChild(img);
