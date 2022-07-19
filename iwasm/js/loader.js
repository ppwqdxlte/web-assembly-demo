class WasmLoader {

    constructor() {
    }

    async wasm(path) {
        console.log(`Fetching ${path} ...`);
        if (!WebAssembly.instantiateStreaming) { // 如果当前浏览器不支持从流中实例化
            return this.wasmFallback(path);
        }
        const {instance} = await WebAssembly.instantiateStreaming(fetch(path));
        return instance?.exports;
    }

    /**
     * 当浏览器不支持WA实例化流时的预备方法
     * */
    async wasmFallback(path) {
        console.error(`Using fallback of wasm(path)...`);
        const response = await fetch(path);
        const bytes = await response?.arrayBuffer();
        const {instance} = WebAssembly.instantiate(bytes);
        return instance?.exports;
    }

}