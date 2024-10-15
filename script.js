import "dotenv/config";
console.log (`Salut ,je m'appelle ${process.env.NAME} et je suis au campus ${process.env.CAMPUS}`);

import cowsay from"cowsay";


console.log(cowsay.say({
    text : process.env.COWSAY_TEXT || "Hello from cowsay!",
    e : process.env.COWSAY_EYES || "oO",
    T : process.env.COWSAY_TONGUE || "U "
}));
