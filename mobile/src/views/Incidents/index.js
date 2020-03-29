import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import LogoImg from '../../assets/logo.png';

import api from '../../services/api';
import styles from './styles';

function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    loadIncidents();
  }, []);

  async function loadIncidents() {
    if (isLoading) return;

    if (total > 0 && incidents.length === total) return;

    setIsLoading(true);
    
    const res = await api.get('incidents', {
      params: { page }
    });
    
    setIncidents([...incidents, ...res.data]);
    setTotal(res.headers['x-total-count']);
    setPage(page + 1);
    setIsLoading(false);
  }

  function navigateToDetails(incident) {
    navigation.navigate('Details', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>
        Bem-vindo!
      </Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia!
      </Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={1.0}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>
              ONG:
            </Text>
            <Text style={styles.incidentValue}>
              {incident.name}
            </Text>

            <Text style={styles.incidentProperty}>
              CASO:
            </Text>
            <Text style={styles.incidentValue}>
              {incident.title}
            </Text>

            <Text style={styles.incidentProperty}>
              VALOR:
            </Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetails(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#fff' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Incidents;
