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
      { text: '#', value: 'index' },
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
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
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
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.orders.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.orders.splice(index, 1)
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.orders[this.editedIndex], this.editedItem)
      } else {
        this.orders.push(this.editedItem)
      }
      this.close()
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
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <!--<template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>-->
  </v-data-table>
</template>
