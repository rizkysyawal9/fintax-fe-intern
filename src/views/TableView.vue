<template>
  <div>
    <b-row>
      <b-col cols="12" lg="3" v-for="datum in data" :key="datum.id">
        <DataCard :datum="datum" />
      </b-col>
    </b-row>
    <b-table
      striped
      hover
      id="table"
      :items="recruits"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      responsive=""
    >
      <template #cell(action)="row">
        <b-button :to="{ name: 'SingleRecruit', params: { id: row.item.id } }">
          Detail</b-button
        >
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="table"
    ></b-pagination>
  </div>
</template>

<script>
import axios from "axios";
import DataCard from "../components/DataCard";
export default {
  components: {
    DataCard
  },
  created: function() {
    axios.get("https://reqres.in/api/users?per_page=12").then(response => {
      this.recruits = response.data.data;
      this.total = response.data.total;
      this.currentPage = response.data.page;
    });
  },
  computed: {
    rows() {
      if (this.recruits.length != null) {
        return this.recruits.length;
      } else return 1;
    }
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          sortable: true
        },
        {
          key: "first_name",
          sortable: true
        },
        {
          key: "last_name",
          sortable: true
        },
        {
          key: "email",
          sortable: true
        },
        "action"
      ],
      perPage: 6,
      total: 1,
      currentPage: 0,
      recruits: [],
      data: [
        {
          id: 1,
          title: "Total",
          value: 40,
          image: ""
        },
        {
          id: 2,
          title: "Approved",
          value: 12,
          image: ""
        },
        {
          id: 3,
          title: "Rejected",
          value: 16,
          image: ""
        },
        {
          id: 4,
          title: "Pending",
          value: 12,
          image: ""
        }
      ]
    };
  }
};
</script>

<style></style>
