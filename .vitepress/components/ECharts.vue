<template>
  <div ref="chartContainer" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'
import { useData } from 'vitepress'

const { isDark } = useData()

const props = defineProps({
  option: {
    type: Object,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '400px'
  }
})

const chartContainer = ref(null)
let chart = null

// 深色主题配置
const darkTheme = {
  backgroundColor: 'transparent',
  textStyle: {
    color: '#ccc'
  },
  title: {
    textStyle: {
      color: '#ccc'
    }
  },
  legend: {
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    },
    axisLabel: {
      color: '#ccc'
    },
    splitLine: {
      lineStyle: {
        color: '#333'
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    },
    axisLabel: {
      color: '#ccc'
    },
    splitLine: {
      lineStyle: {
        color: '#333'
      }
    }
  }
}

// 浅色主题配置
const lightTheme = {
  backgroundColor: 'transparent',
  textStyle: {
    color: '#333'
  },
  title: {
    textStyle: {
      color: '#333'
    }
  },
  legend: {
    textStyle: {
      color: '#333'
    }
  },
  xAxis: {
    axisLine: {
      lineStyle: {
        color: '#333'
      }
    },
    axisLabel: {
      color: '#333'
    },
    splitLine: {
      lineStyle: {
        color: '#eee'
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#333'
      }
    },
    axisLabel: {
      color: '#333'
    },
    splitLine: {
      lineStyle: {
        color: '#eee'
      }
    }
  }
}

const initChart = () => {
  if (!chartContainer.value) return
  
  try {
    // 如果已经存在实例，先销毁
    if (chart) {
      chart.dispose()
    }
    
    // 创建新实例
    chart = echarts.init(chartContainer.value)
    
    // 绑定窗口大小变化事件
    window.addEventListener('resize', handleResize)
    
    // 更新图表
    updateChart()
  } catch (error) {
    console.error('Failed to initialize chart:', error)
  }
}

const updateChart = () => {
  if (!chart) return
  
  try {
    const theme = isDark.value ? darkTheme : lightTheme
    const newOption = {
      ...theme,
      ...props.option
    }
    chart.setOption(newOption, true)
  } catch (error) {
    console.error('Failed to update chart:', error)
  }
}

const handleResize = () => {
  if (chart) {
    try {
      chart.resize()
    } catch (error) {
      console.error('Failed to resize chart:', error)
    }
  }
}

onMounted(() => {
  // 确保在客户端环境下执行
  if (typeof window !== 'undefined') {
    // 延迟初始化，确保DOM已经准备好
    setTimeout(() => {
      initChart()
    }, 0)
  }
})

watch(() => props.option, () => {
  updateChart()
}, { deep: true })

watch(isDark, () => {
  updateChart()
})

onBeforeUnmount(() => {
  // 清理事件监听和图表实例
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
  
  if (chart) {
    try {
      chart.dispose()
      chart = null
    } catch (error) {
      console.error('Failed to dispose chart:', error)
    }
  }
})
</script> 