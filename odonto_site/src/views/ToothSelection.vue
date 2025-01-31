<template>
  <div class="mouth-container">
    <!-- Linha superior -->
    <div class="tooth-row top-row">
      <div 
        v-for="tooth in topTeeth" 
        :key="tooth.id" 
        class="tooth"
        :class="{'selected': tooth.selected}"
        @click="selectTooth(tooth.id, 'top')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="tooth-icon">
          <path d="M12 2C9.34 2 7 4.5 7 7V17C7 19.5 9.34 22 12 22C14.66 22 17 19.5 17 17V7C17 4.5 14.66 2 12 2ZM12 17C11 17 10 16 10 15C10 14 11 13 12 13C13 13 14 14 14 15C14 16 13 17 12 17Z"/>
        </svg>
      </div>
    </div>
    
    <!-- Linha inferior -->
    <div class="tooth-row bottom-row">
      <div 
        v-for="tooth in bottomTeeth" 
        :key="tooth.id" 
        class="tooth"
        :class="{'selected': tooth.selected}"
        @click="selectTooth(tooth.id, 'bottom')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="tooth-icon">
          <path d="M12 2C9.34 2 7 4.5 7 7V17C7 19.5 9.34 22 12 22C14.66 22 17 19.5 17 17V7C17 4.5 14.66 2 12 2ZM12 17C11 17 10 16 10 15C10 14 11 13 12 13C13 13 14 14 14 15C14 16 13 17 12 17Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dentes superiores (incisivos, caninos, pré-molares, molares e dentes do siso)
      topTeeth: [
        { id: 1, selected: false }, { id: 2, selected: false }, { id: 3, selected: false }, { id: 4, selected: false }, 
        { id: 5, selected: false }, { id: 6, selected: false }, { id: 7, selected: false }, { id: 8, selected: false }, 
        { id: 9, selected: false }, { id: 10, selected: false }, { id: 11, selected: false }, { id: 12, selected: false },
        { id: 13, selected: false }, { id: 14, selected: false }, { id: 15, selected: false }, { id: 16, selected: false }
      ],
      
      // Dentes inferiores
      bottomTeeth: [
        { id: 17, selected: false }, { id: 18, selected: false }, { id: 19, selected: false }, { id: 20, selected: false }, 
        { id: 21, selected: false }, { id: 22, selected: false }, { id: 23, selected: false }, { id: 24, selected: false }, 
        { id: 25, selected: false }, { id: 26, selected: false }, { id: 27, selected: false }, { id: 28, selected: false },
        { id: 29, selected: false }, { id: 30, selected: false }, { id: 31, selected: false }, { id: 32, selected: false }
      ]
    };
  },
  methods: {
    selectTooth(id, row) {
      // Alterna o estado de seleção do dente
      const teethRow = row === 'top' ? this.topTeeth : this.bottomTeeth;
      const tooth = teethRow.find(t => t.id === id);
      tooth.selected = !tooth.selected;
    }
  }
};
</script>

<style scoped>
.mouth-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 400px 200px;
  margin: 20px;
}

.tooth-row {
  display: flex;
  justify-content: center;
  gap: 3px; /* Aproxima os dentes */
  border-top-left-radius: 400px 200px;
  margin-bottom: 10px;
}




.tooth {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.tooth.selected {
  transform: scale(1.2);
  z-index: 1;
}

.tooth-icon {
  width: 40px;
  height: 40px;
  stroke-width: 2;
  stroke: #000;
  fill: none;
}

.tooth:hover {
  transform: scale(1.1);
}

</style>
