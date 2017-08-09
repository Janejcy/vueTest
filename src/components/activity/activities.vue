<template>
    <div class="activities">
     <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu default-active="/activity/activityPublic" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/activity/activityPublic" :class="{'isActive': active}">活动发布</el-menu-item>
          <el-menu-item index="/test" :class="{'isActive': !active}">活动管理</el-menu-item>
        </el-menu>
      </div>
      <!-- 右侧主内容区 -->
      <div  class="main-right" >
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'activities',
  data () {
    return {
      active: true
    }
  }
}
</script>

<style>
/* 主内容区 */
  .activities{    display: -webkit-box;  display: -ms-flexbox;  display: flex; }
  .activities .main-left{text-align: center;width: 200px;float: left;}
  .activities .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
  .activities .el-menu{background-color: transparent!important;}
</style>
