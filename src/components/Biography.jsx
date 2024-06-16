import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic at
          quibusdam in quae dolorem accusantium beatae quod eaque, expedita
          nihil, eos incidunt suscipit nobis natus delectus, commodi distinctio
          sit explicabo cum. Accusantium nesciunt quas error dicta nemo quis
          quasi sit. Deserunt architecto sequi rem. Nam magnam maxime excepturi
          ipsum dicta!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam nisi
          iure doloremque, porro beatae facilis voluptas sit quos minima magni
          fuga quae iste, consequatur, odit quo illo nostrum laborum!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sit.
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
