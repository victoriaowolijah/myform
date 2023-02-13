<template>
  <div class="p-4">
    <form>
      <div class="flex mb-4">
        <div class="w-1/2 pr-2">
          <label class="block font-bold mb-2" for="firstName">First Name</label>
          <input class="border border-gray-400 p-2 w-full" type="text" id="firstName" required />
        </div>
        <div class="w-1/2 pl-2">
          <label class="block font-bold mb-2" for="lastName">Last Name</label>
          <input class="border border-gray-400 p-2 w-full" type="text" id="lastName" required />
        </div>
      </div>
      <div class="mb-4">
        <label class="block font-bold mb-2" for="email">Email</label>
        <input class="border border-gray-400 p-2 w-full" type="email" id="email" required />
      </div>
       <div class="flex mb-4">
        <div class="w-1/2 pr-2 mb-4 sm:mb-0">
          <label class="block font-bold mb-2" for="phoneNumber">Phone Number</label>
          <input class="border border-gray-400 p-2 w-full" type="tel" id="phoneNumber" required />
        </div>
        <div class="w-1/2 pl-2 mb-4 sm:mb-0">
          <label class="block font-bold mb-2" for="state">State</label>
          <select class="border border-gray-400 p-2 w-full" id="state">
            <option>Abia</option>
            <option>Adamawa</option>
            <option>Akwa Ibom</option>
            <option>Anambra</option>
            <option>Bauchi</option>
            <!-- Add the rest of the states here -->
          </select>
        </div>
       </div>
      <div class="mb-4">
        <input type="checkbox" class="mr-2" id="privacyPolicy" required />
        <label for="privacyPolicy">I have read and accept the privacy policy</label>
      </div>
      <div class="mb-4">
        <label class="block font-bold mb-2" for="message">Message</label>
        <textarea class="border border-gray-400 p-2 w-full" id="message" rows="5" required></textarea>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>


<script>
export default {
    name: 'ContactForm',

}
</script>

