import { createApp } from "vue";
//引入工厂函数
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";

//vuex
import store from "./stores/vuex/index";

//数据持久化
import piniaPersist from "pinia-plugin-persist";
import "element-plus/dist/index.css";
const app = createApp(App);
app.use(router);

// 创建pinia 实例
const pinia = createPinia();

pinia.use(piniaPersist);

app.use(pinia);
app.use(store);

app.use(ElementPlus);
app.mount("#app");
