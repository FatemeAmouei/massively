import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Article from "./../Article/Article";
import Pagination from "react-bootstrap/Pagination";

import "./Tabs.css";

const TabSection: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey="tab1"
      transition={true}
      id="noanim-tab-example"
      className="tabs"
    >
      <Tab eventKey="tab1" title="THIS IS MASSIVELY" className="tab">
        <header className="tab1-header">
          <span className="tab1-header__date ">Oct 22, 2025</span>
          <h2 className="tab1-header__title">
            <a href="#">
              And this is a
              <br />
              massive headline
            </a>
          </h2>
          <p className="tab1-header__text">
            Aenean ornare velit lacus varius enim ullamcorper proin aliquam
            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
            amet nullam sed etiam veroeros.
          </p>
          <a href="#" className="tab1-image">
            <img
              className="tab1-image_img"
              src="https://html5up.net/uploads/demos/massively/images/pic01.jpg"
              alt="image-main"
            />
          </a>
          <a href="#" className="tab1-btn">
            FULL STORY
          </a>
        </header>
        <article className="articles">
          <Article
            image={
              "https://html5up.net/uploads/demos/massively/images/pic02.jpg"
            }
            title={"Sed magnaipsum faucibus"}
            text={
              "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
            }
            btn={"FULL STORY"}
          />
          <Article
            image={
              "	https://html5up.net/uploads/demos/massively/images/pic03.jpg"
            }
            title={"Primis eget imperdiet lorem"}
            text={
              "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
            }
            btn={"FULL STORY"}
          />
          <Article
            image={
              "	https://html5up.net/uploads/demos/massively/images/pic04.jpg"
            }
            title={"Ante mattisinterdum dolor"}
            text={
              "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
            }
            btn={"FULL STORY"}
          />
          <Article
            image={
              "	https://html5up.net/uploads/demos/massively/images/pic05.jpg"
            }
            title={"Tempus sednulla imperdiet"}
            text={
              "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
            }
            btn={"FULL STORY"}
          />
        </article>
        <Pagination className="Pagination">
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item>{6}</Pagination.Item>
          <Pagination.Item>{"next"}</Pagination.Item>
        </Pagination>
      </Tab>
      <Tab eventKey="tab2" title="GENERIC PAGE" className="tab">
        <header className="tab2-header">
          <span className="tab2-header__date ">Oct 22, 2025</span>
          <h2 className="tab2-header__title">
            <a href="#">
              This is a
              <br />
              Generic Page
            </a>
          </h2>
          <p className="tab2-header__text">
            Aenean ornare velit lacus varius enim ullamcorper proin aliquam
            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
            amet nullam sed etiam veroeros.
          </p>
          <a href="#" className="tab2-image">
            <img
              className="tab2-image_img"
              src="https://html5up.net/uploads/demos/massively/images/pic01.jpg"
              alt="image-main"
            />
          </a>
          <p className="tab2-text">
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor
            sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,
            fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
            Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Nunc
            lorem mauris, fringilla in aliquam at, euismod in lectus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Curabitur sapien risus, commodo eget turpis
            at, elementum convallis enim turpis, lorem ipsum dolor sit amet
            nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            tristique libero eu nibh porttitor fermentum.
            <br /> Nullam venenatis erat id vehicula viverra. Nunc ultrices eros
            ut ultricies condimentum. Mauris risus lacus, blandit sit amet
            venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
            aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. In non lorem
            sit amet elit placerat maximus. Pellentesque aliquam maximus risus.
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor
            sit amet. Pellentesque leo mauris, consectetur id ipsum.
          </p>
        </header>
      </Tab>
      <Tab eventKey="tab3" title="ELEMENTS REFERENCE" className="tab">
        <header className="tab3-header">
          <h2 className="tab3-header__title">
            <a href="#">
              Elements
              <br />
              Reference
            </a>
          </h2>
          <h3 className="tab3-header__subtitle">Text</h3>
          <p className="tab3-header__text">
            This is bold and this is strong. This is italic and this is
            emphasized. This is superscript text and this is subscript text.
            This is underlined and this is code: for Finally, this is a link.
          </p>
          <h4 className="tab3-header__subtitle">Heading with a Subtitle</h4>
          <p className="tab3-header__text">
            Lorem ipsum dolor sit amet nullam id egestas urna aliquam Nunc
            lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <h5 className="tab3-header__subtitle">Heading with a Subtitle</h5>
          <p className="tab3-header__text">
            Lorem ipsum dolor sit amet nullam id egestas urna aliquam Nunc
            lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <h6 className="tab3-header__subtitle">Heading with a Subtitle</h6>
          <p className="tab3-header__text">
            Lorem ipsum dolor sit amet nullam id egestas urna aliquam Nunc
            lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
        </header>
      </Tab>
    </Tabs>
  );
};

export default TabSection;
