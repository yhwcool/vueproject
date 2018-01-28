<template>
  <div id="app">
    <mt-header title="城市之家">
    </mt-header>
    <router-view/>
    <footer>
      <nav class="mui-bar mui-bar-tab">
        <router-link a class="mui-tab-item" to="/Home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="tabbar-with-chat">
          <span class="mui-icon mui-icon-email"></span>
          <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item" to="tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </router-link>
        <router-link class="mui-tab-item" to="tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
