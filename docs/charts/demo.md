# ECharts 示例

## 病虫害监测数据统计

<script setup>
import { ref } from 'vue'
import * as echarts from 'echarts'

const option = ref({
  title: {
    text: '2023年度病虫害监测数据统计',
    subtext: '数据来源：安徽省植保站'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['监测点数量', '预警次数', '防控面积(万亩)']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '监测点数量',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
    },
    {
      name: '预警次数',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]
    },
    {
      name: '防控面积(万亩)',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410, 182, 191, 234, 290, 330]
    }
  ]
})

const pieOption = ref({
  title: {
    text: '主要病虫害类型分布',
    subtext: '数据来源：安徽省植保站',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '发生比例',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { 
          value: 1048, 
          name: '小麦赤霉病',
          itemStyle: { color: '#91cc75' }
        },
        { 
          value: 735, 
          name: '草地贪夜蛾',
          itemStyle: { color: '#fac858' }
        },
        { 
          value: 580, 
          name: '水稻病虫害',
          itemStyle: { color: '#ee6666' }
        },
        { 
          value: 484, 
          name: '玉米病虫害',
          itemStyle: { color: '#73c0de' }
        },
        { 
          value: 300, 
          name: '其他',
          itemStyle: { color: '#3ba272' }
        }
      ]
    }
  ]
})
</script>

### 年度监测趋势分析

下图展示了2023年度病虫害监测的主要指标变化趋势：

<ClientOnly>
  <ECharts :option="option" />
</ClientOnly>

### 病虫害类型分布

下图展示了主要病虫害类型的分布情况：

<ClientOnly>
  <ECharts :option="pieOption" height="500px" />
</ClientOnly> 