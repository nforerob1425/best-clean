<template>
  <v-app style="background-color: #f7f7f7ff;">
    <!-- App Bar -->
    <v-app-bar app color="primary" density="compact">
      <v-toolbar-title class="text-h5 font-weight-bold">
        <span class="text-accent">Best</span>Clean
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Botones de navegación para pantallas grandes -->
      <div class="d-none d-md-flex">
        <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.route" base-color="secondary" color="success" 
          variant="flat" class="mx-1" style="color: white">
          <v-icon start :icon="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </div>

      <!-- Menú para pantallas pequeñas -->
      <v-menu v-if="$vuetify.display.mdAndDown">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.route">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <!-- Transición para cambios de ruta -->
      <v-fade-transition mode="out-in">
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-fade-transition>
    </v-main>

    <!-- Footer -->
    <v-footer app color="primary" class="text-center d-flex flex-column py-4">
      <div class="text-white">
        © {{ new Date().getFullYear() }} BestClean - Todos los derechos reservados
      </div>
      <div class="d-flex mt-2">
        <v-btn icon variant="text" color="white">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon variant="text" color="white">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon variant="text" color="white">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
const menuItems = [
  { title: 'Recoger', route: '/', icon: 'mdi-package-variant' },
  { title: 'Entregar', route: '/entregar', icon: 'mdi-truck-delivery' },
  { title: 'Ordenes', route: '/ordenes', icon: 'mdi-clipboard-list' }
]

</script>

<style>
/* Estilos globales */
.v-application {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Animaciones y transiciones */
.v-btn {
  font-weight: 700;
  letter-spacing: 1px;
  margin-left: 8px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(59, 82, 217, 0.3);
}

.v-app-bar {
  box-shadow: 0 4px 12px rgba(59, 82, 217, 0.25);
}

/* Transiciones para el router */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilo para el menú activo en móviles */
.v-list-item--active {
  background-color: rgba(5, 242, 88, 0.1);
  color: #024e1d;
  font-weight: bold;
}

/* Estilo responsivo para el título */
@media (max-width: 600px) {
  .v-toolbar-title {
    font-size: 1.2rem !important;
  }
}
</style>