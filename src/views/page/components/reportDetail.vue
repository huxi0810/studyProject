<template>
  <div>
    <el-button @click="add" type="success">新增</el-button>
    <br />
    <span>当前值：{{submitData}}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["submitData"])
  },
  methods: {
    ...mapMutations(["SETSUBMITDATA"]),
    add() {
      // this.$store.commit("SETSUBMITDATA", 100);
      this.numberSub = this.submitData;
      this.numberSub += 1000;
      this.SETSUBMITDATA(this.numberSub);
    }
  }
  //   created() {
  //     console.log(this.submitData, "reportDetail");
  //   }
};
</script>

<style>
</style>