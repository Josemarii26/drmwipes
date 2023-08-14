import React from 'react'
import workshop from './Workshops.jpg';
import gym from './Gym.jpg';
import home from './Home.jpg';
import hospitals from './Hospitals.jpg';
import kitchens from './Kitchens.jpg';
import offices from './Offices.jpg';
import restaurants from './Restaurants.jpg';
import schools from './Schools.jpg';
import vet from './Vet.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export const Prueba = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <div class="row content">

                

            <div className="col-md-4 thumbnails">
                <img src={gym} alt="gym"></img>
                <div className="black-oro"></div>
                <div className="title">{t("wipepod.t3")}
                <br></br>

            <Link as={Link} to="/gym-zone"><button type="button" class="botoncito3">NEW SECTION! <span></span><span></span><span></span><span></span></button></Link>
                
                </div>
            </div>

            <div className="col-md-4 thumbnails">
                <img src={offices} alt="offices"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t4")}</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={restaurants} alt="restaurants"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t5")}</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={kitchens} alt="kitchens"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t6")}</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={workshop} alt="workshop"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t7")}</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={hospitals} alt="hospitals"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t8")}</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={vet} alt="vet"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t9")}</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={schools} alt="schools"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t10")}</div>
            </div>

            <div className=" col-md-4 thumbnails">
                <img src={home} alt="home"></img>
                <div className="black"></div>
                <div className="title">{t("wipepod.t11")}</div>
            </div>



        </div>



    )
}
