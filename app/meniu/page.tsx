const meniuUrl =
  "https://oqjgdpuknnexaacahemq.supabase.co/storage/v1/object/sign/TerasaBlackTulip/meniu.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUZXJhc2FCbGFja1R1bGlwL21lbml1LnBkZiIsImlhdCI6MTczODkxNDAyNiwiZXhwIjoxODk2NTk0MDI2fQ.AvzALbKRhZzeBAnxMd9ouRWNb4DY9zDwpAIQXZyiD60";

export default function MenuPage() {
  return (
    <>
      <div
        className="sm:hidden"
        style={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <iframe
          src={`${meniuUrl}#view=FitH&toolbar=0&navpanes=0`}
          width="100%"
          height="100%"
          style={{
            border: "none",
          }}
          title="Meniu"
        />
      </div>

      <div
        className="hidden sm:flex"
        style={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <iframe
          src={meniuUrl}
          width="100%"
          height="100%"
          style={{
            border: "none",
          }}
          title="Meniu"
        />
      </div>
    </>
  );
}
