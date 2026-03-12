type ProblemProps = {
  title: string
  text: string
}

export default function Problem({ title, text }: ProblemProps) {
  return (
    <section
      style={{
        padding: "100px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px" }}>{title}</h2>

      <p
        style={{
          marginTop: "20px",
          fontSize: "20px",
          color: "#555",
        }}
      >
        {text}
      </p>
    </section>
  )
}