<template>
  <div class="container">
       <div class="row">
            <div class="col-8 m-auto">
               <form>
                    <div class="mb-3">
                    <label class="form-label">user name</label>
                    <input type="text" class="form-control"  v-model="name">
                    </div>
                    <div class="mb-3">
                    <label  class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password">
                    </div>
                    <button  class="btn btn-primary" @click.prevent="handleSubmit">Log in</button>
                    <div class="alert alert-danger mt-5" role="alert" v-if="msgError">
                      {{msgError}}
                    </div>
               </form>
            </div>
       </div>
  </div>
</template>

<script>
export default {
     data(){
          return{
               name:'',
               password:'',
               msgError:'',
          }
     },
     methods: {
          handleSubmit(e) {
               if (this.name !== '' && !this.password !== '') {
                    this.$router.push('/home');
               }else{
                    
                    this.msgError='please fill inputs with any thing';
               }
          }
     }
}
</script>

<style>
form{
     background-color: #fff;
     border-radius:10px ;
     width: 100%;
     padding: 30px 15px;
}
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

}
</style>