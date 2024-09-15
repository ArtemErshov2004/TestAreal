<template>
  <v-form @submit.prevent="submitArticle">
    <v-text-field v-model="article.title" label="Title"></v-text-field>
    <v-textarea v-model="article.content" label="Content"></v-textarea>
    <v-btn type="submit">Save</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    submitArticle() {
      this.$store.dispatch('addArticle', this.article);
    }
  }
};
</script>