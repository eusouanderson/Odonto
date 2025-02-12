<template>
  <div class="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-6 space-x-4">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
      Patient Registration and Tooth Selection
    </h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Formulário do Paciente -->
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
          <label class="block text-gray-700 font-semibold mb-1">Birthdate</label>
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

      <!-- Seleção de Dentes -->
      <div class="mouth-container">
        <div class="tooth-row top-row">
          <h1>Dentes Superiores</h1>
          <div
            v-for="tooth in topTeeth"
            :key="tooth.id"
            class="tooth"
            :class="{ selected: tooth.selected }"
            @click="selectTooth(tooth.id, 'top')"
            @mouseover="hoverTooth(tooth.name)"
            @mouseleave="hoverTooth('')"
          >
            🦷
          </div>
        </div>

        <div class="tooth-row bottom-row">
          <h1>Dentes Inferiores</h1>
          <div
            v-for="tooth in bottomTeeth"
            :key="tooth.id"
            class="tooth"
            :class="{ selected: tooth.selected }"
            @click="selectTooth(tooth.id, 'bottom')"
            @mouseover="hoverTooth(tooth.name)"
            @mouseleave="hoverTooth('')"
          >
            🦷 
          </div>
        </div>

        <!-- Tooltip -->
        <div v-if="hoveredTooth" class="tooltip">{{ hoveredTooth }}</div>
      </div>

      <button type="submit" class="animated-button">Register and Submit Teeth</button>
    </form>
  </div>
</template>

<script>
import { sendPatientData, sendSelectedTeeth } from "@/service/api.service";
import { mask } from "vue-the-mask";
import { useToast } from "vue-toastification"; 

export default {
  directives: { mask },
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
      hoveredTooth: "",
      topTeeth: [
        { id: 1, name: "Terceiro Molar Superior Esquerdo", selected: false },
        { id: 2, name: "Segundo Molar Superior Esquerdo", selected: false },
        { id: 3, name: "Primeiro Molar Superior Esquerdo", selected: false },
        { id: 4, name: "Segundo Pré-Molar Superior Esquerdo", selected: false },
        { id: 5, name: "Primeiro Pré-Molar Superior Esquerdo", selected: false },
        { id: 6, name: "Canino Superior Esquerdo", selected: false },
        { id: 7, name: "Incisivo Lateral Superior Esquerdo", selected: false },
        { id: 8, name: "Incisivo Central Superior Esquerdo", selected: false },
        { id: 9, name: "Incisivo Central Superior Direito", selected: false },
        { id: 10, name: "Incisivo Lateral Superior Direito", selected: false },
        { id: 11, name: "Canino Superior Direito", selected: false },
        { id: 12, name: "Primeiro Pré-Molar Superior Direito", selected: false },
        { id: 13, name: "Segundo Pré-Molar Superior Direito", selected: false },
        { id: 14, name: "Primeiro Molar Superior Direito", selected: false },
        { id: 15, name: "Segundo Molar Superior Direito", selected: false },
        { id: 16, name: "Terceiro Molar Superior Direito", selected: false }
      ],
      bottomTeeth: [
        { id: 17, name: "Terceiro Molar Inferior Esquerdo", selected: false },
        { id: 18, name: "Segundo Molar Inferior Esquerdo", selected: false },
        { id: 19, name: "Primeiro Molar Inferior Esquerdo", selected: false },
        { id: 20, name: "Segundo Pré-Molar Inferior Esquerdo", selected: false },
        { id: 21, name: "Primeiro Pré-Molar Inferior Esquerdo", selected: false },
        { id: 22, name: "Canino Inferior Esquerdo", selected: false },
        { id: 23, name: "Incisivo Lateral Inferior Esquerdo", selected: false },
        { id: 24, name: "Incisivo Central Inferior Esquerdo", selected: false },
        { id: 25, name: "Incisivo Central Inferior Direito", selected: false },
        { id: 26, name: "Incisivo Lateral Inferior Direito", selected: false },
        { id: 27, name: "Canino Inferior Direito", selected: false },
        { id: 28, name: "Primeiro Pré-Molar Inferior Direito", selected: false },
        { id: 29, name: "Segundo Pré-Molar Inferior Direito", selected: false },
        { id: 30, name: "Primeiro Molar Inferior Direito", selected: false },
        { id: 31, name: "Segundo Molar Inferior Direito", selected: false },
        { id: 32, name: "Terceiro Molar Inferior Direito", selected: false }
      ]
    };
  },
  methods: {
    resetForm() {
      this.patient = {
        name: "",
        cpf: "",
        birthdate: "",
        phone: "",
        email: "",
        address: "",
      };
      this.topTeeth.forEach(tooth => tooth.selected = false);
      this.bottomTeeth.forEach(tooth => tooth.selected = false);
    },

    selectTooth(id, position) {
      const targetToothList = position === "top" ? this.topTeeth : this.bottomTeeth;
      const targetTooth = targetToothList.find(tooth => tooth.id === id);
      if (targetTooth) {
        targetTooth.selected = !targetTooth.selected;
        console.log(targetTooth);
      }
    },

    hoverTooth(toothName) {
      this.hoveredTooth = toothName;
    },

    async submitForm() {
      try {
        //console.log(this.topTeeth.concat(this.bottomTeeth));
        await sendPatientData(this.patient);
        await sendSelectedTeeth(this.topTeeth.concat(this.bottomTeeth));
        this.resetForm();
        
        const toast = useToast();
        toast.success("Patient and tooth data submitted successfully!");
      } catch (error) {
        const toast = useToast();
        toast.error("Patient is already registered!");
      }
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.4rem;
  margin-bottom: 1.2rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  font-size: 1rem;
}
.mouth-container {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px; 
}

h1 {
  text-align: left;
  line-height: normal;
  width: 100%;
  font-size: 1.2rem; 
  margin-bottom: 20px;
  text-align: center;
}

.tooth {
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s;
}



.tooth-row {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
  flex-wrap: wrap; 
}

.tooth {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: relative;
  width: 30px; 
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tooth.selected {
  transform: scale(1.2);
  z-index: 1;
  border: 2px solid #003366;
  box-shadow: 0 0 8px #003366, 0 0 15px #003366; 
}

.tooth.selected .tooth-icon {
  stroke: #003366;
  fill: #003366;
}


.tooth.selected .tooth-icon {
  border: #003366 2px solid;
  stroke: #003366;
  fill: #003366;
}

.tooth:hover {
  transform: scale(1.1);
}

.tooltip {
  position: absolute;
  top: -60px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  pointer-events: none;
}
.btn {
  background-color: #003366;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
@media (max-width: 768px) {
  h1 {
    font-size: 1rem;
  }

  .tooth-row {
    gap: 10px;
  }

  .tooth {
    width: 35px;
    height: 35px;
  }

  .tooltip {
    font-size: 12px;
    top: -50px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 0.9rem; 
  }

  .tooth-row {
    gap: 15px; 
  }

  .tooth {
    width: 30px;
    height: 30px;
  }

  .tooltip {
    font-size: 10px;
  }
}

</style>
