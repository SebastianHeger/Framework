<template>
  <div class="row justify-center">
        <div class="col-xs-12 col-sm-8 col-md-4">
            <q-card class="q-ma-md">
                <q-card-section>
                    <div class="text-h4">Login</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                    <q-input class="q-pa-sm" outlined v-model="username" label="Username" />
                    <q-input class="q-pa-sm" outlined v-model="password" label="Password" />
                </q-card-section>
                <q-card-actions class="justify-center">
                    <q-btn push class="glossy q-ma-xs" color="primary" label="Login" />
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    
  },
  setup() {
       
  }
} 
</script>