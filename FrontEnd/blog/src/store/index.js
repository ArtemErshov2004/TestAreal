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
    UPDATE_ARTICLE(state, updatedArticle) {
      const index = state.articles.findIndex(a => a.id === updatedArticle.id);
      if (index !== -1) {
        state.articles.splice(index, 1, updatedArticle);
      }
    },
    DELETE_ARTICLE(state, articleId) {
      state.articles = state.articles.filter(article => article.id !== articleId);
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment);
    },
    UPDATE_COMMENT(state, updatedComment) {
      const index = state.comments.findIndex(c => c.id === updatedComment.id);
      if (index !== -1) {
        state.comments.splice(index, 1, updatedComment);
      }
    },
    DELETE_COMMENT(state, commentId) {
      state.comments = state.comments.filter(comment => comment.id !== commentId);
    }
  },
  actions: {
    async fetchArticles({ commit }) {
      try {
        const response = await axios.get('/articles');
        commit('SET_ARTICLES', response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    async addArticle({ commit }, article) {
      try {
        const response = await axios.post('/articles', article);
        commit('ADD_ARTICLE', response.data);
      } catch (error) {
        console.error("Error adding article:", error);
      }
    },
    async editArticle({ commit }, article) {
      try {
        const response = await axios.put(`/articles/${article.id}`, article);
        commit('UPDATE_ARTICLE', response.data);
      } catch (error) {
        console.error("Error updating article:", error);
      }
    },
    async deleteArticle({ commit }, articleId) {
      try {
        await axios.delete(`/articles/${articleId}`);
        commit('DELETE_ARTICLE', articleId);
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    },
    async fetchComments({ commit }, articleId) {
      try {
        const response = await axios.get(`/articles/${articleId}/comments`);
        commit('SET_COMMENTS', response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    },
    async addComment({ commit }, comment) {
      try {
        const response = await axios.post('/comments', comment);
        commit('ADD_COMMENT', response.data);
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    },
    async editComment({ commit }, comment) {
      try {
        const response = await axios.put(`/comments/${comment.id}`, comment);
        commit('UPDATE_COMMENT', response.data);
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    },
    async deleteComment({ commit }, commentId) {
      try {
        await axios.delete(`/comments/${commentId}`);
        commit('DELETE_COMMENT', commentId);
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    }
  },
  getters: {
    getArticleById: (state) => (id) => state.articles.find(article => article.id === id),
    getCommentsByArticle: (state) => (articleId) => state.comments.filter(comment => comment.articleId === articleId)
  }
});