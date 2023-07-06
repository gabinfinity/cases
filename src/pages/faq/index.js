import FAQScreen from "@/screens/FAQScreen";
import { useEffect, useState } from "react"


export default FAQScreen;

export async function getServerSideProps() {
  const API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch (API) 
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
  return {
    props: {faq},
  };
}