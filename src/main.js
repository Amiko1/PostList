import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import editPosts from './page/EditPosts.vue';
import PostList from './page/PostList.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: "/postlists" },
        {path: '/postlists', component: PostList },
        {path: '/postlists/:id', component: editPosts, props: true} 
    ]
})

const app = createApp(App)

app.use(router);
app.mount('#app')
