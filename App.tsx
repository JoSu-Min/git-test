import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 헤더 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>어르신 케어 앱</Text>
          <Text style={styles.headerSubtitle}>건강하고 행복한 일상을 위해</Text>
        </View>

        {/* 메인 메뉴 */}
        <View style={styles.menuContainer}>
          
          {/* 건강 체크 버튼 */}
          <TouchableOpacity style={styles.menuButton}>
            <View style={styles.buttonIcon}>
              <Ionicons name="heart" size={40} color="#fff" />
            </View>
            <Text style={styles.buttonText}>건강 체크</Text>
            <Text style={styles.buttonSubtext}>혈압, 혈당 측정</Text>
          </TouchableOpacity>

          {/* 약물 관리 버튼 */}
          <TouchableOpacity style={styles.menuButton}>
            <View style={styles.buttonIcon}>
              <Ionicons name="medical" size={40} color="#fff" />
            </View>
            <Text style={styles.buttonText}>약물 관리</Text>
            <Text style={styles.buttonSubtext}>복용 시간 알림</Text>
          </TouchableOpacity>

          {/* 응급 연락처 버튼 */}
          <TouchableOpacity style={styles.emergencyButton}>
            <View style={styles.emergencyIcon}>
              <Ionicons name="call" size={50} color="#fff" />
            </View>
            <Text style={styles.emergencyText}>응급 연락처</Text>
            <Text style={styles.emergencySubtext}>긴급상황 시 연락</Text>
          </TouchableOpacity>

          {/* 일정 관리 버튼 */}
          <TouchableOpacity style={styles.menuButton}>
            <View style={styles.buttonIcon}>
              <Ionicons name="calendar" size={40} color="#fff" />
            </View>
            <Text style={styles.buttonText}>일정 관리</Text>
            <Text style={styles.buttonSubtext}>병원 예약, 약속</Text>
          </TouchableOpacity>

        </View>

        {/* 하단 정보 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>오늘도 건강한 하루 되세요!</Text>
          <Text style={styles.footerSubtext}>도움이 필요하시면 언제든 연락주세요</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: width * 0.08, // 반응형 폰트 크기
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: width * 0.045,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  menuContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  menuButton: {
    backgroundColor: '#3498db',
    borderRadius: 15,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emergencyButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 15,
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 8,
  },
  buttonIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  emergencyIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 50,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  buttonText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  emergencyText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  buttonSubtext: {
    fontSize: width * 0.04,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  emergencySubtext: {
    fontSize: width * 0.045,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },
  footerSubtext: {
    fontSize: width * 0.04,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});
