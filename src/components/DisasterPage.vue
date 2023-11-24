<!-- src/components/DisasterPage.vue -->
<template>
  <div>
    <nav>
      <router-link to="/">Disaster Page</router-link>
      <router-link to="/home">Home</router-link>
      <!-- Add more navigation links as needed -->
    </nav>

    <h1>Disaster Page</h1>
    <!-- Add content for the disaster page here -->

    <!-- Include LocationPermissionModal component -->
    <LocationPermissionModal
      :showModal="showLocationPermissionModal"
      @permissionGranted="handlePermissionGranted"
      @dismissModal="dismissLocationPermissionModal"
      @closeModal="closeLocationPermissionModal"
    />

    <!-- Add content for the disaster page here -->
  </div>
</template>

<script>
import LocationPermissionModal from '@/components/LocationPermissionModal.vue';

export default {
  data() {
    return {
      userLocation: null,
      showLocationPermissionModal: true,
    };
  },
  methods: {
    handlePermissionGranted(location) {
      // Handle permission granted
      console.log('Permission granted. Location:', location);
      // You can perform additional actions with the user's location here
    },
    dismissLocationPermissionModal() {
      // Dismiss the location permission modal
      this.showLocationPermissionModal = false;
    },
    closeLocationPermissionModal() {
      // Close the location permission modal
      this.showLocationPermissionModal = false;
    },
    // ... other methods ...
  },
  components: {
    LocationPermissionModal,
  },
};
</script>

<style scoped>
/* Add component styles here */
nav {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
}
</style>
