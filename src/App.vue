<template>
  <div id="app">
    <header>
      <h1>都道府県別の総人口推移</h1>
    </header>
    <main>
      <div>
        <h2>都道府県</h2>
        <div class="prefectures-layout">
          <span
            v-for="item in prefectures"
            :key="item.prefCode"
            class="prefectures-item"
            @change="handleClick($event, item.prefCode, item.prefName)"
          >
            <input type="checkbox" :id="item.prefCode" :value="item.prefName" />
            <label :for="item.prefCode">{{ item.prefName }}</label>
          </span>
        </div>
      </div>
      <div class="mt50">
        <h2>人口数</h2>
        <div class="chart-layout">
          <ve-line :data="chartData"></ve-line>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data: () => ({
    prefectures: [], //都道府県リスト

    // v-chartのデータ
    chartData: {
      columns: ["年度"],
      rows: [],
    },

    localList: [], //もらった人口数を一時保存
  }),
  mounted() {
    axios.get("api/v1/prefectures").then((res) => {
      this.prefectures = res.data.result;
    });
  },
  methods: {
    handleClick(event, prefCode, prefName) {
      //ある都道府県をチェックした場合、人口数を請求する
      if (event.target.checked) {
        axios
          .get(
            "api/v1/population/composition/perYear?cityCode=-&prefCode=" +
              prefCode
          )
          .then((res) => {
            this.localList = res.data.result.data[0].data;
            //最初は「年度」データをv-chartに入れる
            if (this.chartData.rows.length == 0) {
              this.localList.forEach((item) => {
                let obj = new Object();
                obj["年度"] = item.year + "";
                this.chartData.rows.push(obj);
              });
            }
            //v-chartに新しい都道府県のデータを追加する
            this.addToChart(prefName, this.localList);
          });
      } else {
        //ある都道府県のチェックを外した場合、v-chartからそのデータを削除する
        this.deleteFromChart(prefName);
      }
    },
    addToChart(name, list) {
      //v-chartのcolumnsを更新
      this.chartData.columns.push(name);
      //v-chartのrowsを更新
      list.forEach((item) => {
        this.chartData.rows.forEach((row) => {
          if (row["年度"] == item.year + "") {
            row[name] = item.value + "";
          }
        });
      });
    },
    deleteFromChart(name) {
      let index = this.chartData.columns.indexOf(name);
      this.chartData.columns.splice(index, 1);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 375px;
  text-align: center;
  color: #2c3e50;
}

header {
  padding: 20px;
  background: #c4c4c4;
}

main {
  max-width: 1400px;
  width: 80%;
  margin: 50px auto;
}

h2 {
  margin: 10px 0;
  text-align: left;
}

.mt50 {
  margin-top: 50px;
}

.prefectures-layout {
  display: flex;
  flex-wrap: wrap;
}

.prefectures-item {
  margin-right: 10px;
}
</style>
