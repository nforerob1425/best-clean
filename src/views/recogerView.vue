<template>
  <div class="view-container">
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-h4 mb-6 text-primary">Recoger Ropa</h1>
        <p class="text-body-1 mb-8">Programa la recogida de tu ropa para lavado. Selecciona fecha y hora:</p>
        
        <v-form>
          <v-text-field
            label="Dirección de recogida"
            variant="outlined"
            color="primary"
            prepend-icon="mdi-map-marker"
          ></v-text-field>
          
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Fecha"
                type="date"
                variant="outlined"
                color="primary"
                prepend-icon="mdi-calendar"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Hora"
                type="time"
                variant="outlined"
                color="primary"
                prepend-icon="mdi-clock"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-btn 
            color="success" 
            size="large" 
            class="mt-4"
            prepend-icon="mdi-check"
          >
            Programar Recogida
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// Lógica específica para esta vista
</script>

<style scoped>
.view-container {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>