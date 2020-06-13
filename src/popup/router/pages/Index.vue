<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Active Environment" name="activeEnv">Active environment content</el-tab-pane>
      <el-tab-pane label="List of open environments" name="openEnvs">List of open environments content</el-tab-pane>
      <el-tab-pane label="About" name="about">About content</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeName: "activeEnv"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
