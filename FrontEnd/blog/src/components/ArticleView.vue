<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>

    <v-btn @click="editArticle">Edit Article</v-btn>
    <v-btn @click="deleteArticle">Delete Article</v-btn>

    <h2>Comments</h2>
    <CommentsList :comments="comments"/>
    <CommentForm :articleId="article.id"/>
  </div>
</template>

<script>
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';

export default {
  components: { CommentsList, CommentForm },
  data() {
    return {
      article: {},
      comments: []
    };
  },
  created() {
    const articleId = this.$route.params.id;
    this.article = this.$store.getters.getArticleById(articleId);
    this.$store.dispatch('fetchComments', articleId);
  },
  computed: {
    comments() {
      return this.$store.getters.getCommentsByArticle(this.article.id);
    }
  },
  methods: {
    editArticle() {
    },
    deleteArticle() {
    }
  }
};
</script>