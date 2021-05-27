import { exit } from 'process';
import * as React from 'react';
import { Component } from 'react';


export interface  formProps {
    
}
 
export interface formState {
    
}
 
class formdata  extends React.Component<formProps,  formState> {

     state = { 
         colourtemp: Array<string>(),
           x:''
         
    }

     constructor(props:string){
         super(props);
        
     }

    //form event
    storedata(){
      
        var array=[]
        for (var i=0; i<this.state.colourtemp.length; i++){
            array.push(this.state.colourtemp[i])
        }
        localStorage.setItem("colour", JSON.stringify(array));
    }
    restoreData(){
        var ar =[]
        ar= JSON.parse(localStorage.getItem('colour') || '{}');
        
        //console.log('colour', array)
        //this.state.x=array
        this.state.colourtemp=[]
        for (var i=0; i<ar.length; i++){
            this.state.colourtemp.push(ar[i])
        }
       
    }
    submitclick  =()=> {
        this.state.colourtemp.push((document.getElementById("colourcode") as HTMLInputElement).value)
       //(document.getElementById("colourcode") as HTMLInputElement).value)
       // (document.getElementById("colourcode1") as HTMLInputElement).value = (document.getElementById("colourcode") as HTMLInputElement).value;
        this.setState({ x : ''});
        this.storedata();
    };
   


    submitclick1  (){
        localStorage.clear();
    }
  

    removearray(){

    }

    renderArray(){
       this.restoreData();
        if(this.state.colourtemp.length === 0 ) return <p>No Data in this array</p>;
        return <div>
            {this.state.colourtemp.map(tes =><div className="modal-content" key={tes} >

            <button type="submit"  onClick={this.removearray} className="btn btn-primary btn-block" > X </button>
            <input id={tes} value={tes}  readOnly={true} type="Multiline" className="form-control"></input>
                </div> )}
                
                </div>;
    }
   

    render() { 
        return (  
            <div className="container">
               <div>{this.state.x}</div>
            <form  >
                <div className="form-group">
                    <label>Add New Colour</label>
                    <input id="colourcode"  type="text" className="form-control"></input>
                    
                    {/* <input id="colourcode1"  type="text" className="form-control"></input> */}
                </div>
            </form>
            <button type="submit" onClick={this.submitclick} className="btn btn-primary btn-block" >Add</button>
            <button type="submit" onClick={this.submitclick1} className="btn btn-primary btn-block" >Clear All Data</button>
            
            {this.renderArray()}
           
             
            </div>
            
        );
    }
}
 
export default formdata ;