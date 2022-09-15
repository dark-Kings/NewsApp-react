// // 1)using classes

// import React, { Component } from 'react';
// import InfiniteScroll from "react-infinite-scroll-component";
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';


// export class News extends Component {

//     // articles=
//     // [
//     //     {
//     //         "source": {
//     //             "id": "lequipe",
//     //             "name": "L'equipe"
//     //         },
//     //         "author": "L'EQUIPE",
//     //         "title": "Imad Faraj (AEK Larnaca) : « Niveau football et dans la ville, c'est top »",
//     //         "description": "Rennes, qui se déplace jeudi à Chypre (18h45) pour affronter l'AEK Larnaca en Ligue Europa, croisera un Français : Imad Faraj (23 ans), l'ancien Lillois arrivé la saison dernière dans une équipe ambitieuse.",
//     //         "url": "https://www.lequipe.fr/Football/Actualites/Imad-faraj-aek-larnaca-niveau-football-et-dans-la-ville-c-est-top/1352757",
//     //         "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/imad-faraj-a-gauche-a-l-entrainement-avec-lille-a-l-ete-2018-e-garnier-l-equipe/1500000001684445/391:145,1968:1197-640-427-75/3bd6a.jpg",
//     //         "publishedAt": "2022-09-08T06:00:00+00:00",
//     //         "content": "« Qu'est-ce qui attend Rennes jeudi soir ?Le stade va être plein, mais il ne faut pas s'attendre à une ambiance comme on peut l'imaginer en France. Ce n'est pas une atmosphère d'enfer. C'est une bonn… [+2396 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "espn",
//     //             "name": "ESPN"
//     //         },
//     //         "author": "Adam TeicherESPN Staff Writer ",
//     //         "title": "Patrick Mahomes says 'sorry to all you fantasy football guys,' confirms Kansas City Chiefs' balanced WR approach",
//     //         "description": "Patrick Mahomes warns fantasy football players that predicting his favorite receiver from week to week this season will be difficult as the Chiefs' passing game adjusts to life without Tyreek Hill.",
//     //         "url": "http://espn.go.com/nfl/story/_/id/34543800/patrick-mahomes-says-sorry-all-fantasy-football-guys-confirms-kansas-city-chiefs-balanced-wr-approach",
//     //         "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0907%2Fr1058655_1296x729_16%2D9.jpg",
//     //         "publishedAt": "2022-09-07T19:49:00Z",
//     //         "content": "KANSAS CITY, Mo. -- Pinpointing the Kansas City Chiefs' top wide receiver figures to be a weekly headache for fantasy football players.\r\nPatrick Mahomes confirmed as much.\r\nMahomes warned fantasy foo… [+1809 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "bleacher-report",
//     //             "name": "Bleacher Report"
//     //         },
//     //         "author": "Kristopher Knox",
//     //         "title": "2022 NFL Trade-Block Big Board and Top Potential Landing Spots Entering Week 1",
//     //         "description": "The 2022 NFL season is finally upon us, football fans! The Los Angeles Rams and Buffalo Bills will kick off the campaign Thursday at SoFi Stadium, and from...",
//     //         "url": "https://bleacherreport.com/articles/10047803-2022-nfl-trade-block-big-board-and-top-potential-landing-spots-entering-week-1",
//     //         "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1662466997/drinkas5rec11snv1zfj.jpg",
//     //         "publishedAt": "2022-09-07T12:38:12Z",
//     //         "content": "AP Photo/Jeff Chiu\r\nThe 49ers ended up keeping Garoppolo after agreeing to restructure his contract. Instead of having a $24.2 million base salary, he'll play the backup role for just $7 million. At … [+1821 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "espn",
//     //             "name": "ESPN"
//     //         },
//     //         "author": "Eric KarabellESPN Senior Writer ",
//     //         "title": "Fantasy football superflex rankings 2022: QBs, RBs, WRs, TEs",
//     //         "description": "Trying to decide between a couple of closely ranked fantasy football players this week? Eric Karabell ranks the top 150 QBs, RBs, WRs and TEs to make the decision easy for you.",
//     //         "url": "http://espn.go.com/fantasy/football/insider/story/_/id/34537119/fantasy-football-flex-superflex-rankings-quarterback-running-back-wide-receiver-tight-end",
//     //         "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1117%2Fr938677_1296x729_16%2D9.jpg",
//     //         "publishedAt": "2022-09-07T10:28:00Z",
//     //         "content": "Welcome to Week 1 of the NFL season and the first edition of our weekly PPR fantasy football superflex rankings for 2022. We know many of you now compete in superflex formats that invite/covet second… [+12286 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "the-next-web",
//     //             "name": "The Next Web"
//     //         },
//     //         "author": "Tristan Greene",
//     //         "title": "Forget chess, DeepMind's training its new AI to play football",
//     //         "description": "Researchers from DeepMind, the UK's juggernaut AI lab, have forsaken the noble games of chess and Go for a more plebeian delight: football.\r\n\r\nThe Google sister company yesterday published ...",
//     //         "url": "http://thenextweb.com/news/forget-chess-deepminds-training-new-ai-play-football",
//     //         "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F09%2Fdeepmindfootball.jpg&signature=c9c7547e41dd0811817adb1b56c4a07d",
//     //         "publishedAt": "2022-09-01T22:09:19Z",
//     //         "content": "Researchers from DeepMind, the UKs juggernaut AI lab, have forsaken the noble games of chess and Go for a more plebeian delight: football.\r\nThe Google sister company yesterday published a research pa… [+3647 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "espn-cric-info",
//     //             "name": "ESPN Cric Info"
//     //         },
//     //         "author": null,
//     //         "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
//     //         "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
//     //         "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
//     //         "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
//     //         "publishedAt": "2020-04-27T07:20:43Z",
//     //         "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
//     //     }
//     // ]
//     static defaultProps = {
//         country: 'in',
//         pageSize: 6,
//         category: 'general'
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         // console.log("Hello iam a constructor from news component");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey `;

