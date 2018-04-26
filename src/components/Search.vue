<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
          <v-flex md6 xs12>
              <v-card>
                  <v-card-text class="px-0 search-picker">
                      <v-list-tile>
                          <v-list-tile-action>
                              <v-icon>pin_drop</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                              <v-list-tile-title class="grey--text">Origin</v-list-tile-title>
                          </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile>
                          <v-list-tile-action>
                              <v-icon>directions_transit</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                              <v-list-tile-title class="grey--text">Destination</v-list-tile-title>
                          </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                        <v-list-tile @click="pickDepartureDate()">
                          <v-list-tile-action>
                              <v-icon>today</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                              <v-list-tile-title
                              :class="{'grey--text':date==''}"
                              >
                              {{ date=='' ? 'Departure Date' : dateFormatted }}
                              </v-list-tile-title>
                          </v-list-tile-content>
                      </v-list-tile>
                      <v-dialog
                        ref="dialog"
                        v-model="isShowDatePicker"
                        lazy
                        full-width
                        :return-value.sync="date"
                      >
                        <v-date-picker
                          v-model="date"
                          scrollable
                          full-width
                        >
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="isShowDatePicker=false">Cancel</v-btn>
                          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <v-divider></v-divider>
                      <v-list-tile>
                        <v-layout xs12>
                          <v-flex xs8>
                            <v-slider class="seats-slider" v-model="seats" step="1" :max="5" :min="1" ticks thumb-label hide-details></v-slider>
                          </v-flex>
                          <v-flex xs3 class="picker-seats">
                            {{seats}} Seats
                          </v-flex>
                        </v-layout>
                      </v-list-tile>
                  </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md6 xs12>
              <v-card>
                  <v-card-text class="px-0">
                    <v-list-tile @click="express=!express">
                      <v-list-tile-action @click="express=!express">
                          <v-checkbox
                          color="primary"
                          v-model="express"
                        ></v-checkbox>
                      </v-list-tile-action>
                      <v-list-tile-title>
                        Express Only
                      </v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="student=!student">
                      <v-list-tile-action @click="student=!student">
                          <v-checkbox
                          color="primary"
                          v-model="student"
                        ></v-checkbox>
                      </v-list-tile-action>
                      <v-list-tile-title>
                        Student Tickets
                      </v-list-tile-title>
                    </v-list-tile>
                </v-card-text>
              </v-card>
            </v-flex>
      </v-layout>
    </v-container>
    <router-link to="/result"><v-btn block large fixed bottom color="primary" class="call-to-action-btn">Search</v-btn></router-link>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  components: { moment },
  data: () => ({
    seats: 1,
    express: true,
    student: false,
    isShowDatePicker: false,
    date: ''
  }),
  methods: {
    pickDepartureDate: function () {
      this.isShowDatePicker = !this.isShowDatePicker
    },
    clickVoid: function () {

    }
  },
  computed: {
    dateFormatted: function () {
      let rawDate = moment(this.date).format('MMM DD YYYY')
      return rawDate
    }
  }
}
</script>

<style>
.search-picker{
  padding-top:8px;
}
.picker-seats{
  position: relative;
  top: 20px;
}
.seats-slider{
  padding-left: 16px;
}
.call-to-action-btn{
  bottom: -6px !important;
}
</style>