const fs = require("fs");
const url = require("url");

exports.handler = async function (event, context) {
    // URL bilgilerini parse et
    const parsedUrl = new URL(event.rawUrl);
    const pathname = parsedUrl.pathname;

    // İstek metodunu al
    const method = event.httpMethod;

    // İstek başlıklarını al
    const headers = event.headers;

    // Yanıt için içerik türünü belirle
    let contentType = "text/html";

    try {
        // Burada dosya okuma işlemleri yapabilirsiniz
        // Örnek: Statik bir HTML dosyası okuma
        let content;
        if (pathname === "/") {
            content = fs.readFileSync("./index.html", "utf8");
        } else if (pathname === "/404.html") {
            content = fs.readFileSync("./404.html", "utf8");
        } else {
            content = `<html><head><title>Netlify Function</title></head><body><h1>Merhaba Netlify Functions!</h1><p>İstek yolu: ${pathname}</p><p>İstek metodu: ${method}</p></body></html>`;
        }

        // Örnek yanıt
        return {
            statusCode: 200,
            headers: { "Content-Type": contentType },
            body: content
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};