//     }
//     async componentDidMount() {
//         //old method
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c500ba7669ac49789ada7b3c45186a87&page=1&pageSize=${this.props.pageSize}`;
//         // // console.log(url);
//         // // console.log(this.props.pageSize);
//         // this.setState({ loading: true });
//         // let data = await fetch(url);
//         // let parsedData = await data.json();
//         // // console.log(parsedData);
//         // this.setState({
//         //     articles: parsedData.articles,
//         //     totalResults: parsedData.totalResults,
//         //     loading: false
//         // });
//         // console.log(parsedData.totalResults);
//         //new method
//         this.updateNews();
//     }
//     async updateNews() {
//         this.props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         // console.log(url);
//         // console.log(this.props.pageSize);
//         this.setState({ loading: true });
//         this.props.setProgress(30);
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.props.setProgress(70);
//         // console.log(parsedData);
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         });
//         this.props.setProgress(100);
//     }

//   // 1) used with previous next button  
//     // handlePreviousClick = async () => {
//     //     //    console.log("previous");
//     //     //old method
//     //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c500ba7669ac49789ada7b3c45186a87&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     //     // this.setState({ loading: true });
//     //     // let data = await fetch(url);
//     //     // // console.log(url);
//     //     // let parsedData = await data.json();
//     //     // // console.log(parsedData);
//     //     // this.setState({
//     //     //     page: this.state.page - 1,
//     //     //     articles: parsedData.articles,
//     //     //     loading: false
//     //     // })
//     //     //new method
//     //     this.setState({
//     //         page: this.state.page - 1
//     //     })
//     //     this.updateNews();
//     // }
//     // handleNextClick = async () => {
//     //     //    console.log("next");
//     //     //old method
//     //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//     //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c500ba7669ac49789ada7b3c45186a87&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     //     //     this.setState({ loading: true });
//     //     //     let data = await fetch(url);
//     //     //     // console.log(url);
//     //     //     let parsedData = await data.json();
//     //     //     // console.log(parsedData);
//     //     //     this.setState({
//     //     //         page: this.state.page + 1,
//     //     //         articles: parsedData.articles,
//     //     //         loading: false
//     //     //     })
//     //     // }
//     //     //new Method
//     //     this.setState({
//     //         page: this.state.page + 1,
//     //     })
//     //     this.updateNews();
//     // }

//    //2) used with infinite scroll bar 
//     fetchMoreData = async () => {
//         this.setState({ page: this.state.page + 1 });
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         // console.log(url);
//         // console.log(this.props.pageSize);
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         // console.log(parsedData);
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults,
//             loading: false
//         })

//     };

//     render() {
//         return (
//             //1) next previous button using
//             // <div className='container my-3'>
//             //     <h2 className='my-2 mb-2 text-center'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
//             //     {this.state.loading && <Spinner />}
//             //     <div className="row my-3" >
//             //         {!(this.state.loading) && this.state.articles.map((element) => {
//             //             return (<div className="col-md-4 my-2 " key={element.url}>
//             //                 <NewsItem title={element.title ? element.title: ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={!element.urlToImage ? {imgNotFound} : element.urlToImage} newsUrl={element.url}
//             //                  author={element.author?element.author:"Unknown"} date={element.publishedAt?element.publishedAt:"No tKnown"} source={element.source.name}/>
//             //             </div>)
//             //         })}
//             //     </div>
//             //     <div className="container d-flex justify-content-between">
//             //         <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
//             //         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//             //     </div>
//             // </div>

//             //2) infinite scroll bar approach
//             <>
//                 <h2 className='my-2 mb-2 text-center'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
//                 {this.state.loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner />}>
//                     <div className="container">
//                         <div className="row my-3" >
//                             {this.state.articles.map((element, index) => {
//                                 return (<div className="col-md-4" key={index}>
//                                     <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url}
//                                         author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "No tKnown"} source={element.source.name} />
//                                 </div>)
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>
//             </>
//         )
//     }
// }

// export default News;


// 2)using functions

import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


const News = (props) => {


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0);
    
    const  capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    
    
    // useEffect function do work of componentDidMount()
    
    useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey `;
    updateNews();
    // eslint-disable-next-line
},[])



