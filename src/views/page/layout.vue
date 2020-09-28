<template>
  <div>
    <div class="layout" style="margin-bottom:50px">
      <!-- <el-button @click="query" type="primary">查询</el-button> -->
      <el-button @click="add" type="success">增加</el-button>
      <div>{{numberSub}}</div>
    </div>
    <report-detail></report-detail>
    <div class="box"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import reportDetail from "./components/reportDetail.vue";
export default {
  name: "home",
  components: {
    reportDetail
  },
  data() {
    return {
      numberSub: 0
    };
  },
  computed: {
    ...mapState(["submitData"])
  },
  methods: {
    ...mapMutations(["SETSUBMITDATA"]), //将this.$store.commit('SETSUBMITDATA')映射为this.SETSUBMITDATA()
    // ...mapMutations({ setSubmitData: "SETSUBMITDATA" }), //将this.$store.commit('SETSUBMITDATA')映射为this.setSubmitData()
    query() {
      //获取vuex中submitData的值
      this.numberSub = this.$store.state.submitData;
      // console.log(this.numberSub, "number当前值");
    },
    add() {
      // this.$store.commit("SETSUBMITDATA", 100);
      this.numberSub = this.submitData;
      this.numberSub = this.numberSub += 100;
      this.SETSUBMITDATA(this.numberSub);
    }
  }
};
</script>

<style>
.layout {
  height: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.box {
  width: 200px;
}
</style>