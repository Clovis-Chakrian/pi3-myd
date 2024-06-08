import React, { useState } from "react";
import logo from "../../../public/icons/logoinitial.png";
import styles from "./Trilhas.module.css";
import { SolidProgress } from "../../components/SolidProgress/SolidProgress";
import InteracaoSocial from "../../../public/TrilhasImg/trilhaInteracaoSocial.png";
import rotinaSaudavel from "../../../public/TrilhasImg/trilhaRotinaSaudavel.png";
import praticarGratidao from "../../../public/TrilhasImg/trilhaPraticarGratidao.png";
import conexaoNatureza from "../../../public/TrilhasImg/trilhaConexaoNatureza.png";
import trabalhoComunitario from "../../../public/TrilhasImg/trilhaTrabalhoComunitario.png";
import relaxamento from "../../../public/TrilhasImg/trilhaRelaxamento.png";
import { CardTrilhas } from "../../components/CardTrilhas/CardTrilhas";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export const Trilhas = () => {
  const [progress, setProgress] = useState(50);
  const [selectedTrilha, setSelectedTrilha] = useState(null);

  const trilhas = [
    { titulo: "Relaxamento", imageUrl: relaxamento },
    { titulo: "Interação Social", imageUrl: trabalhoComunitario },
    { titulo: "Rotina Saúdavel", imageUrl: conexaoNatureza },
    { titulo: "Praticar Gratidão", imageUrl: praticarGratidao },
    { titulo: "Conexão com a Natureza", imageUrl: rotinaSaudavel },
    { titulo: "Trabalho Comunitário", imageUrl: InteracaoSocial },
  ];

  const handleSelect = (index) => {
    if (selectedTrilha === index) {
      // Deselect the trilha if it's already selected
      setSelectedTrilha(null);
      setProgress(50);
    } else {
      // Select the trilha
      setSelectedTrilha(index);
      setProgress(100);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.caixaSubTit}>
            <h2 className={styles.subtitulo}>
              Para começarmos, escolha uma trilha abaixo :{" "}
            </h2>
          </div>
        </div>
        <SolidProgress name="2/2" progress={progress} />
        <br></br>
        <div className={styles.conjuntoTrilhas}>
          {trilhas.map((trilha, index) => (
            <CardTrilhas
              key={index}
              index={index}
              text={trilha.titulo}
              imageUrl={trilha.imageUrl}
              onClick={() => handleSelect(index)}
              isSelected={selectedTrilha === index}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonDiv}>
        <Link to="/home">
          <Button
            name={"Seguir"}
            className={styles.button}
            disabled={selectedTrilha === null}
          />
        </Link>
      </div>
    </>
  );
};
