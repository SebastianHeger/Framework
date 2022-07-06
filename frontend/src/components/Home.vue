<template>
    <div class="row justify-center">
        <div class="col-xs-12 col-sm-8 col-md-6">
            <q-card class="q-ma-md">
                <q-card-section>
                    <div class="text-h4">Homepage</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                </q-card-section>
                <q-card-actions class="justify-center">
                    <q-btn push class="glossy q-ma-xs" color="primary" label="Go to the about page" :to="{ name: 'About'}" />
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home", 
    components: {
    },
    setup() {
       
    } 
}
</script>