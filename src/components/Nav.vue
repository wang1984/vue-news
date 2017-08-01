<template>
	<div id="nav">
		<div class="nav">
			<ul>
		    	<router-link to="/home" tag="li" active-class="active">
		    		<a href="javascript:;">首页</a>
		    	</router-link>
		    	<!-- router-link 默认生成 a 标签 使用tag属性可以让他生成别的标签 -->
		    	<router-link to="/focus" tag="li" active-class="active">
		    		<a href="javascript:;">关注</a>
		    	</router-link>
		    	<router-link to="/column" tag="li" active-class="active">
		    		<a href="javascript:;">栏目</a>
		    	</router-link>  
		    </ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'nav'
	}
</script>

<style>
	
</style>