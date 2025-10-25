import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
	root: ".", // 프로젝트 루트
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "src/layout"), // header/footer partial
		}),
	],
	resolve: {
		alias: {
			"@js": resolve(__dirname, "src/js"),
			"@scss": resolve(__dirname, "src/scss"),
			"@assets": resolve(__dirname, "src/assets"),
		},
	},
	server: { port: 3000 },
	build: {
		outDir: "dist",
		emptyOutDir: true,
	},
});
