import { Component } from "react";

export default class NewsItem extends Component{
    render(){
        return(
            <>
           
                <div class="card m-3">
                    <img src={this.props.myimg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.mytitle}</h5>
                        <p class="card-text">{this.props.mydesc}</p>
                        <p style={{color:"red"}}>{this.props.author}</p>
                        <a href={this.props.newsurl} target="blank" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

</>

            
        )
    }
}