import React from 'react';
import './Cards.css';
import { CardsItem } from './CardsItem';
import img from '../Cards/images/img-9.jpg';
import birds from '../Cards/images/birds.jpg';
import pushkin from '../Cards/images/pushkin.jpg';
import pdd from '../Cards/images/pdd.jpeg';
import mult from '../Cards/images/mult.jpg';

export const Cards = () => {
    return (
        <div className="cards"> 
            <h1>Ближайшие мероприятия</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardsItem 
                                src={pushkin}
                                text="Викторина с ответами для школьников 6-7 класса по теме: Мой Пушкин"
                                label="Викторина"
                                path="/exhibitions"/>
                            <CardsItem 
                                src={pdd}
                                text='Викторина по ПДД "Умный пешеход"'
                                label="Викторина"
                                path="/exhibitions"/>
                    </ul>
                    <ul className="cards__items">
                            <CardsItem 
                                src={birds}
                                text="Угадай, чей это голос или Звуки в лесу"
                                label="Презентация"
                                path="/exhibitions"/>
                            <CardsItem 
                                src={mult}
                                text="Минутка расслабона - Карлсон"
                                label="Мультфильм"
                                path="/exhibitions"/>
                            <CardsItem 
                                src={img}
                                text="Документальный фильм про природу"
                                label="Документальное кино"
                                path="/exhibitions"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
