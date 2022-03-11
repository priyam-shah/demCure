import React,{Component} from "react";
// import "main.css"
class Home extends React.Component{
    render(){
        return(
            <div>
               <main>
      <p>
        <button id="btnStart" class="cross_line">START RECORDING</button><br />
        <button id="btnStop" class="part_line">STOP RECORDING</button>
      </p>

      <video controls></video>

      <video id="vid2" controls></video>
    </main>
            </div>
        )
    }
}
export default Home