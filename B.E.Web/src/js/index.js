import { createApp } from 'vue';
import { createPinia} from 'pinia';
import lz from 'vue-lazyload';
import app from './vue/index.vue';

const pinia = createPinia()
createApp(app)
.use(lz)
.use(pinia)
.mount("#app");
