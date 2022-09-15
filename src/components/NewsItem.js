// 1)using classes

// import React, { Component } from 'react'
// import imgNotFound from "../imgNotFound.webp";

// // import PropTypes from 'prop-types'

// export class NewsItem extends Component {
//     //   static propTypes = {

//     //   }


//     render() {
//         let { title, description, imageurl, newsUrl, author, date, source } = this.props;
//         return (
//             <div className='mb-2'>
//                 <div className="card">
//                     <div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position: "absolute" }}>
//                         <span className="badge rounded-pill bg-danger" >{source}</span>
//                     </div>
//                     <img src={!imageurl ? imgNotFound : imageurl} className="card-img-top" style={{ height: "170px" }} alt="loading.." />
//                     <div className="card-body">

//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">{description}...</p>
//                         <p className="card-text"><small className=" text-danger">By - {author} on {date}</small></p>
//                         <a href={newsUrl} target="blank" className="btn btn-dark btn-sm">Go somewhere</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem

import React from 'react'
import imgNotFound from "../imgNotFound.webp";



const NewsItem =(props)=> {
 
        let { title, description, imageurl, newsUrl, author, date, source } =props;
        return (
            <div className='mb-2'>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position: "absolute" }}>
                        <span className="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={!imageurl ? imgNotFound : imageurl} className="card-img-top" style={{ height: "170px" }} alt="loading.." />
                    <div className="card-body">

                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className=" text-danger">By - {author} on {date}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-dark btn-sm">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
