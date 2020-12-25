<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-8 m-auto">
          <form>
            <div class="mb-3">
              <label class="form-label">user name</label>
              <input type="text" class="form-control" v-model="username" />
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
              <label class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <div class="mb-3">
              <label class="form-label">email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              />
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
            <button class="btn btn-primary" @click.prevent="handleSubmit">
              Create User
            </button>
            <div class="alert alert-danger mt-5" role="alert" v-if="checker">
              {{ checker }}
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
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      department: "",
      user: [
        {
          id: 0,
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          department: ""
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
      this.user.id = Math.random();
      this.user.username = this.username;
      this.user.firstName = this.firstName;
      this.user.lastName = this.lastName;
      this.user.phone = this.phone;
      this.user.email = this.email;
      this.user.password = this.password;
      this.user.department = this.department;
      this.$store.state.users.push(this.user);
      //   console.log(this.$store.state.users);
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
};
</script>

<style>
.btn {
  width: 120px;
}
</style>