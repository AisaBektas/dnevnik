<template>
  <div id="app">
    <Navbar />

    <div>
      <div class="row">
        <div class="col-md-3">
          <Sidebar />
        </div>
        <div class="col-md-9">
          <div class="container-fluid">
              <router-view />
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import Navbar from './components/shared/Navbar.vue'
import Sidebar from './components/shared/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
  },
}
</script>

<style>

</style>
