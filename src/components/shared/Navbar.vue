<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">eDnevnik</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        
        <li class="nav-item">
            
            <router-link to="ucenik"><a class="nav-link" href="#">Ucenik</a></router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">Profesor</a>
        </li>
        </ul>
        <router-link to="admin"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Admin</button></router-link>
    </div>
    </nav>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
