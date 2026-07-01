import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        About
      </div>

      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Building modern web applications
        <br className="d-none d-lg-block" />
        with clean code, scalability,
        <br className="d-none d-lg-block" />
        and great user experiences
      </h4>

      <p className="s-desc text-black-56 scrolling-effect effectTop">
        I'm a Full Stack Developer specializing in Laravel, Next.js, and
        WordPress, creating scalable web applications, eCommerce platforms,
        and custom business solutions.
        <br className="d-none d-lg-block" />
        <br />
        I focus on writing clean, maintainable code while delivering secure,
        high-performance applications that solve real business challenges and
        provide exceptional user experiences.
      </p>

      {/*
      <ul className="award-list">
        {awards.map((a) => (
          <li className="award-item hover-cursor-img" key={a.name + a.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">
                {a.name}
              </h6>
              <p className="award_desc text-black-56">
                {a.publisher}
              </p>
            </div>

            <h6 className="award_year text-black-72">
              {a.year}
            </h6>

            <div className="award_img hover-image">
              <img
                loading="lazy"
                width={158}
                height={224}
                src={a.image}
                alt={a.name}
              />
            </div>
          </li>
        ))}
      </ul>
      */}
    </div>

    
  );
}

