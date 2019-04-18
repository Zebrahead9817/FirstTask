<template>
    <div>
    <h1>Итого: {{this.$store.state.cin}}</h1>
        <button @click="$router.push({name: 'FirstList'})">На главную</button>
    </div>
</template>

<script>
    export default{
        name: 'ThirdList'
    }
</script>
