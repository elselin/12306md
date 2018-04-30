<template>
  <div>
    <v-toolbar
      dark
      color="primary"
    >
      <v-toolbar-side-icon>
        <router-link to="/result">
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar-side-icon>
      <v-toolbar-title>Confirmation</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>textsms</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fluid grid-list-lg>
      <v-layout schedule-list-item row wrap >
          <v-flex xs12 text-xs-center>
            <v-card class="ticket">
              <v-card-text>
                <v-layout>
                  <v-flex xs4 station>
                    <div class="station-time">{{start.time}}</div>
                    <div class="station-location">{{start.location}}</div>
                  </v-flex>
                  <v-flex xs4>
                    <div class="schedule-shift">{{shift}} </div>   
                    <div class="station-line">
                    </div>
                    <div class="caption">{{timesTake}} </div>   
                  </v-flex>
                  <v-flex xs4 station>
                    <div class="station-time">{{end.time}}</div>
                    <div class="station-location">{{end.location}}</div>
                  </v-flex>
                </v-layout>        
              </v-card-text>
              <div class="text-xs-left details-info">
                <div>
                  <div>Jun 06, 2017, 07:30</div>
                  <div>Aboard</div>
                </div>
                <div style="padding-left:32px">
                  <div>2 Normal Ticket</div>
                  <div>No Seat</div>
                </div>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-actions>
                    <v-radio-group v-model="seatLevel" hide-details class="price-selection">
                      <v-layout text-xs-left>
                        <v-flex xs-3>
                          <v-radio value="prime" color="primary" ></v-radio>
                          <div class="price-level" @click="seatLevel='prime'">
                            <div class="caption grey--text">Prime</div>
                            ￥{{seats.prime.price}}
                          </div>
                        </v-flex>
                        <v-flex xs-3>
                          <v-radio value="medium" color="primary"></v-radio>
                          <div class="price-level" @click="seatLevel='medium'">
                            <div class="caption grey--text">Medium</div>
                            ￥{{seats.medium.price}}
                          </div>
                        </v-flex>
                        <v-flex xs-3>
                          <v-radio value="normal" color="primary"></v-radio>
                          <div class="price-level" @click="seatLevel='normal'">
                            <div class="caption grey--text">Normal</div>
                            ￥{{seats.normal.price}}
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-radio-group>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card>
              <v-list class="seats-list">
                <v-list-tile>
                  <v-list-tile-avatar>
                    <v-icon>airline_seat_recline_normal</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Else Lin
                    </v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>delete</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider inset></v-divider>
                <v-list-tile>
                  <v-list-tile-avatar class="prime">
                    <v-icon>airline_seat_flat</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Taylor Swift
                    </v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>delete</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
              <v-btn flat color="primary">Add Seats</v-btn>
              <v-btn flat color="primary" style="float:right">Pick Seats</v-btn>
            </v-card>
           </v-flex>
        </v-layout>
    </v-container>
    <v-btn block large fixed bottom color="primary" class="call-to-action-btn">Confirm Booking ( ￥200 )</v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        start: {
          location: 'Zhuhai',
          time: '07:30',
          isFirstStation: false
        },
        end: {
          location: 'Guirong',
          time: '09:09',
          isLastStation: true
        },
        shift: 'C7636',
        timesTake: '3 hours 20 min',
        seats: {
          prime: {
            rest: '10',
            price: '200'
          },
          medium: {
            rest: '22',
            price: '100'
          },
          normal: {
            rest: '56',
            price: '50'
          }
        },
        seatLevel: ''
      }
    }
  }
</script>

<style scoped>
.ticket{
  border-radius: 10px !important;
  background-color:#E6F5FF;
  background-image: url(../assets/images/train.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
.ticket:after{
  content: '';
  display: block;
  background-color: #BFE6FF;
  height: 24px;
  border-radius: 0 0 10px 10px;
}
.ticket .schedule-list-item{
  margin-bottom: -8px !important
}
.ticket .schedule-shift{
  line-height: 24px;
}
.ticket .station-time{
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -1px
}
.ticket .station-location{
  font-size: 14px;
  line-height: 20px;
}
.ticket .station-line{
  height: 2px;
  background-color:#000;
  position: relative;
  margin: 4px 0;
}
.ticket .station-line:after{
  content: '';
  display: block;
  position: absolute;
  top:-5px;
  right:-1px;
  width: 15px;
  transform: rotate(45deg);
  height: 2px;
  background-color: #000;
}
.details-info{
  font-size: 13px;
  margin: 0 24px;
  padding: 8px 8px;
  border: 1px dashed #000;
  border-radius: 0px !important;
  margin-bottom: 10px;
}
.details-info>div{
  display: inline-block;
}
.price-selection{
  padding:8px 0 0 8px;
}
.price-selection .flex:after{
  content: '';
  display: inline-block;
  position: relative;
  height: 80%;
  width: 1px;
  top:0px;
  right: -20px;
  background-color: #ddd;
}
.price-selection .flex:last-child:after{
  display: none
}
.price-selection .radio{
  display: inline-block;
  width: 32px;
  transform: scale(0.8,0.8) !important;
}
.price-level{
  display: inline-block;
}
.seats-list .avatar{
  background-color: #ddd;
}
.seats-list .prime .avatar{
  background-color: #FFC107;
}
.call-to-action-btn{
  bottom: -6px !important;
}
</style>
