<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
            <span class="navbar-brand" href="#">Nicolas C.</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                <div class="navbar-nav m-auto">
                    <router-link class="link-light link-underline-opacity-0 link-opacity-75-hover px-3 " to="/">
                        Home
                    </router-link>
                    <router-link class="link-light link-underline-opacity-0 link-opacity-75-hover px-3"
                        to="/AcercaDeMi">Acerca de Mi</router-link>
                    <router-link class="link-light link-underline-opacity-0 link-opacity-75-hover px-3"
                        to="/MisProyectos">Mis Proyectos</router-link>
                    <router-link class="link-light link-underline-opacity-0 link-opacity-75-hover px-3"
                        to="/Contacto">Contacto</router-link>
                </div>
            </div>

        </div>
    </nav>

    <router-view />
</template>

<style scoped>
nav {
    background-color: #121116;
}
</style>
