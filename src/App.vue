<template>
  <v-app>

    <prinToolbar></prinToolbar>

    <!-- <core-drawer /> -->

    <prinView></prinView>

    <prinFooter></prinFooter>

  </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
      //CoreDrawer: () => import('@/components/core/Drawer'),
      prinFooter: () => import('./components/Principal/Footer'),
      prinToolbar: () => import('./components/Principal/Toolbar'),
      prinView: () => import('@/components/Principal/View')
    },
    data () {
      return {
      //
      }
    }
  }
</script>