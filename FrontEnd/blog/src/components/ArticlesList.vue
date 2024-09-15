<template>
  <v-data-table :items="articles" :headers="headers">
    <template v-slot:item.actions="{ item }">
      <v-btn @click="viewArticle(item.id)">View</v-btn>
      <v-btn @click="editArticle(item.id)">Edit</v-btn>
      <v-btn @click="deleteArticle(item.id)">Delete</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  },
  methods: {
    viewArticle(id) {
      this.$router.push(`/articles/${id}`);
    },
    editArticle(id) {
    },
    deleteArticle(id) {
    }
  }
};
</script>