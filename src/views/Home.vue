<template>
     <Header />
      <Users />
    <router-view/>
</template>

<script>
import Header from '../components/Header.vue'
import Users from '../components/Users.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Header,
    Users 
  }
}
</script>
