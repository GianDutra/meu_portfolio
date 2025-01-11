import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import p0 from "../../assets/image/p0.png";
import p1 from "../../assets/image/p1_new.png";
import p2 from "../../assets/image/p2_new.png";
import p3 from "../../assets/image/p3_new.png";
import p4 from "../../assets/image/p4_new.png";
import p5 from "../../assets/image/p5_new.png";
import p6 from "../../assets/image/p6_new.jpg";
import p7 from "../../assets/image/p7.png";
import p8 from "../../assets/image/p8.jpg";
import p9 from "../../assets/image/p9.png";
import p10 from "../../assets/image/p10.png";
import p11 from "../../assets/image/p11.png";
import p12 from "../../assets/image/p12.png";
import p13 from "../../assets/image/p13.png";
import p14 from "../../assets/image/p14.png";
import p15 from "../../assets/image/p15.png";
import p16 from "../../assets/image/p16.png";
import p17 from "../../assets/image/p17.png";
import p18 from "../../assets/image/p18.png";
import p19 from "../../assets/image/p19.png";
import p20 from "../../assets/image/p20.png";
import p21 from "../../assets/image/p21.png";
import p22 from "../../assets/image/p22.png";
import p23 from "../../assets/image/p23.png";
import p24 from "../../assets/image/p24.png";
import p25 from "../../assets/image/p25.png";
import p26 from "../../assets/image/p26.png";
import p27 from "../../assets/image/p27.png";
import comingSoon from '../../assets/image/coming-soon.png'

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  useEffect(() => {
    if (!isMobile) {
      const cards = portfolioRef.current.querySelectorAll(".proyecto");

      gsap.defaults({ ease: "back" });
      gsap.set(cards, { y: 100 });

      const startAnimation = () => {
        ScrollTrigger.batch(cards, {
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: { each: 0.2, grid: [1, 3] },
              overwrite: true,
            }),
          onLeave: (batch) =>
            gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2, overwrite: true }),
          onLeaveBack: (batch) =>
            gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
        });

        ScrollTrigger.addEventListener("refreshInit", () =>
          gsap.set(cards, { y: 0 })
        );
      };

      const handleWindowLoad = () => {
        startAnimation();
      };

      window.addEventListener("load", handleWindowLoad);

      return () => {
        window.removeEventListener("load", handleWindowLoad);
      };
    }
  }, [isMobile]);

  const handleButtonClick = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open(
      "https://github.com/GianDutra/Ignite-Feed-TypeScript",
      "_blank"
    );
  };

  const handleButtonClick2 = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/Pomodoro", "_blank");
  };

  const handleButtonClickDtMoney = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/DT-Money", "_blank");
  };

  const handleButtonClickIgniteShop = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/Shop-Nextjs-Challenge", "_blank");
  };

  const handleButtonClickCoffee = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/Coffee-delivery", "_blank");
  };

  const handleButtonClickPortfolio = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/meu_portfolio", "_blank");
  };

  const handleButtonClickTailwindForm = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/tailwind-nextjs", "_blank");
  };

  const handleButtonClickDesignSystem = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/my-design-system", "_blank");
  };

  const handleButtonClickIgniteCall = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/ignite-call", "_blank");
  };

  const handleButtonClickReduxZustand = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai

    // Aqui a lógica de redirecionamento para o link desejado
    window.open("https://github.com/GianDutra/ignite_redux_zustand", "_blank");
  };
  
  const displayTextPomodoro = isMobile
    ? "TS React Router Context Immer Zod Reducer StyledComps HookForm"
    : "TypeScript React Router Context Reducer Immer Styled_Components Hook_Form Zod";

  const displayTextIgniteDt = isMobile
    ? "TS React HookForm Axios Zod Radix Json_Server Context StyledComps"
    : "TypeScript React Json_Server Radix Axios Zod Hook_Form Context Styled_Comps";

  const displayTextIgniteShop = isMobile
    ? "TS NextJS Stitches EmblaCarousel Stripe LoadingSkeleton SSG SSR"
    : "TypeScript React NextJS Stitches Stripe SSG SSR Embla_Carousel Loading_Skeleton";

  const displayTextCoffee = isMobile
    ? "TS React API StyledComponents HookForm Zod Axios Immer"
    : "TypeScript React API Styled_Components Hook_Form Zod Axios Immer";

  const displayTextPortfolio = isMobile
    ? "HTML CSS JS React Git Gsap Aos"
    : "HTML CSS Javascript React Git Gsap Aos";

  const displayTextTailwindForm = isMobile
    ? "TS NextJS Tailwind Radix DarkMode Lucide FramerMotion AutoAnimate"
    : "TypeScript NextJS Radix Tailwind Framer_Motion Lucide_Icon Auto_Animate Next_themes";

  const displayDesignSystem = isMobile
    ? "TS Storybook Monorepo Radix React Stitches TurboRepo PhosphorIcons "
    : "TypeScript Storybook Monorepo TurboRepo React Stitches RadixUI Phosphor_Icons";

  const displayTextIgniteCall = isMobile
    ? "TS NextJs Prisma MySQL ReactQuery GoogleAPI Stitches Axios Zod DayJS"
    : "TypeScript NextJs Prisma MySQL GoogleAPI Zod PlanetScale Stitches ReactQuery DayJS Axios";

  const displayTextVideoAI = isMobile
    ? "JS NodeJS Express Cors YoutubeAPI Axios ffmpeg WhisperAI"
    : "JavaScript NodeJS Express Cors Axios nytdl-core ffmpeg transformers.JS WhisperAI YoutubeAPI";

  const displayTextAISQL = isMobile
    ? "TS NextJS React OpenAI Tailwind Prismjs Simple_Code_Editor  GPT"
    : "TypeScript NextJS React OpenAI GPT Lucide_Icon TailWind Prismjs Simple_Code_Editor"

  const displayTextReduxZustand = isMobile
    ? "TS React Radix ReduxToolkit Thunk Zustand Vitest JSONServer TailWind"
    : "TypeScript React Redux_Toolkit Thunk Zustand Vitest Axios JSON_Server TailWind Radix"
    

  const displayTextTransactionsRestAPI = isMobile
  ? "TS Node.js Fastify Fastify-Cookie Knex Zod Vitest Supertest Sqlite PostgreSQL Render"
  : "TypeScript Node.js Fastify Fastify-Cookie Knex Zod Vitest Supertest Sqlite PostgreSQL Render"

  const displayTextDailyDietAPI = isMobile
  ? "TS Node.js Fastify Fastify-Cookie Knex Zod Vitest Supertest Sqlite PostgreSQL"
  : "TypeScript Node.js Fastify Fastify-Cookie Knex Zod Vitest Supertest Sqlite PostgreSQL"
  
  const displayTextGymPassAPI = isMobile
  ? "TS Node.js Fastify JWT Cookie Prisma Bcryptjs Dayjs Zod Vitest PostgreSQL"
  : "TypeScript Node.js Fastify JWT Cookie Prisma Bcryptjs Dayjs Zod Vitest Supertest PostgreSQL"
  
  const displayTextUploadAI = isMobile
  ? "TS Node.js React Tailwind WhisperAI ChatGPT OpenAI Shadcn Fastify Prisma WebAssembly"
  : "TypeScript Node React Tailwind WhisperAI ChatGPT OpenAI Shadcn Fastify Prisma WebAssembly"

  const displayTextAzureML = isMobile
    ? "Azure AI MachineLearning DataScience Regression Dashboard"
    : "Azure AI Machine_Learning Data_Science Regression Analysis Dashboard";

  const displayTextSalaryPredictor = isMobile
    ? "Python Scikit-learn FastAPI Streamlit Joblib PolynomialRegression"
    : "Python Scikit-learn FastAPI Streamlit Joblib Polynomial_Regression";
  
  const displayTextMileageEstimator = isMobile
    ? "Python Scikit-learn FastAPI Statsmodels Uvicorn SimpleLinearRegression"
    : "Python Scikit-learn FastAPI Statsmodels Uvicorn Simple_Linear_Regression";
  
  const displayTextGradePredictor = isMobile
    ? "Python Scikit-learn Gradio Joblib MultipleLinearRegression"
    : "Python Scikit-learn Gradio Joblib Multiple_Linear_Regression";

  const displayTextCognitiveSearch = isMobile
    ? "Azure AI Search Blob_Storage Document"
    : "Azure AI Cloud Document_Search Blob_Storage";
  
  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>PROJECTS</h2>
        <div className="galeria" ref={portfolioRef}>
        <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >


          <a
              href="https://github.com/GianDutra/modelo_salario_RLP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p27} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Salary Predictor</h3>
              <p className="p">{displayTextSalaryPredictor}</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >


          <a
              href="https://github.com/GianDutra/modelo_avaliacao_RLM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p26} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Grade Predictor</h3>
              <p className="p">{displayTextGradePredictor}</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >


            <a
              href="https://github.com/GianDutra/modelo_regressao_combustivel_distancia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p25} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Mileage Estimator</h3>
              <p className="p">{displayTextMileageEstimator}</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >

                        <a
              href="https://github.com/GianDutra/Machine-Learning-no-Azure-ML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p23} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Game Sales Predictor</h3>
              <p className="p">{displayTextAzureML}</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >

            <a
              href="https://github.com/GianDutra/Azure-Cognitive-Search"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p24} alt="" />
            </a>
            <div className="overlay">
              <h3>Azure Cognitive Search</h3>
              <p className="p">{displayTextCognitiveSearch}</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >

            <a
              href="https://github.com/GianDutra/Upload.ai_front_end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p22} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Upload.AI</h3>
              <p className="p">{displayTextUploadAI}</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >

          <a
              href="https://github.com/GianDutra/ScrapyRankingBrands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p5} alt="" />
            </a>
            <div className="overlay">
              <h3>Python Web Crawler</h3>
              <p>Python Scrapy MongoDB Git ETL</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
                       <a
              href="https://github.com/GianDutra/AI_AspiradorPo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p7} alt="" />
            </a>
            <div className="overlay">
              <h3>AI - Vacuum Cleaner</h3>
              <p>Python Git</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          > 
             <a
              href="https://github.com/GianDutra/AI-SQL-Schema-Assistant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p16} alt="" />
            </a>
            <div className="overlay">
              <h3>AI SQL Query Helper</h3>
              <p className="p_com_link">{displayTextAISQL}</p>
              <span className="visit-text"></span>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/video-transcription-with-AI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p15} alt="" />
            </a>
            <div className="overlay">
              <h3>Video Transcription AI</h3>
              <p className="p_com_link">{displayTextVideoAI}</p>
              <span className="visit-text"></span>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://ignite-call-giandutra.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="CoffeeImg" src={p14} alt="" />
            </a>
            <div className="overlay">
              <h3>Ignite Call</h3>
              <p className="p_com_link">{displayTextIgniteCall}</p>
              <a
                className="button-right_igniteCall"
                href="https://github.com/GianDutra/ignite-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickIgniteCall}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/Gym-Pass-API-SOLID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p21} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Gym Pass API (SOLID)</h3>
              <p className="p">{displayTextGymPassAPI}</p>
            </div>
          </div>
        <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/Daily-Diet-API"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p19} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Daily Diet API</h3>
              <p className="p">{displayTextDailyDietAPI}</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/Transactions_RestAPI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p20} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Transactions RestAPI</h3>
              <p className="p">{displayTextTransactionsRestAPI}</p>
            </div>
          </div>
        <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/TasksAPI-Challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p18} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>TaskAPI Node.js</h3>
              <p className="p">{displayTextReduxZustand}</p>
            </div>
          </div>

        <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://ignite-redux-zustand-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="ReduxAndZustandProjectImg" src={p17} alt="" />
            </a>
            <div className="overlay">
              <h3>Module Video Player</h3>
              <p className="p_com_link">{displayTextReduxZustand}</p>
              <a
                className="button-right_reduxZustand"
                href="https://github.com/GianDutra/ignite_redux_zustand"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickReduxZustand}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://giandutra.github.io/my-design-system/?path=/story/home--page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p13} alt="" />
            </a>
            <div className="overlay">
              <h3>Design System</h3>
              <p className="p_com_link">{displayDesignSystem}</p>
              <a
                className="button-right_DesignSystem"
                href="https://github.com/GianDutra/my-design-system"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickDesignSystem}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://coffee-delivery-ashen-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="CoffeeImg" src={p11} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Coffee Delivery</h3>
              <p className="p_com_link">{displayTextCoffee}</p>
              <a
                className="button-right_coffee"
                href="https://github.com/GianDutra/Coffee-delivery"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickCoffee}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://tailwind-nextjs-sable.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p12} alt="" />
            </a>
            <div className="overlayCoffee">
              <h3>Tailwind Form</h3>
              <p className="p_com_link">{displayTextTailwindForm}</p>
              <a
                className="button-right_TailwindForm"
                href="https://github.com/GianDutra/tailwind-nextjs"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickTailwindForm}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://shop-nextjs-2-giandutra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p10} alt="" />
            </a>
            <div className="overlay">
              <h3>Ignite Shop</h3>
              <p className="p_com_link">{displayTextIgniteShop}</p>
              <a
                className="button-right_shop"
                href="https://github.com/GianDutra/Shop-Nextjs-Challenge"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickIgniteShop}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://dt-money-giandutra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p9} alt="" />
            </a>
            <div className="overlay">
              <h3>Ignite DT-Money</h3>
              <p className="p_com_link">{displayTextIgniteDt}</p>
              <a
                className="button-right_pomodoro"
                href="https://github.com/GianDutra/DT-Money"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickDtMoney}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://pomodoro-giandutra.vercel.app//"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p0} alt="" />
            </a>
            <div className="overlay">
              <h3>Ignite Pomodoro</h3>
              <p className="p_com_link">{displayTextPomodoro}</p>
              <a
                className="button-right_pomodoro"
                href="https://github.com/GianDutra/Pomodoro"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClick2}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://ignite-feed-type-script-giandutra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p1} alt="" />
            </a>
            <div className="overlay">
              <h3>Ignite Feed</h3>
              <p>HTML CSS TypeScript React Git Vite </p>
              <a
                className="button-right_feed"
                href="https://github.com/GianDutra/Ignite-Feed-TypeScript"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClick}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://meu-portfolio-giandutra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p2} alt="" />
            </a>
            <div className="overlay">
              <h3>My portfolio</h3>
              <p className="p_com_link">{displayTextPortfolio}</p>
              <a
                className="button-right_portfolio"
                href="https://github.com/GianDutra/meu_portfolio"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClickPortfolio}
              >
                <span className="visit-text">
                  {isMobile ? <>Visit Github</> : "Visit Github"}
                </span>
              </a>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/Via-Facil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p3} alt="" />
            </a>
            <div className="overlay">
              <h3>Via Fácil</h3>
              <p>HTML CSS Javascript React Git Spring MongoDB</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/ModuloCidadao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p4} alt="" />
            </a>
            <div className="overlay">
              <h3>Citizen Module</h3>
              <p>Dart Flutter Firebase Android_Studio</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            
            <a
              href="https://github.com/GianDutra/Estoque_JavaFx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p6} alt="" />
            </a>
            <div className="overlay">
              <h3>JavaFx Stock</h3>
              <p>Java JavaFx Git PostgreSQL</p>
            </div>
          </div>
          <div
            className="proyecto"
            data-aos={isMobile ? "fade-up" : ""}
            data-aos-duration="400"
            data-aos-easing="ease"
          >
            <a
              href="https://github.com/GianDutra/vtuber_voice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p8} alt="" />
            </a>
            <div className="overlay">
              <h3>Vtuber Voice App</h3>
              <p>Python Selenium Git</p>
            </div>
          </div>
          {/*<div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">

              <img src={comingSoon} alt="" />

             <div className="overlay">
              <h3>Coming Soon</h3>
              <p>Coming Soon</p>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
