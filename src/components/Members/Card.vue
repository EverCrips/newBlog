<template>
  <a-pp>
    <v-container>
      <v-row align="center">
        <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
          <v-item v-for="miembro in miembros" :key="miembro" v-slot:default="{ active, toggle }">
            <div>
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>

        <v-col>
          <v-window v-model="window" class="elevation-1" vertical>
            <v-window-item v-for="miembro in miembros" :key="miembro">
              <v-card flat>
                <v-card-text>
                  <v-row class="ma-2" align="center">
                    <v-avatar color="grey" class="mr-4" size="62">
                      <img :src="miembro.avatarPersona" />
                    </v-avatar>
                    <strong class="title">{{ miembro.nombre }}</strong>
                    <v-spacer></v-spacer>
                    <v-avatar class="mr-4" size="40">
                      <img :src="miembro.avatarCarril" />
                    </v-avatar>
                  </v-row>
                  <p><v-icon  color="green darken-2">mdi-label-outline</v-icon>{{miembro.personaje}}</p>
                  <p><v-icon  color="green darken-2">mdi-label-outline</v-icon>{{miembro.rol}}</p>
                  <p><v-icon  color="green darken-2">mdi-label-outline</v-icon>{{miembro.descrip}}</p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </a-pp>
</template>

<script>
export default {
  data() {
    return {
      window: 0,
      miembros: [
        {
          num: 1,
          nombre: "Felipe",
          personaje: "LeandroBike",
          rol: "Soporte",
          avatarPersona: require("@/assets/img/avatars/Felipe.png"),
          avatarCarril: require("@/assets/img/avatars/SUP.png"),
          descrip:
            "Conocido como el manco del team, solo utiliza un par de campeones y con suerte logra salir positivo."
        },
        {
          num: 2,
          nombre: "Cristopher",
          personaje: "xEverCrips",
          rol: "Top",
          avatarPersona: require("@/assets/img/avatars/Cris.png"),
          avatarCarril: require("@/assets/img/avatars/TOP.png"),
          descrip:
            "Personaje que hace rage si su equipo fedea (cosa que siempre sucede)."
        },
        {
          num: 3,
          nombre: "nombre 3",
          personaje: "Shadynger",
          rol: "Mid",
          avatarPersona: require("@/assets/img/avatars/Shady.png"),
          avatarCarril: require("@/assets/img/avatars/MID.png"),
          descrip: "Personaje que no se que hace (cosa que siempre sucede)."
        },
        {
          num: 4,
          nombre: "nombre 4",
          personaje: "Hashirama",
          rol: "Jungla",
          avatarPersona: require("@/assets/img/avatars/Hashi.png"),
          avatarCarril: require("@/assets/img/avatars/JG.png"),
          descrip:
            "Personaje que hace rage si su equipo fedea (cosa que siempre sucede)."
        },
        {
          num: 5,
          nombre: "nombre 5",
          personaje: "Toltigo",
          rol: "Tirador",
          avatarPersona: require("@/assets/img/avatars/Toltigo.png"),
          avatarCarril: require("@/assets/img/avatars/ADC.png"),
          descrip:
            "Personaje que hace rage si su equipo fedea (cosa que siempre sucede)."
        }
      ]
    };
  }
};
</script>
