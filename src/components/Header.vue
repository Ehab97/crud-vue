<template> 
   <nav>
      <router-link to="/home/users">users</router-link> |
      <router-link to="/home/createuser">Create user</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
     background-color: #fff;
     padding: 10px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-bottom: 40px;
}
nav a{
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}
nav a:hover{
     color: teal;
     border: none;
     text-decoration: none;
}

</style>