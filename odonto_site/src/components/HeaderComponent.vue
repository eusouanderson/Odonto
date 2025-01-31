<template>
  <header :class="{'header-small': isHeaderSmall}" class="bg-blue-800 p-4 shadow-lg transition-all duration-1000 ease-in-out">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <img 
        v-show="!isMenuOpen"
        src="../assets/logo.png" 
        alt="Logo da Clínica Odonto" 
        class="logo transition-transform transform hover:scale-110 animate-logo"
      />      
      <h1 class="text-white text-4xl font-semibold opacity-0 animate-fadeIn md:ml-4">Dental Clinic</h1>
      <h4 class="text-white text-2xl font-semibold opacity-0 animate-fadeIn md:ml-4">Dr. Corneaud</h4>

      <!-- Navegação para desktop (aparece apenas no desktop) -->
      <nav class="hidden md:flex space-x-6 text-white font-medium mt-4 md:mt-0 md:flex-row flex-col">
        <a href="#about" class="hover:text-blue-600 transition-colors duration-300">About</a>
        <a href="#services" class="hover:text-blue-600 transition-colors duration-300">Services</a>
        <a href="#contact" class="hover:text-blue-600 transition-colors duration-300">Contact</a>
      </nav>

      <!-- Menu hamburguer para mobile (aparece apenas no mobile) -->
      <button 
        @click="toggleMenu" 
        class="md:hidden flex items-center justify-center text-white hover:bg-blue-600 p-2 rounded-md"
        aria-label="Menu de navegação"
      >
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-if="isMenuOpen" class="md:hidden flex flex-col items-center space-y-4 p-4 bg-blue-800 text-white mt-4">
      <a href="#home" class="hover:text-white-600">Home</a>
      <a href="#about" class="hover:text-white-600">About</a>
      <a href="#services" class="hover:text-white-600">Services</a>
      <a href="#contact" class="hover:text-white-600">Contact</a>
    </div>

  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
      isHeaderSmall: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  mounted() {
    setTimeout(() => {
      this.isHeaderSmall = true;
    }, 1500);
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes logoGrowShrink {
  0% {
    transform: scale(8);  /* Logo começa grande */
  }
  100% {
    transform: scale(1);  /* Logo reduz para tamanho normal */
  }
}

.animate-logo {
  animation: logoGrowShrink 1.5s ease-out forwards;
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-in-out forwards;
}

/* Estilo do logo */
.logo {
  width: auto;
  max-width: 200px; /* Ajusta o tamanho máximo do logo */
  transition: transform 0.5s ease; /* Suaviza a transição do logo */
}

/* Estilo do cabeçalho */
.header-small {
  padding: 1rem 0; /* Cabeçalho reduzido */
  transition: padding 1s ease-in-out; /* Suaviza a transição do padding */
}

/* Transição de redução do cabeçalho */
.header-small {
  padding: 0.5rem 0; /* Reduz a altura do cabeçalho quando o logo diminui */
}
</style>
