import React from 'react';
import Pic from './headerMain3.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
   const style ={
        color: "dodgerblue",
        fontSize:"50px"
    }
    return (
        <main >
            <div className="row header-container m-5 d-flex justify-content-center">
                <div className="col-md-5 m-5 header1"> 
                 <h4 style={{opacity:'0.5'}}>Want to get your </h4>
                 <div><h2 id="line2" style={style}>Clothes Cleaned? </h2></div>
                 <button className="btn btn-success mt-5">Call us: <b>945 939 485 </b>  </button>
               <br/><br/>
                <small className="mt-5"><b>Be sure your clothes get the right treatment!</b>  </small>
                
                </div>
                <div className="col-md-5 m-5 container header2"> 
                <img src={Pic} className="img-fluid headerPic" style={{height:"auto",width:"100%",borderRadius:'5px'}} alt="" />
                </div>

                
                
             </div>
            
        </main>
    );
};

export default HeaderMain;