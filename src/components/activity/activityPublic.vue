<template>
    <div class="activePublic">
      <!-- 步骤组件 -->
      <el-steps :space="200" :active="step" class="step">
        <el-step title="活动信息" description=""></el-step>
        <el-step title="报名签到" description=""></el-step>
        <el-step title="分享设置" description=""></el-step>
        <el-step title="个性设置" description=""></el-step>
      </el-steps>

        <!-- 视图 -->
      <router-view class="view"></router-view>

      <div class="but-group">
        <el-button >预览</el-button>
        <el-button @click="prev()">上一步</el-button>
        <el-button  type="primary" @click="next()">下一步</el-button>
        <el-button  type="primary">发布活动</el-button>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        step: 1
      }
    },
    methods: {
      next () {
        if (this.step++ > 3) this.step = 0
      },
      prev () {
        if (this.step-- < 1) this.step = 0
      }
    }
  }
</script>
