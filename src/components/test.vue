<template>
<div class="test">
    <h1>{{mess}}</h1>
    <ul>
        <li  v-for="list in lists" >
            {{list.text}}
        </li>
    </ul>
</div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      mess: 'first vue test',
      lists: [ {text: '1'},
        {text: '2'},
        {text: '3'}]
    }
  }
}
</script>
