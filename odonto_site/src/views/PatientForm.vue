<template>
  <div class="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-6 space-x-4">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
      Patient Registration
    </h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label class="block text-gray-700 font-semibold mb-1">Name</label>
        <input
          v-model="patient.name"
          type="text"
          required
          class="input"
          placeholder="Full Name"
        />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-1">CPF</label>
          <input
            v-model="patient.cpf"
            v-mask="'###.###.###-##'"
            type="text"
            required
            class="input"
            placeholder="000.000.000-00"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-1">
            Birthdate
          </label>
          <input v-model="patient.birthdate" type="date" required class="input" />
        </div>
      </div>

      <div>
        <label class="block text-gray-700 font-semibold mb-1">Phone</label>
        <input
          v-model="patient.phone"
          v-mask="'(##) #####-####'"
          type="text"
          required
          class="input"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-semibold mb-1">E-mail</label>
        <input
          v-model="patient.email"
          type="email"
          required
          class="input"
          placeholder="email@example.com"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-semibold mb-1">Address</label>
        <textarea
          v-model="patient.address"
          required
          class="input"
          placeholder="Street, Number, Neighborhood"
        ></textarea>
      </div>

      <ToothSelection />

      <button type="submit" @click="handleSubmit" class="btn">Register</button>
    </form>
  </div>
</template>

<script>
import { sendPatientData } from "@/service/api.service";
import ToothSelection from "./ToothSelection.vue";
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  components: {
    ToothSelection,
  },
  data() {
    return {
      patient: {
        name: "",
        cpf: "",
        birthdate: "",
        phone: "",
        email: "",
        address: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.patient);
    },
    async submitForm() {
      try {
        await sendPatientData(this.patient);
        alert("Patient registered successfully!");
        this.$router.push("/");
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while registering the patient.");
      }
    },
  },
};
</script>

<style scoped>
h2 {
  @apply text-3xl font-bold text-gray-800 mb-6 text-center m-9;
}
.input {
  @apply w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400;
}
.btn {
  @apply w-full bg-blue-600 text-white py-2 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300;
}
</style>
