// Single Post
import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/icons/edit.png";
import Delete from "../img/icons/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/id/182/600/500" alt="" />
        <div className="user">
          <img src="https://picsum.photos/id/65/200/300" alt="" />
          <div className="info">
            <span>Ashley</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, atque.
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
          consequatur fugit, sit nam ipsum mollitia quod ex, veritatis minus
          libero quis perferendis ratione error alias aperiam tenetur! Dicta,
          quam commodi!
          <br />
          <br />
          Ab porro harum, tenetur doloremque at quae itaque illum eaque eum
          accusantium culpa laboriosam expedita nisi recusandae mollitia
          praesentium facere explicabo adipisci officiis repellendus nobis,
          natus eius? Deleniti, error facere! Optio veniam ipsam minus dolorem
          maiores quia amet expedita commodi recusandae sapiente corporis quae
          sequi, eaque cumque rem ducimus fugiat omnis voluptatum voluptate
          nostrum culpa placeat architecto quos! Ipsam, voluptatibus? Id
          molestiae distinctio neque, sunt iure nemo ad, blanditiis tenetur
          quisquam saepe, alias dolorem aperiam reprehenderit.
          <br />
          <br />
          At numquam quisquam voluptate esse ut atque dolorem aliquam, rerum
          soluta ipsam. Voluptas, laudantium. Saepe enim tempora, ratione
          quisquam quas distinctio cupiditate quidem nemo nobis, odit laudantium
          cumque voluptas sint? Cum, praesentium! Blanditiis nihil recusandae
          quos dignissimos at vel iste et ipsum natus odio. Quidem sint
          accusantium at quod aliquam fugiat ad quam quasi, cupiditate
          voluptatem, alias aut obcaecati, tenetur sapiente a impedit vitae nam
          ea ratione porro. Numquam maxime accusamus veniam quo natus? Illum ex
          veniam quasi soluta laborum ut itaque id iste praesentium repudiandae
          harum provident perspiciatis beatae nobis, alias ea ad vel ullam natus
          magnam odio, sunt modi necessitatibus? Incidunt, laudantium. Suscipit
          dolor magnam mollitia, eos vel aliquam ipsam! Cumque dolore nam
          maiores fuga voluptate. Sed, odit tempore! Dignissimos officiis,
          perspiciatis, accusantium incidunt asperiores, dolorem repellendus
          quas assumenda dolor nemo ut? Tempora blanditiis natus architecto
          quibusdam quisquam? Deserunt sit praesentium, saepe modi quos labore
          non harum adipisci eos distinctio tempora minima, amet neque nihil
          animi quaerat accusamus, aliquam ut dolore suscipit.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
