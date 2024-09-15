template>
  <div>
    <v-text-field v-model="startDate" label="Start Date" type="date"></v-text-field>
    <v-text-field v-model="endDate" label="End Date" type="date"></v-text-field>
    <v-btn @click="filterComments">Filter</v-btn>

    <v-list>
      <v-list-item v-for="comment in filteredComments" :key="comment.id">
        <v-list-item-content>{{ comment.content }} ({{ comment.articleTitle }})</v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      filteredComments: []
    };
  },
  methods: {
    filterComments() {
    }
  }
};
</script>