<template>
  <footer class="bg-white shadow-md py-6 mt-10">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold text-blue-600">Dental Clinic</a>
      
      <!-- Links -->
      <nav class="flex space-x-6 text-gray-700 font-medium mt-4 md:mt-0">
        <a href="#about" class="hover:text-blue-600">Sobre</a>
        <a href="#services" class="hover:text-blue-600">Serviços</a>
        <a href="#contact" class="hover:text-blue-600">Contato</a>
      </nav>
      
      <!-- Redes Sociais -->
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="text-gray-500 hover:text-blue-600">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-gray-500 hover:text-blue-600">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="text-gray-500 hover:text-blue-600">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      
      <!-- Direitos Autorais -->
      <p class="text-gray-500 text-sm mt-4 md:mt-0">&copy; 2024 Dental Clinic. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
</style>
