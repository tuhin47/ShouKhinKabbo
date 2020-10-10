<script>
export default {
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: '#Product ID', value: 'id' },
      {
        text: 'Title',
        align: 'start',
        sortable: false,
        value: 'title',
      },
      { text: 'Base Price', align: 'center', value: 'price' },
      { text: 'Quantity', align: 'center', value: 'quantity' },
      { text: 'Total', align: 'center', value: 'total' },
      { text: 'Actions', align: 'center', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
    editedItem: {},
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Edit Item' : 'Edit Item'
    },
    orderList() {
      return this.orders.map((e) => ({
        ...e,
        total: e.price * e.quantity,
      }))
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  methods: {
    changeQuantity() {
      this.$store.commit('products/quantity', {
        id: this.editedItem.id,
        quantity: this.editedItem.quantity,
      })
      this.close()
    },
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    removeFromCart(id) {
      const data = {
        id: id,
        status: false,
      }
      this.$store.commit('products/removeFromCart', id)
      this.$store.commit('products/setAddedBtn', data)
    },
    close() {
      this.dialog = false
    },
  },
}
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="orderList"
    class="elevation-1 mytable"
    :hide-default-footer="true"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Your Orders</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.title"
                      filled
                      shaped
                      readonly
                      label="Product name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.price"
                      filled
                      shaped
                      readonly
                      label="Price"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="editedItem.quantity"
                      :items="[1, 2, 3, 4, 5, 6]"
                      label="Quantity"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="changeQuantity"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="removeFromCart(item.id)">
        mdi-delete
      </v-icon>
    </template>
    <!--<template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>-->
  </v-data-table>
</template>
