<template>
  <v-list>
    <v-list-item v-for="comment in comments" :key="comment.id">
      <v-list-item-content>{{ comment.content }}</v-list-item-content>
      <v-btn @click="editComment(comment)">Edit</v-btn>
      <v-btn @click="deleteComment(comment.id)">Delete</v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ['comments'],
  methods: {
    editComment(comment) {
    },
    deleteComment(commentId) {
    }
  }
};
</script>