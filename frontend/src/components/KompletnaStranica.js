import React from "react";
import Navigacija from "./Navigacija";
import OpisKviza from "./OpisKviza";
import Komponente from "./Komponente";
import OsobineTestova from "./OsobineTestova";
import LičniPodaci from "./LičniPodaci";
import { motion } from "framer-motion";

const KompletnaStranica = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Navigacija></Navigacija>
        <OpisKviza></OpisKviza>
        <Komponente></Komponente>
        <OsobineTestova></OsobineTestova>
        <LičniPodaci></LičniPodaci>
      </motion.div>
    </>
  );
};

export default KompletnaStranica;
