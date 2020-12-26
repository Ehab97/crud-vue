<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="user in getUsers" :key="user.id">
          <div class="card text-dark bg-light mb-3" style="max-width: 18rem">
            <div class="card-header">{{ user.username }}</div>
            <div class="card-body">
              <h5 class="card-title">{{ user.email }}</h5>
              <p class="card-text">{{ user.department }}</p>
              <router-link
                :to="'/home/edituser/' + user.id"
                class="btn btn-primary"
                >Edit</router-link
              >
              <button class="btn btn-danger" @click="deleteUser(user.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      // users: this.$store.state.users,
    };
  },
  components: {
    Header,
  },
  created() {
    console.log(this.$store.getters.getUsers)
  },
  methods: {
    deleteUser(id) {
      let allowDelete = confirm("Are you sure yo want to delete");
      if (allowDelete) {
        this.$store.commit("deleteUser", id);
        this.$router.push("/home");
      }
    },

  },
  computed:{
    getUsers(){
      return this.$store.getters.getUsers;
    }
  }
};
</script>

<style>
.btn {
  margin: 10px;
  width: 100px;
}
</style>