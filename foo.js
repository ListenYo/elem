import React from 'react'
import '/foo.css'

class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    	return(
    		<div>
    			<ul id='ouk'>
    				<li>首页</li>
    				<li>发现</li>
    				<li>订单</li>
    				<li>我的</li>   			
    			</ul>
    			
    		</div>
    	)
    }
}
