import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

function routeToFile(urlPath) {
	const cleanPath = urlPath.split("?")[0];

	switch (cleanPath) {
		case "/":
			return { file: "index.html", status: 200 };
		case "/about":
			return { file: "about.html", status: 200 };
		case "/contact-me":
			return { file: "contact-me.html", status: 200 };
		default:
			return { file: "404.html", status: 404 };
	}
}

const server = http.createServer(async (req, res) => {
	try {
		const { file, status } = routeToFile(req.url);
		const filePath = path.join(__dirname, file);

		const html = await readFile(filePath, "utf8");

		res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
		res.end(html);
	} catch (err) {
		res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
		res.end("404 - Page Not Found");
	}
});

server.listen(PORT, "127.0.0.1", () => {
	console.log(`Server running at http://127.0.0.1:${PORT}`);
});
