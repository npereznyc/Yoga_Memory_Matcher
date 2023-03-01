import { useState, useEffect } from "react"

function Cards(props) {
    function swap(array,i,j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function shuffleCards(array){
        for(let i=array.length; i>0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            const currentIndex = i - 1;
            swap(array, currentIndex, randomIndex)
        }
        return array
    }
    return (
        <section className="container">
                    <div className="card">
                        <div className="card-image">
                            <img/>
                        </div>
                                        
                        <div className="card-title">
                            <h3>Pose Card</h3>
                        </div>
                    </div>
        </section>
    )

}

export default Cards