import { Image } from 'react-native';

// 기본 아이콘 이미지 컴포넌트
export const IconImage = ({ size = 100, color = '#000' }) => {
  return (
    <Image
      source={{
        uri: 'data:image/svg+xml;base64,' + btoa(`
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="${color}" stroke="#fff" stroke-width="2"/>
            <text x="50" y="60" text-anchor="middle" fill="#fff" font-size="40" font-family="Arial">👴</text>
          </svg>
        `)
      }}
      style={{ width: size, height: size }}
    />
  );
};
