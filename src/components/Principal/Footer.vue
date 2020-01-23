<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        class="mx-4 white--text pt-1 font-size: 100px;"
      >
      SHADYS es un grupo de mancos que los une un solo motivo en la vida: tratar de jugar a League of Legends mediante el uso de técnicas ancestrales y el uso de muñones para ganar en diversión frente a sus rivales.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>EverCrips</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook', 'mdi-instagram', 'mdi-youtube'
      ],
    }),
  }
</script>
