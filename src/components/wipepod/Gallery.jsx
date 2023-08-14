import React from 'react'
import gym from './Gym.jpg';
import home from './Home.jpg';
import hospitals from './Hospitals.jpg';
import kitchens from './Kitchens.jpg';
import offices from './Offices.jpg';
import restaurants from './Restaurants.jpg';
import schools from './Schools.jpg';
import vet from './Vet.jpg';
import workshop from './Workshops.jpg';
import { useTranslation } from 'react-i18next';



export const Gallery = () => {

    const [t, i18n] = useTranslation("global");
    return (
        <><div className="row" id='tres-columnas'>
            <h1><strong>Perfect for any Environment</strong></h1>
            <hr />
            <br></br>
            <div className="col-md-4" id='image-container'>
                <img src={gym} className="img-fluid" alt="logo" id='image' />
                <h2 id='text'>{t("wipepod.t3")}</h2>
            </div>
            <div className="col-md-4">
                <img src={offices} className="img-fluid" alt="logo" id='image' />
                <h2>{t("wipepod.t4")}</h2>

            </div>
            <div className="col-md-4">
                <img src={restaurants} className="img-fluid" alt="logo" id='image' />
                <h2 >{t("wipepod.t5")}</h2>

            </div>
        </div>
            <div className="row" id='tres-columnas'>
                <div className="col-md-4">
                    <img src={kitchens} className="img-fluid" alt="logo" id='image' />
                    <h2>{t("wipepod.t6")}</h2>
                </div>
                <div className="col-md-4">
                    <img src={workshop} className="img-fluid" alt="logo" id='image' />
                    <h2>{t("wipepod.t7")}</h2>

                </div>
                <div className="col-md-4">
                    <img src={hospitals} className="img-fluid" alt="logo" id='image' />
                    <h2>{t("wipepod.t8")}</h2>

                </div>
            </div><div className="row" id='tres-columnas'>
                <div className="col-md-4">
                    <img src={vet} className="img-fluid" alt="logo" id='image' />
                    <h2>{t("wipepod.t9")}</h2>
                </div>
                <div className="col-md-4">
                    <img src={schools} className="img-fluid" alt="logo" id='image' />
                    <h2>{t("wipepod.t10")}</h2>

                </div>
                <div className="col-md-4">
                    <img src={home} className="img-fluid" alt="logo" id='image' />
                    <h2>{t("wipepod.t11")}</h2>

                </div>
            </div></>



    )
}
