<template>
  <div class="dashboard-contanier">
    <el-row :gutter="12">
      <el-col 
        v-for="(item,index) in list"
        :key="index"
        :span="6" 
      >
        <el-card shadow="always" > 
          <div class="card-item">
            {{ item.name }}
            <span>今日 / 昨日</span>
          </div>
          <div class="card-item item-bottom">
            <el-icon size="26px">
              <component :is="item.icon"/>
            </el-icon>
            <span>{{item.current}} / {{item.next}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="charts-contanier">
      <div class="myChart" ref="myBarChart"></div>
      <div class="myChart" ref="myLineChart"></div>
      <div class="myChart" ref="myPieChart"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted,inject, reactive } from "vue";
  import * as echarts from "echarts";
  const $api: any = inject('$api');
  onMounted(() => {
    getData()
  }); 
  const myBarChart = ref<any>();
  const myBarCharts = ref<any>();
  const myLineChart = ref<any>();
  const myLineCharts = ref<any>();
  const myPieChart = ref<any>();
  const myPieCharts = ref<any>();
  const list: Array<any> = reactive([])
  const getData = async()=>{
    try {
      let {data} = await $api.apiDashboard.getData();
      let {card_list,echarts_result} = data
      list.push(...card_list)
      myBarCharts.value = echarts.init(myBarChart.value);
      myBarCharts.value.setOption(echarts_result.barOptions);
      myLineCharts.value = echarts.init(myLineChart.value);
      myLineCharts.value.setOption(echarts_result.lineOptions);
      myPieCharts.value = echarts.init(myPieChart.value);
      myPieCharts.value.setOption(echarts_result.pieOptions);
    } catch (error) {
      console.log(error)
    }
  }
</script>

<style lang="scss" scoped>
.dashboard-contanier{
  .myChart {
    width: 33%;
    height: 500px;
    margin-top: 20px;
    // background: pink;
    display: inline-block;
  }
  .card-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    
  }
}
</style>