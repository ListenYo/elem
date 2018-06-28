/**
 * Created by Administrator on 2018/6/28.
 */
import React from 'react'
import '../stylesheets/hungry.css'

class Hungry extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ul className="hun">
                    <li>
                        <p>品质套餐</p>
                        <span>搭配齐全吃得好</span>
                        <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
                    </li>
                    <li>
                        <p>品质联盟</p>
                        <span>品质升级，消费亲民</span>
                        <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
                    </li>
                    <li>
                        <p>限量抢购</p>
                        <span>超值美味  9.9元起</span>
                        <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
                    </li>
                </ul>
            </div>
    )
    }
}
export default Hungry;
