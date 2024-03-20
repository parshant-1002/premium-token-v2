import "./Featured.scss";

const Featured = () => {
  return (
    <section className="featured-on">
      <div className="container">
      <h2 class="h2 text-center common_title">Featured on</h2>
  
        <div className="featured-row">
          <div className="fetured-image">
            <img className="" loading="lazy"   alt="" src="/mask-group@2x.png" />
            </div>
            <div className="fetured-image">
            <img className="" alt="" src="/mask-group-1@2x.png" />
            </div>
            <div className="fetured-image">
            <img className=""  alt=""src="/mask-group-2@2x.png"  />
            </div>
            <div className="fetured-image">
            <img  className=""  alt="" src="/mask-group-3@2x.png" />
            </div>
            <div className="fetured-image">
            <img className=""  alt=""src="/mask-group-4@2x.png"  />
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default Featured;
