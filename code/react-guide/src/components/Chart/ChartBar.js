import React from "react";
import './ChartBar.css';

const ChartBar = props =>{

    let barFillheight = '0%';
    //calculating progress height
    if (props.maxValue){
        barFillheight = Math.round((props.value/props.maxValue)*100)+'%';
    }
    
    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height:barFillheight}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
}

export default ChartBar;