import React from 'react'
import { useTranslation } from 'react-i18next';



export const Footer = () => {
    const [t, i18n] = useTranslation("global");
    
    return (
        <div className="col-md-12">
        <footer class="text-center">

            <div class="text-left p-3" id='final'>
                
                <p class="footer" >Distribuciones Ruiz Millán DRM <br></br>© {t("where.rights")} </p>
            
            </div>

        </footer>
        </div>
    )
}
