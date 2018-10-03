import React from 'react';
import {shallow} from "enzyme";
import Movie from './Movie';

describe("Movie",() => {
    const movieObject ={
        "poster":"www.google.com"
        "title":"La pelicula"
        "id":"asdsdfasf"
    }

    

    it("Check if props passed correctly",(){
        const movieObject = {
            "poster": "www.google.com",
            "title":"La pelicula test",
            "id":"SEFDFDSFADFS"
        }

        const component = shallow(<Movie title={movieObject.title}
                        poster={movieObject.Object.poster}
                        id={movieObject.id}



                />)
        expect(component.find(".card-title").text()).toBe(movieObject.title)

    })



})