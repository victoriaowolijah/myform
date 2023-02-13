<template>
  <div class="px-10 sm:px-2 bg-sky-500/100">
  <div v-if="messageSent" class="text-center ">
      <p class="mb-4">message sent</p>
    <router-link :to="{ name: 'data' }" class="bg-blue-500 px-5 py-3 rounded-lg text-white hover:bg-blue-600">View Data</router-link>
  </div>
  <div v-else>
    <form @submit.prevent="submitForm">
      <div class="flex mb-4">
        <div class="w-1/2 pr-2">
          <label class="block font-bold mb-2" for="firstName">First Name</label>
          <input
            class="border border-gray-400 p-2 w-full"
            type="text"
            id="firstName"
            v-model="formData.firstName"
            required
          />
          <p class="text-red-500" v-if="errors.firstName">{{ errors.firstName }}</p>
        </div>
        <div class="w-1/2 pl-2">
          <label class="block font-bold mb-2" for="lastName">Last Name</label>
          <input
            class="border border-gray-400 p-2 w-full"
            type="text"
            id="lastName"
            v-model="formData.lastName"
            required
          />
          <p class="text-red-500" v-if="errors.lastName">{{ errors.lastName }}</p>
        </div>
      </div>
      <div class="mb-4">
        <label class="block font-bold mb-2" for="email">Email</label>
        <input
          class="border border-gray-400 p-2 w-full"
          type="email"
          id="email"
          v-model="formData.email"
          required
        />
        <p class="text-red-500" v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div class="flex mb-4">
        <div class="w-1/2 pr-2 mb-4 sm:mb-0">
          <label class="block font-bold mb-2" for="phoneNumber">Phone Number</label>
          <input
            class="border border-gray-400 p-2 w-full"
            type="tel"
            id="phoneNumber"
            v-model="formData.phoneNumber"
            required
          />
          <p class="text-red-500" v-if="errors.phoneNumber">{{ errors.phoneNumber }}</p>
        </div>
        <div class="w-1/2 pl-2 mb-4 sm:mb-0">
          <label class="block font-bold mb-2" for="state">State</label>
          <select class="border border-gray-400 p-2 w-full" id="state" v-model="formData.state">
            <option v-for="(item, index) in $store.state.states" 
      :value="item" 
      :key="index">
        {{item}}
    </option>
            
          </select>
        </div>
      </div>
      <div class="mb-4">
        <input type="checkbox" class="mr-2" id="privacyPolicy" v-model="formData.privacyPolicy" required />
        <label for="privacyPolicy">I have read and accept the privacy policy</label>
        <span v-if="!formData.privacyPolicy" class="text-red-500 font-bold">*</span>
      </div>
      <div class="mb-4">
        <label class="block font-bold mb-2" for="message">Message</label>
        <textarea class="border border-gray-400 p-2 w-full" id="message" rows="5" v-model="formData.message" required></textarea>
        <span v-if="!formData.message" class="text-red-500 font-bold">*</span>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" :disabled="!formData.privacyPolicy || !formData.message">
        Submit
      </button>
    </form>
  </div>
  </div>
</template>


<script>
export default {
     name: 'ContactForm',
  data() {
    return {
      messageSent: false,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        state: "",
        privacyPolicy: false,
        message: ""
      },
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.formData.firstName) {
        this.errors.firstName = "First name is required";
      }
      if (!this.formData.lastName) {
        this.errors.lastName = "Last name is required";
      }
      if (!this.formData.email) {
        this.errors.email = "Email is required";
      } else if (!this.validateEmail(this.formData.email)) {
        this.errors.email = "Email is not valid";
      }
      if (!this.formData.phoneNumber) {
        this.errors.phoneNumber = "Phone number is required";
      }
      if (!this.formData.state) {
        this.errors.state = "State is required";
      }
      if (!this.formData.privacyPolicy) {
        this.errors.privacyPolicy = "Privacy policy must be accepted";
      }
      if (!this.formData.message) {
        this.errors.message = "Message is required";
      }
      return Object.keys(this.errors).length === 0;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submitForm() {
      if (this.validateForm()) {
        // submit the form here
        console.log(JSON.stringify(this.formData))
        this.$store.dispatch('setUserDetails',this.formData)
        this.messageSent = true
        this.formData = {}
      }
    }
  }
};
</script>


