import React, { Component } from 'react';
import second from '../img/second.jpg';
import fourth from '../img/fourth.jpg';
import fifth from '../img/fifth.jpg';
import sixth from '../img/sixth.jpg';



const images = [
    { src: second },
    { src: fourth },
    { src: fifth },
    { src: sixth },
];

const initState = {
    uppertext: "",
    lowertext: "",
    onTopDrag: false,
    onBottomDrag: false,
    topY: "10%",
    topX: "50%",
    bottomX: "50%",
    bottomY: "90%",
}


class Main extends Component {

    constructor() {
        super();
        this.state = {
            currentimg: 0,
            onOpenModal: true,
            currentImageLink: null,
            ...initState,
        }
    }




    showImage = (index) => {
        const image = images[index];
        const bg_image = new Image();
        bg_image.src = image.src;
   //     const currentImageLink = this.getImageURI(bg_image);
        this.setState(prevState => ({
            currentimg: index,
            onOpenModal: !prevState.onOpenModal,
     //       currentImageLink,
            ...initState
        }));

        const showImg = document.getElementById(index);

        showImg.style.display === "block" ? showImg.style.display = "none"
        :

        showImg.style.display = "block";

        console.log(showImg);
        
    }

  /*  downloadImage = (index) =>{
      //  const svg = this.svgRef;
      const svg = document.getElementById(index);
      let svgData = new XMLSerializer().serializeToString(svg);

      const canvas = document.createElement("canvas");
      canvas.setAttribute("id", "canvas");
      const svgSize = svg.getBoundingClientRect();
      canvas.width = svgSize.width;
      canvas.height = svgSize.height;
      const img = document.createElement("img");
      img.setAttribute("src", "data:image/svg*xml;base64," + btoa(unescape(encodeURIComponent)));
      img.onload= function() {
          canvas.getContext("2d").drawImage(img, 0,0);
          const a = document.createElement("a");
          a.download ="meme.png";
          document.body.appendChild(a);
          a.click();
      }
    } */

    addUpperText = (e) => {
        this.setState({
            uppertext: e.target.value
        });
    }

    addLowerText = (e) => {
        this.setState({
            lowertext: e.target.value
        });
    }

    render() {

        const imgStyle = {
            width: "100%",
            height: "100%",
            cursor: "pointer",
        }

        const showimg = images.map((imag, index) => {
            return (

                <div key={imag.src}>
                    <span> Top text</span>
                    <img src={imag.src} key={imag.src} style={imgStyle} alt={index} onClick={() => this.showImage(index)} />
                    <span>Bottom text</span>
                    <div className="modal"  key ={index} id={index}>
                        <div className="modal-content">
                            <div className="modal-header"> <h4>Make a Meme</h4>

< button className="btn btn-outline-secondary" style={{float: "right"}} onClick={() => this.showImage(index)}>Cancel</button></div>
                            

                            <div className="modal-body">
                                <div style={{backgroundImage : " linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.34) ), url(" + imag.src + ")", backgroundSize: "cover", }} className="modalImage">
                                    <span> <h4 id="top"> {this.state.uppertext} </h4></span>
                                      
                                    <span style={{position: "absolute", top: 70 + "%", left: 10 + "%"}}><h4 id="bottom"> {this.state.lowertext} </h4></span>  
                                </div>
                                <div className="text-section">

                                    <div className="form-group">
                                        <label >Top Text</label>
                                        <input type="text"  className="form-control" placeholder="Add text to the top"  onChange={this.addUpperText} />
                                    </div>
                                    <div className="form-group">
                                        <label >Bottom Text</label>
                                        <input type="text"  className="form-control" placeholder="Add text to bottom"  onChange={this.addLowerText} />
                                    </div>

                                <div className="form-group">
                                    <button className="btn btn-secondary" /* onClick={this.downloadImage(index)} */>Download Meme</button>
                                </div>
                                
                                </div>
                            </div>
                        </div>
               </div>
                </div>
                
            )
        })

        return (

            <div className="container mt-5">
                <section className="imgSection">
                    {showimg}
                </section>
               
            </div>

        )
    }
}


export default Main;