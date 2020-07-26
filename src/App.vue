<template>
    <div>
        <app-header></app-header>
        <index></index>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Index from './pages/Index.vue';

    import '@/assets/css/styles.css';
    import '@/assets/css/tailwind.css';



    export default {
        components: {
            appHeader: Header,
            'index': Index,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
