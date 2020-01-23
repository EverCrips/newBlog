<template>
  <div>
    <v-container>
      <v-bottom-navigation :value="activeBtn" grow color="teal" horizontal>
        <!--<router-link to="/">
          <v-img
            :src="require('@/assets/img/logo_v1.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
            href="{name: 'about'}"
          />
        </router-link>-->
        <v-btn to="/">
          <span>Inicio</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="/about">
          <span>Sobre</span>
          <v-icon>mdi-exclamation</v-icon>
        </v-btn>

        <v-btn to="/members">
          <span>Miembros</span>
          <v-icon>mdi-account-multiple</v-icon>
        </v-btn>

        <v-btn to="/extras">
          <span>Extras</span>
          <v-icon>mdi-more</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
