<template>
  <div class="home">
    <div class="video-container">
      <video 
        class="video-background" 
        autoplay 
        loop 
        muted 
        playsinline
        poster="../assets/videos/video_two.mp4"
      >
        <source src="../assets/videos/video_two.mp4" type="video/mp4" />
        
        Seu navegador não suporta o vídeo.
      </video>
    </div>
    <div class="content">
      <h1>Welcome to Contact</h1>
      <p>We're glad you're here!</p>
      <h3>Social Media</h3>
      

      <img class="logo" src="../assets/logo.png" alt="Dental Clinic Logo">
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
.home {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.video-background {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 1;
}

.content h1 {
    font-family: 'Lora', serif;
    color: #3a74d7;
    font-size: 3rem;
    font-weight: bold;
}

.content p {
    font-size: 1.5rem;
}

.logo {
    display: block;
    margin: 0 auto;
    max-width: 300px;
}
</style>


