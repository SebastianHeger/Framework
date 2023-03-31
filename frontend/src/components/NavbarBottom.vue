<template>
  <q-toolbar class="bg-secondary glossy text-black">
    <q-space />
    <q-btn
      flat
      stretch
      class="q-ma-xs"
      label="Impressum"
      :to="{ name: 'Imprint' }"
    />
    <q-btn
      flat
      stretch
      class="q-ma-xs"
      label="Datenschutz"
      :to="{ name: 'DataProtection' }"
    />
    <q-space />
  </q-toolbar>
</template>

<script lang="ts" setup>
</script>
