import Vue from 'vue';
import VueRouter from 'vue-router';
import ArticlesList from '../components/ArticlesList.vue';
import ArticleView from '../components/ArticleView.vue';
import FilteredComments from '../components/FilteredComments.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: ArticlesList },
    { path: '/articles/:id', component: ArticleView, props: true },
    { path: '/filtered-comments', component: FilteredComments }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;