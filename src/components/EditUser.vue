<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-8 m-auto" v-for="item in user" :key="item.id">
          <form>
            <div class="mb-3">
              <label class="form-label">user name</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                :placeholder="item.username"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                :placeholder="item.password"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">first name</label>
              <input
                type="text"
                class="form-control"
                v-model="firstName"
                :placeholder="item.firstName"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">last name</label>
              <input
                type="text"
                class="form-control"
                v-model="lastName"
                :placeholder="item.lastName"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                :placeholder="item.email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Phone number</label>
              <input
                type="text"
                class="form-control"
                v-model="phone"
                :placeholder="item.phone"
              />
            </div>
            <div class="mb-3">
              <label>Example select</label>
              <select
                class="form-control"
                v-model="department"
                :placeholder="item.department"
              >
                <option v-for="dept in departments" :key="dept">
                  {{ dept.name }}
                </option>
              </select>
            </div>
            <button class="btn btn-primary" @click.prevent="handleSubmit">
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
      users: this.$store.state.users,
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      department: "",
      user: [],
      clonedUser: [
        {
          id: '',
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          department: "",
        },
      ],
      checker: "",
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
      // this.clonedUser.id=this.$route.params.userId;
      this.clonedUser.username = this.username;
      this.clonedUser.firstName = this.firstName;
      this.clonedUser.lastName = this.lastName;
      this.clonedUser.phone = this.phone;
      this.clonedUser.email = this.email;
      this.clonedUser.password = this.password;
      this.clonedUser.department = this.department;

      this.$store.state.users.push(this.user);
      //delete old
      this.$store.state.users = this.$store.state.users.filter(
        (user) => user.id != this.$route.params.userId
      );
      console.log(this.$store.state.users);
      //add new
      this.$store.state.users.push(this.clonedUser);
      console.log(this.$store.state.users);
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
  },
  created() {
    this.userId = this.$route.params.userId;
    this.user = this.$store.state.users.filter(
      (user) => user.id == this.userId
    );
    this.clonedUser.id=this.$route.params.userId;
  },
};
</script>

<style>
</style>