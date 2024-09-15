import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    comments: []
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    ADD_ARTICLE(state, article) {
      state.articles.push(article);
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment);
    }
  },
  actions: {
    async fetchArticles({ commit }) {
      const { data } = await axios.get('/api/articles');
      commit('SET_ARTICLES', data);
    },
    async addArticle({ commit }, article) {
      const { data } = await axios.post('/api/articles', article);
      commit('ADD_ARTICLE', data);
    },
    async fetchComments({ commit }, articleId) {
      const { data } = await axios.get(`/api/articles/${articleId}/comments`);
      commit('SET_COMMENTS', data);
    },
    async addComment({ commit }, comment) {
      const { data } = await axios.post('/api/comments', comment);
      commit('ADD_COMMENT', data);
    }
  },
  getters: {
    getArticleById: (state) => (id) => state.articles.find(article => article.id === id),
    getCommentsByArticle: (state) => (articleId) => state.comments.filter(comment => comment.articleId === articleId)
  }
});