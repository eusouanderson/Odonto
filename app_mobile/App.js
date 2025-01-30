import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { Video } from 'expo-av';

// Componente principal
export default function App() {
  const videoRef = useRef(null);  // Usando uma referência para o componente Video
  const [isPlaying, setIsPlaying] = useState(false);  // Estado para controlar a reprodução

  const handlePlaybackStatusUpdate = (status) => {
    if (status.isLoaded && !status.isPlaying) {
      videoRef.current.playAsync();  // Se o vídeo não estiver tocando, toque-o
    }

    // Verificar se o vídeo terminou e reiniciar
    if (status.didJustFinish) {
      videoRef.current.playAsync(); // Recomeçar o vídeo quando ele terminar
    }
  };

  return (
    <Container>
      <VideoBackground
        ref={videoRef}  // Referência para controle do vídeo
        source={require('./assets/videos/odonto_video.mp4')}
        resizeMode="cover"
        isLooping
        shouldPlay={true}  // Reproduzir automaticamente
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}  // Função para atualizar o status
      />
      
      <Content>
        <Header>
          <Title>Consultório Odontológico</Title>
          <Subtitle>Seu sorriso é nossa prioridade!</Subtitle>
        </Header>

        <ImageContainer>
          <Image
            source={{ uri: 'https://example.com/imagem-sorriso.jpg' }} 
            style={{ width: '100%', height: 200, borderRadius: 10 }}
          />
        </ImageContainer>

        <TextSection>
          <Description>
            Em nosso consultório, oferecemos um atendimento de qualidade para cuidar da saúde do seu sorriso.
          </Description>
          <CallToAction>
            <ButtonText>Agende sua consulta!</ButtonText>
          </CallToAction>
        </TextSection>

        <Footer>
          <FooterText>© 2025 Consultório Odontológico | Todos os direitos reservados</FooterText>
        </Footer>
      </Content>
    </Container>
  );
}

// Styled Components para estilização
const Container = styled.View`
  flex: 1;
  background-color: #f0f8ff;
  justify-content: center;
  align-items: center;
`;

const VideoBackground = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1;
`;

const Header = styled.View`
  margin-bottom: 20px;
  text-align: center;
  z-index: 2;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #005f73;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: #0a9396;
  margin-top: 5px;
`;

const ImageContainer = styled.View`
  margin-bottom: 30px;
  z-index: 2;
`;

const TextSection = styled.View`
  align-items: center;
  margin-bottom: 20px;
  z-index: 2;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 30px;
`;

const CallToAction = styled(TouchableOpacity)`
  background-color: #ee9b00;
  padding: 12px 30px;
  border-radius: 50px;
  elevation: 5;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

const Footer = styled.View`
  align-items: center;
  margin-top: 20px;
  z-index: 2;
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: #aaa;
`;
