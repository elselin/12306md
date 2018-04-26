<template>
    <div>
      <v-list-tile>
          <v-list-tile-content>
              <v-list-tile-title>
                  <v-icon>info_outline</v-icon>
                  <span class="caption grey--text">&nbsp;Booking around this 30 Days ( May 06 - Jun 06 )</span>
              </v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list>
          <v-list-tile>
              <v-list-tile-title>
                  Today Schedule
              </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-title>
                  Not Departure
              </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
              <v-list-tile-title>
                  All Booings
              </v-list-tile-title>
          </v-list-tile>
      </v-list>
      <v-container>
            <p class="caption grey--text">
              <span class="red--text">*</span> Maecenas sed diam eget risus varius blandit sit amet non magna.
              Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.
              Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
      </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>