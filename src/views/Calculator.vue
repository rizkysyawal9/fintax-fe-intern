<template>
  <b-row>
    <b-col cols="12" lg="6">
      <b-card class="px-6">
        <b-row>
          <b-col class="display py-4">{{ number || "0" }}</b-col>
        </b-row>
        <b-row cols="2">
          <b-col class="controls" @click="clear">AC</b-col>
          <b-col class="controls" @click="remove">DEL</b-col>
        </b-row>
        <b-row cols="4">
          <b-col @click="append(1)" class="controls">1</b-col>
          <b-col @click="append(2)" class="controls">2</b-col>
          <b-col @click="append(3)" class="controls">3</b-col>
          <b-col @click="add()" class="actions">+</b-col>
          <b-col @click="append(4)" class="controls">4</b-col>
          <b-col @click="append(5)" class="controls">5</b-col>
          <b-col @click="append(6)" class="controls">6</b-col>
          <b-col @click="minus()" class="actions">-</b-col>
          <b-col @click="append(7)" class="controls">7</b-col>
          <b-col @click="append(8)" class="controls">8</b-col>
          <b-col @click="append(9)" class="controls">9</b-col>
          <b-col @click="multiply()" class="actions">x</b-col>
          <b-col @click="dot()" class="actions">.</b-col>
          <b-col @click="append(0)" class="controls">0</b-col>
          <b-col @click="divide()" class="actions">/</b-col>
          <b-col @click="equal()" class="actions">=</b-col>
        </b-row>
      </b-card>
    </b-col>
    <b-col cols="12" lg="6">
      <h3 class="my-3">Count History</h3>
      <b-table
        id="count"
        striped
        hover
        :items="savedNumber"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        responsive
      >
        <template #cell(action)="row">
          <b-button @click="removeRow(row.item.id)">Delete</b-button>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="count"
      ></b-pagination>
    </b-col>
  </b-row>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  data() {
    return {
      prevNumber: "",
      number: "",
      operator: null,
      operatorClicked: false,
      operatorSign: "",
      savedNumber: [],
      fields: ["first_number", "operator", "second_number", "result", "action"],
      currentPage: 1,
      perPage: 4
    };
  },
  methods: {
    clicked() {
      console.log("clicked");
    },
    clear() {
      this.number = "";
    },
    append(num) {
      if (this.operatorClicked) {
        this.number = "";
        this.operatorClicked = false;
      }
      this.number = `${this.number}${num}`;
    },
    remove() {
      this.number = this.number.slice(0, -1);
    },
    setPrevNumber() {
      this.prevNumber = this.number;
      this.operatorClicked = true;
    },
    add() {
      this.operator = (x, y) => x + y;
      this.operatorSign = "+";
      this.setPrevNumber();
    },
    minus() {
      this.operator = (x, y) => x - y;
      this.operatorSign = "-";
      this.setPrevNumber();
    },
    divide() {
      this.operator = (x, y) => x / y;
      this.operatorSign = "/";
      this.setPrevNumber();
    },
    multiply() {
      this.operatorSign = "x";
      this.operator = (x, y) => x * y;
      this.setPrevNumber();
    },
    equal() {
      const nextNumber = this.number;
      this.number = `${this.operator(
        parseFloat(this.prevNumber),
        parseFloat(this.number)
      )}`;
      this.savedNumber.push({
        id: uuid.v4(),
        first_number: this.prevNumber,
        operator: this.operatorSign,
        second_number: nextNumber,
        result: this.number
      });
      this.saveToLocalStorage();
      this.prevNumber = "";
    },
    dot() {
      if (this.number.indexOf(".") === -1) {
        this.append(".");
      }
    },
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.savedNumber);
      localStorage.setItem("numbers", parsed);
    },
    removeRow(id) {
      this.savedNumber = this.savedNumber.filter(item => {
        return item.id != id;
      });
      this.saveToLocalStorage();
    }
  },

  mounted() {
    if (localStorage.getItem("numbers")) {
      try {
        this.savedNumber = JSON.parse(localStorage.getItem("numbers"));
      } catch (e) {
        // print(e);
      }
    }
  },
  computed: {
    rows() {
      return this.savedNumber.length;
    }
  }
};
</script>

<style scoped>
.card {
  padding: 10px 30px;
}
.col {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 18px;
  border: black;
  border-style: solid;
  border-width: 1px;
  font-weight: bold;
}

.display {
  background-color: black;
  color: white;
  font-size: 38px;
}

.controls {
  background: white;
  transition: 0.3s;
}

.controls:hover {
  background: rgb(168, 168, 168);
  cursor: pointer;
}

.actions {
  background: rgba(248, 148, 6, 0.8);
  transition: 0.3s;
}
.actions:hover {
  background: rgba(248, 148, 6, 1);
  cursor: pointer;
}

.btn {
  background-color: #3179c6;
  border-color: #3179c6;
  transition: 0.4s;
}

.btn:hover {
  background-color: #00a9e9;
  border-color: #00a9e9;
}
</style>
