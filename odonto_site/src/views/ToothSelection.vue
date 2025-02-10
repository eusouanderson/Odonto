<template>
  <div class="mouth-container">
    <!-- Linha superior -->
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="tooth-icon">
          <path d="M12 2C8.5 2 6 5 6 8V17C6 20 9 23 12 23C15 23 18 20 18 17V8C18 5 15.5 2 12 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 8H14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- Linha inferior -->
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="tooth-icon">
          <path d="M12 2C8.5 2 6 5 6 8V17C6 20 9 23 12 23C15 23 18 20 18 17V8C18 5 15.5 2 12 2Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 8H14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- Tooltip -->
    <div v-if="hoveredTooth" class="tooltip">{{ hoveredTooth }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredTooth: "",

      // Dentes superiores
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

      // Dentes inferiores
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
    selectTooth(id, row) {
      const teethRow = row === "top" ? this.topTeeth : this.bottomTeeth;
      const tooth = teethRow.find((t) => t.id === id);
      if (tooth) tooth.selected = !tooth.selected;
    },

     async sendSelectedTeeth() {
      const selectedTeeth = [...this.topTeeth, ...this.bottomTeeth].filter((t) => t.selected);
      try {
        await fetch("http://localhost:3000/tooth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(selectedTeeth)
        });
        alert("Dentes enviados com sucesso!");
      } catch (error) {
        console.error(error);
      }
    },
    async sendPatientData() {
      try {
        await fetch("http://localhost:3000/registers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.patient)
        });
        alert("Paciente cadastrado com sucesso!");
      } catch (error) {
        console.error(error);
      }
    },
    hoverTooth(name) {
      this.hoveredTooth = name;
    }
  }
};
</script>

<style scoped>
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
  width: 40px; 
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tooth.selected {
  transform: scale(1.2);
  z-index: 1;
}

.tooth-icon {
  width: 100%;
  height: 100%;
  stroke-width: 2;
}

.tooth.selected .tooth-icon {
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