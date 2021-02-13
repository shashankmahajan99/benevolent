import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`} className="card">
          {name}
          <p>{released}</p>
        </motion.h3>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  clip-path: polygon(93% 0, 100% 13%, 100% 100%, 0 100%, 0 0);
  -webkit-transition: clip-path 0.3s ease-out;
  -moz-transition: clip-path 0.3s ease-out;
  -o-transition: clip-path 0.3s ease-out;
  transition: clip-path 0.3s ease-out;
  &:hover {
    clip-path: polygon(100% 0, 100% 0%, 100% 100%, 0 100%, 0 0);
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  .card {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #14213d;
    padding: 10px 20px;
    color: #ffffff;
    p {
      color: #979797;
    }
  }

  &:hover .card {
    padding: 10px 30px;
    background: #fca311;
    color: #e5e5e5;
    p {
      color: #494949;
    }
  }
`;

export default Game;
