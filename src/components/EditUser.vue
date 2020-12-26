<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <!-- v-for="item in getUser" :key="item.id" -->
        <div class="col-8 m-auto">
          <form>
            <div class="mb-3">
              <label class="form-label">user name</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                @input="item.username"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <div class="mb-3">
              <label class="form-label">first name</label>
              <input type="text" class="form-control" v-model="firstName" />
            </div>
            <div class="mb-3">
              <label class="form-label">last name</label>
              <input type="text" class="form-control" v-model="lastName" />
            </div>
            <div class="mb-3">
              <label class="form-label">email</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="mb-3">
              <label class="form-label">Phone number</label>
              <input type="text" class="form-control" v-model="phone" />
            </div>
            <div class="mb-3">
              <label>Example select</label>
              <select class="form-control" v-model="department">
                <option v-for="dept in departments" :key="dept">
                  {{ dept.name }}
                </option>
              </select>
            </div>
            <button
              class="btn btn-primary"
              
              @click.prevent="push"
            >
            <!-- @click.prevent="handleSubmit" -->
              Save
            </button>
            <div class="alert alert-danger mt-5" role="alert" v-if="msgError">
              {{ msgError }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import deprtment from "../assets/department.json";
export default {
  components: { Header },
  data() {
    return {
      departments: deprtment,
      userId: null,
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      department: "",
      user: [],
      clonedUser: [
        {
          id: "",
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          department: "",
        },
      ],
      checker: "",
      payload: {
        id: 0,
        user: [],
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.username < 4) {
        this.checker = "user name must not be less than four";
      } else if (
        this.firstName < 5 ||
        this.checkLetter(this.firstName) ||
        this.lastName < 5 ||
        this.checkLetter(this.lastName)
      ) {
        this.checker =
          "last name and first name  must not be less than 5 and start with charactar";
      } else if (this.checkePassword(this.password)) {
        this.checker =
          "password must not be less than 8 or numbers and must contain at leastone character capital, one number and one special character";
      } else if (this.department == "") {
        this.checker = "select department";
      } else if (this.validatePhone(this.phone)) {
        this.checker = "Enter valid phone number please";
      }
    },
    checkLetter(name) {
      const letters = /^[A-Za-z]+$/;
      if (name.match(letters)) {
        return true;
      }
      return false;
    },
    checkePassword(password) {
      const passw = /(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9].{8,}/;
      if (password.match(passw)) {
        return true;
      }
      return false;
    },
    ValidateEmail(mail) {
      const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (mail.match(mailformat)) {
        return true;
      }
      return false;
    },
    validatePhone(phone) {
      const phoneFormat = /(010|011|012|015)\d{8}/;
      if (phone.match(phoneFormat)) {
        return true;
      }
      return false;
    },
    push() {
      this.clonedUser.id = this.userId;
      this.clonedUser.username = this.username;
      this.clonedUser.firstName = this.firstName;
      this.clonedUser.lastName = this.lastName;
      this.clonedUser.phone = this.phone;
      this.clonedUser.email = this.email;
      this.clonedUser.password = this.password;
      this.clonedUser.department = this.department;
      //this.$route.params.userId,this.clonedUser
      this.payload.id = this.userId;
      this.payload.user.push(this.clonedUser);
      this.$store.commit("updateUser", {id:this.userId,user:this.clonedUser});
      // console.log(this.payload);
    },
  },
  async created() {
    this.userId = this.$route.params.userId;
    this.userId=this.item.id;
    this.username=this.item.username;
    this.firstName=this.item.firstName;
    this.lastName=this.item.lastName;
    this.phone=this.item.phone;
    this.email=this.item.email;
    this.password=this.item.password;
    this.department=this.item.deprtment;
  },
  computed: {
    item() {
      return this.$store.getters.getUser(
        parseInt(this.$route.params.userId, 10)
      );
    },
  },
  
};
</script>

<style>
</style>