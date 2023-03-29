<template>
  <div class="row justify-center">
    <div class="col-xs-12 col-sm-8 col-md-6">
      <q-card class="q-ma-md">
        <q-card-section>
          <div class="text-h4">Hallo {{ authStore.user }}</div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <p v-if="userData !== null">Vorname: {{ userData?.first_name }}</p>
          <p v-if="userData !== null">Nachname: {{ userData?.last_name }}</p>
          <p v-if="userData !== null">Benutzername: {{ userData?.username }}</p>
          <p v-if="userData !== null">E-Mail: {{ userData?.email }}</p>
          <p v-if="userData !== null">
            Letzter Login: {{ userData?.last_login }}
          </p>

          <q-btn
            push
            class="glossy q-ma-xs"
            color="primary"
            label="Passwort ändern"
            no-caps
            @click="showChangePasswordDialog = true"
          />
          <q-dialog v-model="showChangePasswordDialog" persistent>
            <q-card style="width: 700px; max-width: 80vw">
              <q-card-section>
                <div class="text-h6">Passwort ändern</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input
                  class="q-ma-lg"
                  outlined
                  v-model="passwordOld"
                  label="Aktuelles Passwort"
                  dense
                  :type="showPasswordOld ? 'text' : 'password'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="showPasswordOld ? 'visibility' : 'visibility_off'"
                      class="cursor-pointer"
                      @click="showPasswordOld = !showPasswordOld"
                    />
                  </template>
                </q-input>
                <q-separator inset />
                <q-input
                  class="q-ma-lg"
                  outlined
                  v-model="passwordNew"
                  label="Neues Passwort"
                  dense
                  :rules="[
                    (passwordNew) =>
                      !!passwordNew || 'Bitte ein neues Passwort eingeben',
                    isValidPassword,
                  ]"
                  :type="showPasswordNew ? 'text' : 'password'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="showPasswordNew ? 'visibility' : 'visibility_off'"
                      class="cursor-pointer"
                      @click="showPasswordNew = !showPasswordNew"
                    />
                  </template>
                </q-input>
                <q-input
                  class="q-ma-lg"
                  outlined
                  v-model="passwordNewCompare"
                  label="Neues Passwort bestätigen"
                  dense
                  :rules="[
                    (passwordNewCompare) =>
                      passwordNewCompare === passwordNew ||
                      'Die Passwörter stimmen nicht überein',
                  ]"
                  :type="showPasswordNewCompare ? 'text' : 'password'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="
                        showPasswordNewCompare ? 'visibility' : 'visibility_off'
                      "
                      class="cursor-pointer"
                      @click="showPasswordNewCompare = !showPasswordNewCompare"
                    />
                  </template>
                </q-input>
              </q-card-section>

              <q-card-actions align="around">
                <q-btn
                  class="glossy q-ma-xs"
                  no-caps
                  label="Abbrechen"
                  v-close-popup
                  @click="showChangePasswordDialog = false"
                />
                <q-btn
                  push
                  class="glossy q-ma-xs"
                  color="primary"
                  label="Passwort ändern"
                  no-caps
                  @click="changePassword()"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
import { Notify } from "quasar";
import UserService from "../services/user";
import { User } from "../services/user";

const userService = new UserService();

const authStore = useAuthStore();
const userData = ref<User>();
const showChangePasswordDialog = ref(false);

const passwordOld = ref("");
const passwordNew = ref("");
const passwordNewCompare = ref("");

const showPasswordOld = ref(false);
const showPasswordNew = ref(false);
const showPasswordNewCompare = ref(false);

function isValidPassword(val: string) {
  const passwordRuleset =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return (
    passwordRuleset.test(val) ||
    "Das Passwort muss mindestens 8 Zeichen lang sein, mindestens ein Sonderzeichen, einen Kleinbuchstaben, einen Großbuchstaben und eine Zahl enthalten"
  );
}

function changePassword() {
  if (
    passwordNew.value === passwordNewCompare.value &&
    userData.value !== null
  ) {
    if (userData.value !== undefined) {
      userService
        .changePassword(
          userData.value.id,
          passwordOld.value,
          passwordNew.value,
          passwordNewCompare.value
        )
        .then((result) => {
          showChangePasswordDialog.value = false;
          Notify.create({
            message: "Passwort erfolgreich geändert",
            color: "positive",
            actions: [
              {
                label: "Dismiss",
                color: "white",
                handler: () => {
                  /* ... */
                },
              },
            ],
          });
        })
        .catch((error) => {
          Notify.create({
            message: "Passwort konnte nicht geändert werden",
            color: "negative",
            actions: [
              {
                label: "Dismiss",
                color: "white",
                handler: () => {
                  /* ... */
                },
              },
            ],
          });
        });
    } else {
      Notify.create({
        message: "Die neuen Passwörter stimmen nicht überein",
        color: "negative",
        actions: [
          {
            label: "Dismiss",
            color: "white",
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    }
  }
}

onMounted(() => {
  userService
    .getUser(authStore.user)
    .then((result) => {
      userData.value = result["data"];
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>