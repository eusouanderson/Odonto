<template>
  <div id="app">
    <HeaderComponent />
    
    <!-- O Router-view agora é responsável por renderizar tanto HomeView quanto ContactView -->
    <transition name="fade">
      <router-view />
    </transition>

    <!-- Botão para exibir/ocultar o formulário do paciente -->
    <button class="animated-button" @click="togglePatientForm">
      {{ showPatientForm ? 'Close' : 'Open' }} Patient Inclusion
    </button>
    <!-- Exibe PatientForm condicionalmente -->
    <PatientForm v-if="showPatientForm" />

    <FooterComponent />
  </div>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue'
import PatientForm from './views/PatientForm.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'AppComponent',
  components: {
    HeaderComponent,
    PatientForm,
    FooterComponent
  },
  data() {
    return {
      showPatientForm: false
    }
  },
  computed: {
    // Verifica se a rota atual é '/#contact'
    isContactRoute() {
      return this.$route.hash === '#contact';
    }
    
  },
  
  methods: {
    togglePatientForm() {
      this.showPatientForm = !this.showPatientForm;
    }
  }
}
</script>

<style scoped>
/* Animação de fade para transições de componentes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilização para que o ContactView fique sobreposto */
.router-view-contact {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Botão animado com visual moderno e profissional */
.animated-button {
  position: absolute;
  
  right: 20px;     /* Ajuste conforme necessário */
  background: linear-gradient(135deg, #3f51b5, #2196f3);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

/* Efeito de slide e refinamento ao passar o mouse */
.animated-button:hover {
  transform: translateX(8px);
  background: linear-gradient(135deg, #303f9f, #1976d2);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* Estado de foco para acessibilidade */
.animated-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.3);
}
</style>