const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResults)
    setLoading(false);
    props.setProgress(100);
}

// 1) used with previous next button 

// handlePreviousClick = async () => {
//     setPage(page -1);
//     updateNews();
// }

// handleNextClick = async () => {
//   setPage(page +1);
//   updateNews();
// }

// 2) used with infinite scroll bar 
const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
 
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResults);
};


    return (
        //1) next previous button using
        // <div className='container my-3'>
        //     <h2 className='my-2 mb-2 text-center'>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines </h2>
        //     {loading && <Spinner />}
        //     <div className="row my-3" >
        //         {!(state.loading) && state.articles.map((element) => {
        //             return (<div className="col-md-4 my-2 " key={element.url}>
        //                 <NewsItem title={element.title ? element.title: ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={!element.urlToImage ? {imgNotFound} : element.urlToImage} newsUrl={element.url}
        //                  author={element.author?element.author:"Unknown"} date={element.publishedAt?element.publishedAt:"No tKnown"} source={element.source.name}/>
        //             </div>)
        //         })}
        //     </div>
        //     <div className="container d-flex justify-content-between">
        //         <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
        //         <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        //     </div>
        // </div>

        //2) infinite scroll bar approach
        <>
            <h2 className='text-center' style={{marginTop:'80px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines </h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row my-3" >
                        {articles.map((element, index) => {
                            return (<div className="col-md-4" key={index}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url}
                                    author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "No tKnown"} source={element.source.name} />
                            </div>)
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;
