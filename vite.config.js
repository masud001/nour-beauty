import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/my-cult-status-page.html"),
        "my-cult-status-page-02": resolve(__dirname, "src/my-cult-status-page-02.html"),
        "my-cult-status-page-02-silver": resolve(__dirname, "src/my-cult-status-page-02-silver.html"),
        "my-cult-status-page-02-gold": resolve(__dirname, "src/my-cult-status-page-02-gold.html"),
        "my-cult-status-page-02-black": resolve(__dirname, "src/my-cult-status-page-02-black.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
};
