import React from "react";
import logo from "../../server/Folio_files/logo.png"
const ShowPanel = () => {
    return (
        <div className="">
            <div className="cards col-md-6">
                <h5 className="card-title card-title-head">ILLUSTRATOR, GRAPHIC DISGNER, TRAVELLER</h5>
                <p className="p-2">I design digital crafts for clients.</p>
                <a href="#" class="btn btn-primary" id="button-exp">Explore Works</a>
            </div>
            <div className="cards-img col-md-6">
                <img src={logo} alt="..."className="img-logo"/>
            </div>
        </div>
    )
}
export default ShowPanel;