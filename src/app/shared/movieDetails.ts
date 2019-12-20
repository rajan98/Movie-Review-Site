export interface Movie {
    name: string;
    picSrc: string;
    rating: string;
    releaseDate: string;
    description: string;
}

export class MovieDetails{
    movies: Movie[] = [
        {
            name: "Joker",
            picSrc: "../../assets/img/joker.jfif",
            rating: "8.7/10",
            releaseDate: "2 October 2019",
            description: `Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.`
        },
        {
            name: "Batman Begins",
            picSrc: "../../assets/img/batman-begins.jpg",
            rating: "8.2/10",
            releaseDate: "17 June 2005",
            description: `After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.`
        },
        {
            name: "The Dark Knight",
            picSrc: "../../assets/img/dark-knight.jpg",
            rating: "9/10",
            releaseDate: "18 July 2008",
            description: `After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind, who wants to bring all the heroes down to his level.`
        },
        {
            name: "Justice League",
            picSrc: "../../assets/img/justice-league.jfif",
            rating: "6.4/10",
            releaseDate: "15 November 2017",
            description: `Steppenwolf and his Parademons set out to take over the Earth. However, Batman seeks the help of Wonder Woman to assemble and recruit Flash, Cyborg and Aquaman to thwart the powerful new enemy.`
        },
        {
            name: "Suicide Squad",
            picSrc: "../../assets/img/suicide-squad.jpg",
            rating: "6/10",
            releaseDate: "5 August 2016",
            description: `An intelligence officer assembles a team of imprisoned super-villains to execute dangerous black ops missions. Meanwhile, the homicidal Joker launches a diabolical agenda of his own.`
        },
        {
            name: "The Dark Knight Rises",
            picSrc: "../../assets/img/dark-knight-rises.jpg",
            rating: "8.4/10",
            releaseDate: "20 July 2012",
            description: `Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.`
        },

    ]
}