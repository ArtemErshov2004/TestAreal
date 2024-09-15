<template>
  <v-form @submit.prevent="submitComment">
    <v-textarea v-model="comment.content" label="Comment"></v-textarea>
    <v-btn type="submit">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        content: '',
        articleId: this.articleId
      }
    };
  },
  props: ['articleId'],
  methods: {
    submitComment() {
      this.$store.dispatch('addComment', this.comment);
    }
  }
};
</script>