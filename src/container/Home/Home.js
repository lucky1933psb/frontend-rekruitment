import React,{Component} from "react";
import JumboComp from "../../component/JumboComp";

import NavbarComp from "../../component/NavbarComp";




import Loker from "../Loker/Loker";
import MonLoker from "../Loker/MonLoker";
import axios from 'axios';
import InputLoker from "../Loker/InputLoker";
import Footer from "../../component/Footer";
// import {BrowserRouter, Route, Link} from 'react-router-dom';



class Home extends Component{
    state={
        post:[],
        Loker:{
           
            poster:'',
            nama_perusahaan:'',
            posisi:'',
            lokasi:'',
            description:'',
        },
        isUpdate:false
    }

    getPostAPI=()=>{
        axios.get('http://localhost:3000/products')
        .then((result)=>{
            this.setState({

                         Post:result.data
                     })
                     console.log(result)
        })
       
    }

    handleFormChange =(event)=>{
        let Lokernew={...this.state.Loker};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            // Lokernew['id']=timestamp;
        }
        Lokernew[event.target.name] =event.target.value;
        this.setState({
            Loker:Lokernew
        })
    }

    handleUpdate= (data)=>{
        this.setState({
            Loker: data,
            isUpdate: true
        });
    }

    handleReset=()=>{
        this.setState({
            Loker:"",
            isUpdate: false
        });
    }

    componentDidMount(){
    
        this.getPostAPI();
    }
    

    render(){

        return(
            <div>
            <NavbarComp />
            <JumboComp />
            <InputLoker formEvent={this.handleFormChange} formdata={this.state.Loker} 
             data={this.state.Post}
             getdata={this.getPostAPI} isUpdate={this.state.isUpdate} reset={this.handleReset} /> 
            <Loker data={this.state.Post} getdata={this.getPostAPI}/>
            <MonLoker data={this.state.Post} getdata={this.getPostAPI} updatedata={this.handleUpdate} />
            <Footer />
            </div>  
        )
    }
}

export default Home;