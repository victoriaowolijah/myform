<template>
    <div class="container mx-auto px-5">
      <h1 class="text-2xl font-bold text-center my-8">User Data</h1>
      <div class="flex justify-between items-center mb-8">
        <router-link :to="{ name: 'contact' }" class="bg-blue-500 px-5 py-3 rounded-lg text-white hover:bg-blue-600">Create Data</router-link>
        <select v-model="filterBy" class="border px-5 py-2">
            <option selected>Select State</option>
            <option v-for="(item, index) in $store.state.states" 
      :value="item" 
      :key="index">
        {{item}}
    </option>
        </select>
      </div>
      <table class="table-auto w-full text-left">
        <thead>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Phone Number</th>
            <th class="px-4 py-2">State</th>
            <th class="px-4 py-2">Message</th>
            <th class="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <!-- <template v-for="(group, groupName) in filteredUsers"> -->
            <!-- <tr class="bg-gray-300" v-if="filterBy  === 'state' || filterBy  === 'email'" :key="groupName">
              <td colspan="6" class="font-bold px-4 py-2">{{ groupName }}</td>
            </tr> -->
            <tr v-for="user in filteredUsers" :key="user.id">
              <td class="px-4 py-2">{{ user.firstName }} {{ user.lastName }}</td>
              <td class="px-4 py-2">{{ user.email }}</td>
              <td class="px-4 py-2">{{ user.phoneNumber }}</td>
              <td class="px-4 py-2">{{ user.state }}</td>
              <td class="px-4 py-2">{{ user.message }}</td>
              <td class="px-4 py-2">
                <button class="bg-yellow-500 px-2 py-1 rounded-lg text-white hover:bg-yellow-600 mr-2" @click="updateUser(user.id)">Update</button>
                <button class="bg-red-500 px-2 py-1 rounded-lg text-white hover:bg-red-600" @click="deleteUser(user.id)">Delete</button>
              </td>
            </tr>
          <!-- </template> -->
        </tbody>
      </table>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      users: [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@email.com',
          phoneNumber: '1234567890',
          state: 'California',
          message: 'Hello, I am interested in your product.'
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@email.com',
          phoneNumber: '0987654321',
          state: 'New York',
          message: 'Can you provide more information about your product?'
        },
        {
          firstName: 'Jim',
          lastName: 'Smith',
          email: 'jimsmith@email.com',
          phoneNumber: '5556667777',
          state: 'Texas',
          message: 'I would like to place an order.'
        }
      ],
      filterKeyword: '',
      filterBy: '',
    }
  },
  mounted() {this.$store.dispatch("getUserDetails")},
  computed: {
    filteredUsers() {
        console.log(this.$store.state.userDetails)

      if (this.filterBy !== "") {
        return this.$store.state.userDetails.filter(user => {
          return user.state.toLowerCase().includes(this.filterBy.toLowerCase())
        })
      }

      return this.$store.state.userDetails
    }
  },
  methods: {
    updateUser(user) {
      // Add logic to update user
      console.log(user)
    },
    deleteUser(user) {
      // Add logic to delete user
      console.log(user)
      this.$store.dispatch("deleteUserDetails", user)
    //   this.filteredUsers()
    }
  }
}
</script>



  