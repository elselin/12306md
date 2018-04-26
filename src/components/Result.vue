<template>
  <div>
    <v-toolbar
      dark
      color="primary"
      prominent
      dense
      extended
      fixed
    >
      <v-toolbar-side-icon>
        <router-link to="/search">
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar-side-icon>
      <v-toolbar-title>Zhuhai → Shunde</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn icon slot="activator">
          <v-icon>
            more_vert
          </v-icon>
        </v-btn>
        <v-list dense>
          <v-list-tile @click="voidClick">
            <v-list-tile-action>
              <v-icon>file_download</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Save at Local</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="voidClick">
            <v-list-tile-action>
              <v-icon>refresh</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Refresh</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="voidClick">
            <v-list-tile-action>
              <v-icon>print</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Print</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="voidClick">
            <v-list-tile-action>
              <v-icon>share</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Share</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout slot="extension" text-xs-center>
        <v-flex xs3>
          <v-icon>keyboard_arrow_left</v-icon>
        </v-flex>
        <v-flex xs6>
          <div class="nav-date-picker"><v-icon>today</v-icon>Jun 06, 2017</div>
        </v-flex>
        <v-flex xs3>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-container fluid grid-list-lg schedule-list>
      <v-btn
        dark
        fab
        fixed
        bottom
        right
        color="primary"
      >
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-layout schedule-list-item row wrap v-for="(item,i) in schedules" :key="i" >
        <v-flex md6 xs12 text-xs-center>
          <v-card>
            <v-card-text @click="selectSchedule()">
              <v-layout>
                <v-flex xs4 station>
                  <div class="station-time">{{item.start.time}}</div>
                  <div class="station-location">{{item.start.location}}</div>
                </v-flex>
                <v-flex xs4>
                  <div class="schedule-shift">{{item.shift}} </div>   
                  <div class="station-line">
                    <div class="dot start" :class="{first : !item.start.isFirstStation}"></div>
                    <div class="dot end" :class="{last : !item.end.isLastStation}"></div>
                  </div>
                  <div class="caption grey--text">{{item.timesTake}} </div>   
                </v-flex>
                <v-flex xs4 station>
                  <div class="station-time">{{item.end.time}}</div>
                  <div class="station-location">{{item.end.location}}</div>
                </v-flex>
              </v-layout>        
            </v-card-text>
            <hr style="opacity:.2">
            <v-card-actions>
              <v-layout class="caption">
                <v-flex xs3 offset-xs1>
                  <span class="grey--text">Prime</span>
                   {{item.seats.prime.rest}}
                </v-flex>
                <v-flex xs3>
                  <span class="grey--text">Medium</span>
                   {{item.seats.medium.rest}}
                </v-flex>
                <v-flex xs3>
                  <span class="grey--text">Normal</span>
                   {{item.seats.normal.rest}}
                </v-flex>
                <v-btn icon style="opacity:0.3">
                  <v-icon>
                    keyboard_arrow_down
                  </v-icon>
                </v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      schedules: [
        {
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
          }
        }, {
          start: {
            location: 'Zhuhai',
            time: '07:30',
            isFirstStation: false
          },
          end: {
            location: 'Guirong',
            time: '09:09',
            isLastStation: false
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
          }
        }, {
          start: {
            location: 'Zhuhai',
            time: '07:30',
            isFirstStation: true
          },
          end: {
            location: 'Guirong',
            time: '09:09',
            isLastStation: false
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
          start: {
            location: 'Zhuhai',
            time: '07:30',
            isFirstStation: true
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
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
          }
        }, {
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
          }
        }
      ]
    }
  },
  methods: {
    selectSchedule: function () {
      this.$router.push('/confirmation')
    },
    voidClick: function () {}
  }
}
</script>

<style scoped>
.nav-date-picker{
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  position: relative;
  padding: 2px;
}
.nav-date-picker>.icon{
  position: absolute;
  top: 1px;
  left: 4px;
  transform: scale(0.8);
}
.schedule-list{
  padding-top:104px
}
.schedule-list .card__text{
  padding-bottom: 8px
}
.schedule-list-item{
  margin-bottom: -8px !important
}
.schedule-shift{
  line-height: 24px;
}
.station-time{
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -1px
}
.station-location{
  font-size: 14px;
  line-height: 20px;
}
.station-line{
  height: 2px;
  background-color:#2979FF;
  position: relative;
  margin: 4px 0;
}
.station-line .dot{
  position: absolute;
  box-sizing: content-box;
  border: 2px solid white;
  border-radius: 50%;
  top:-5px;
  width: 8px;
  height: 8px;
}
.dot.end{
  right: 16px;
  background-color: #FF867F;
}
.dot.start{
  left: 16px;
  background-color: #66BB6A;
}
.dot.start.first{
  left: 0;
}
.dot.end.last{
  right: 0;
}
</style>