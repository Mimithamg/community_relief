<!-- src/components/LocationPermissionModal.vue -->
<template>
  <div v-if="showModal" class="location-permission-modal">
    <div class="modal-content">
      <p>This website would like to access your location.</p>
      <button @click="grantPermission">Allow</button>
      <button @click="dismissModal">Dismiss</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    grantPermission() {
      // Check if geolocation is supported before requesting permission
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Permission granted, and position is available
            const { latitude, longitude } = position.coords;
            this.$emit('permissionGranted', { latitude, longitude });
          },
          (error) => {
            console.error('Error getting location:', error.message);
            // You may handle the error if needed
          }
        );
      } else {
        console.error('Geolocation is not supported.');
      }

      // Close the modal after emitting the event
      this.closeModal();
    },
    dismissModal() {
      // Close the modal without granting permission
      this.closeModal();
    },
    closeModal() {
      // Emit an event to notify the parent component to close the modal
      this.$emit('closeModal');
    },
  },
};
</script>

<style scoped>
.location-permission-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal-content {
  text-align: center;
}

/* Style for the close button */
button {
  margin: 5px;
}
</style>
