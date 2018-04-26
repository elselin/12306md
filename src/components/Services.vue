<template>
    <div>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex md6 xs12>
                     <v-card>
                         <v-card-media :src="require('@/assets/images/meals.png')" height="89px">
                         </v-card-media>
                         <v-card-actions>
                            <div class="body-2 card-action-title">
                                Meals & Special Products
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>
                                    arrow_forward
                                </v-icon>
                            </v-btn>
                         </v-card-actions>
                     </v-card>
                </v-flex>
                 <v-flex md6 xs12>
                     <v-card>
                         <v-card-media :src="require('@/assets/images/taxi.png')" height="89px">
                         </v-card-media>
                         <v-card-actions>
                            <div class="body-2 card-action-title">
                                Taxi-hailing Services
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>
                                    arrow_forward
                                </v-icon>
                            </v-btn>
                         </v-card-actions>
                     </v-card>
                </v-flex>
                 <v-flex md6 xs12>
                     <v-card>
                         <v-card-media :src="require('@/assets/images/credit.png')" height="89px">
                         </v-card-media>
                        <v-card-actions>
                            <div class="body-2 card-action-title">
                                Credit card & Payment
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>
                                    arrow_forward
                                </v-icon>
                            </v-btn>
                         </v-card-actions>
                     </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="text-xs-center">
          <v-icon>room_service</v-icon>
          <div class="caption grey--text">More services will coming soon…</div>
        </div>
    </div>
</template>

<style scoped>
.card-action-title{
    padding-left: 8px;
}
</style>

<script>
export default {
  data () {
    return {
      test: false
    }
  }
}
</script>
