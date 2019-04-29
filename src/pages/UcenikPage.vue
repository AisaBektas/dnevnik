<template>
  <div class="row">
    <Ucenik class="col-md-3" />
    <Ocjene class="col-md-9" />
  </div>
</template>

<script>

import Ucenik from '../components/shared/Ucenik.vue'
import Ocjene from '../components/shared/Ocjene.vue'

export default {
  name: 'app',
  components: {
    Ucenik,
    Ocjene
  }
}
</script>

<style>

.width-50 {
  width: 50%;
}
.inline-block-new {
  display: inline-block;
}

</style>
