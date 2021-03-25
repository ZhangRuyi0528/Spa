<template>
    <div>
        <img src="../assets/404.png" alt="null" title="not found"/>
        page not found
    </div>
</template>

<script>
    export default {
        created() {
            console.log('404');
        }
    }
</script>

<style scoped>
    div,img {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 30px;
    }
</style>