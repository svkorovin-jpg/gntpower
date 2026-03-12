import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin', 'cyrillic'] })
export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section style={{
        background:"#2E8B0F",
        color:"white",
        padding:"120px 40px",
        textAlign:"center"
      }}>

        <img src="/logo.svg" width="260" />

        <h1 style={{
          fontSize:"48px",
          marginTop:"40px"
        }}>
          Measure the soft skills that drive leadership
        </h1>

        <p style={{
          fontSize:"20px",
          marginTop:"20px",
          opacity:"0.9"
        }}>
          AI-powered soft skills assessment platform
          for organisations and leadership teams
        </p>

        <button style={{
          marginTop:"40px",
          padding:"16px 32px",
          fontSize:"18px",
          borderRadius:"8px",
          border:"none",
          background:"white",
          color:"#2E8B0F"
        }}>
          Start Assessment
        </button>

      </section>


      {/* PROBLEM */}

      <section style={{
        padding:"100px 40px",
        maxWidth:"900px",
        margin:"0 auto",
        textAlign:"center"
      }}>

        <h2 style={{fontSize:"36px"}}>
          Most organisations measure the wrong things
        </h2>

        <p style={{
          marginTop:"20px",
          fontSize:"20px",
          color:"#555"
        }}>
          Technical skills are easy to test.
          <br/><br/>
          But leadership success depends on
          communication, judgement, emotional intelligence
          and decision making.
          <br/><br/>
          These soft skills are rarely measured properly.
        </p>

      </section>

    </main>
  )
}