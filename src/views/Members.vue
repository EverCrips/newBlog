<template>
  <div class="members">
      <memCard></memCard>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'members',
  components: {
    memCard: () => import('../components/Members/Card'),
  }
}
</script>
