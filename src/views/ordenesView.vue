<template>
  <div class="view-container">
    <h1 class="text-h4 mb-6 text-primary">Mis Órdenes</h1>
    
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(order, index) in orders" :key="index">
        <v-card elevation="2" class="h-100">
          <v-card-title class="d-flex justify-space-between align-center">
            <span>Orden #{{ order.id }}</span>
            <v-chip :color="getStatusColor(order.status)" size="small">
              {{ order.status }}
            </v-chip>
          </v-card-title>
          
          <v-card-text>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-calendar</v-icon>
              <span>{{ order.date }}</span>
            </div>
            
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-clock</v-icon>
              <span>{{ order.time }}</span>
            </div>
            
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
              <span>{{ order.address }}</span>
            </div>
            
            <v-divider class="my-3"></v-divider>
            
            <div class="d-flex justify-space-between">
              <span class="font-weight-bold">Total:</span>
              <span class="text-success font-weight-bold">${{ order.total }}</span>
            </div>
          </v-card-text>
          
          <v-card-actions>
            <v-btn variant="text" color="primary">Detalles</v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="order.status === 'Pendiente'" variant="flat" color="error" size="small">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const orders = ref([
  { id: 'ORD-1234', date: '15 Ago 2025', time: '10:00 AM', address: 'Calle Principal #123', total: 45.99, status: 'Completado' },
  { id: 'ORD-1235', date: '16 Ago 2025', time: '02:30 PM', address: 'Avenida Central #456', total: 32.50, status: 'En Proceso' },
  { id: 'ORD-1236', date: '17 Ago 2025', time: '11:00 AM', address: 'Boulevard Norte #789', total: 28.75, status: 'Pendiente' },
])

const getStatusColor = (status) => {
  switch(status) {
    case 'Completado': return 'success'
    case 'En Proceso': return 'primary'
    case 'Pendiente': return 'secondary'
    default: return 'grey'
  }
}
</script>

<style scoped>
.view-container {
  animation: fadeIn 0.5s ease;
}

.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15) !important;
}
</style>