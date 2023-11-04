import React, { Component } from "react";
import "./News.css";
import NavBar from "./NavBar";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      noOFpanels: 0,
      status: "",
      totalresults: 0,
      items: [],
      description: "",
      tags: "in",
      load: true,
      country:"",
      category:"",
      countryurl:false,
      categoryurl:false
    };
  }
   Select_Country=(event)=>{
    this.setState({categoryurl:false})
    this.setState({countryurl:true})
    this.setState({country:event.target.value})
    this.setState({items:[]})
   }
   Select_Category=(event)=>{
    this.setState({countryurl:false})
    this.setState({categoryurl:true})
    this.setState({category:event.target.value})
    this.setState({items:[]})
   }

   async  fetchdata(){
      
    let myPromise =new Promise((resolve)=>{
     const url= this.state.countryurl?"https://newsapi.org/v2/top-headlines?" +
     `country=${this.state.country}&` +
     "apiKey=53627d67e2b94002a31f80c156d9ad20":` `;
     const req=new Request(url);
  let Items = [];
  console.log(url)
     fetch(req)
     .then((response) => response.json())
     .then((json) => {     

       json.totalResults > 0
         ? (Items = json.articles.splice(0, 6))
         : (Items = []);
          if(Items.length>0){
            console.log(Items)
          resolve(Items)
        }

     });
    
     
    });
    this.setState({   
     items: await myPromise,
   });
   }
   null=()=>{

   }

  render() {
  console.log(this.state.items.length)
   this.state.items.length===0? this.fetchdata():this.null();
    return (

      <>
        <NavBar change={this.change} Select_Country={this.Select_Country} Select_Category={this.Select_Category}/>
        <div className="NewsPanels-container">
          {this.state.items.map((item) => (
            <div key={"panel" + item.title} className="NewsPanels">
              <img src={item.urlToImage} alt="" />
              <div className="headline">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div
            className="load-div"
            style={this.state.items.length<=0? { display: "block" } : { display: "none" }}
          >
            <div className="load"> </div>
            <h3 style={{ textAlign: "center" }}>
              Fetching News.
              <br />
              Please wait..
            </h3>
          </div>
        </div>
      </>
    );
  }
}
