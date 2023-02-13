<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 xl:w-1/3 p-3" v-for="(user, index) in filteredUsers" :key="index">
        <div class="bg-white border rounded shadow">
          <div class="p-5">
            <h5 class="font-bold text-xl mb-2">{{ user.firstName }} {{ user.lastName }}</h5>
            <p class="text-gray-600 text-base mb-3">{{ user.email }}</p>
            <p class="text-gray-600 text-base mb-3">{{ user.phoneNumber }}</p>
            <p class="text-gray-600 text-base mb-3">{{ user.state }}</p>
            <p class="text-gray-600 text-base mb-3">{{ user.message }}</p>
            <div class="flex justify-between">
              <button @click="editUser(index)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
              <button @click="deleteUser(index)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <input type="text" class="border rounded p-2" v-model="filterKeyword" placeholder="Search by state or email">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [
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
      filterKeyword: ''
    }
  },
  computed: {
    filteredUsers() {
      return this.user.filter(user => {
        return user.state.toLowerCase().includes(this.filterKeyword.toLowerCase()) ||
               user.email.toLowerCase().includes(this.filterKeyword.toLowerCase());
      });
    }
  },
  methods: {
    updateUser(user) {
      // code to update user
      console.log(user)
    },
    
    deleteUser(user) {
      // code to delete user
      console.log(user)
    }, 

    editUser(user) {
      // code to delete user
      console.log(user)
    }
  }
}
</script>


