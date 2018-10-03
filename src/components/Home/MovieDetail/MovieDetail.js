import React,{Component} from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import YouTube from 'react-youtube';

const QUERY_MOVIE = gql`
    query movie($id:ID!){
        movie(id:$id ){
        id 
    	title
        sinopsis
        length
        video_url
        suscription_type
  }
}
`

class MovieDetail extends Component{

    constructor(props){
        super(props);
        console.log(props)
    }

    getVideoId = (url) => {
        return url.split("=")[1]
    }


    render(){

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
        };

        return(
            <Query query={QUERY_MOVIE} variables={{id:this.props.match.params.id}}>
            {
                ({loading,err,data}) => {
                    if (loading) return 'Cargando tu pelicula...'
                    if (err) return 'Error en el servicio...'
                    return(
                        <div>
                    <h1>{data.movie.title}</h1>
                    <YouTube
                        videoId={this.getVideoId(data.movie.video_url)}
                        opts={opts}/>
                        </div>
                    )
                }
            }
            </Query>

        )
    }

}

export default MovieDetail; 