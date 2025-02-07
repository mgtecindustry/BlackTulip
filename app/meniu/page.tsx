const meniuUrl =
  "https://oqjgdpuknnexaacahemq.supabase.co/storage/v1/object/sign/TerasaBlackTulip/meniu.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUZXJhc2FCbGFja1R1bGlwL21lbml1LnBkZiIsImlhdCI6MTczODkxNDAyNiwiZXhwIjoxODk2NTk0MDI2fQ.AvzALbKRhZzeBAnxMd9ouRWNb4DY9zDwpAIQXZyiD60";

export default function MenuPage() {
  return (
    <>
      {/* Secțiune pentru ecrane mici (mobile) */}
      <div className="sm:hidden" style={{ width: "100%", height: "100vh" }}>
        {/* Fallback pentru vizualizarea meniului pe mobil */}
        <iframe
          src={`${meniuUrl}#view=FitH&toolbar=0&navpanes=0`}
          width="100%"
          height="100%"
          style={{
            border: "none",
            objectFit: "contain", // Asigură că PDF-ul se încarcă corect
          }}
          title="Meniu"
        />
        {/* Link pentru descărcarea PDF-ului, în cazul în care iframe-ul nu funcționează */}
        <p style={{ textAlign: "center", padding: "10px" }}>
          <a href={meniuUrl} target="_blank" rel="noopener noreferrer">
            Descarcă meniul
          </a>
        </p>
      </div>

      {/* Secțiune pentru ecrane mari (desktop) */}
      <div
        className="hidden sm:flex"
        style={{ width: "100vw", height: "100vh" }}
      >
        <iframe
          src={meniuUrl}
          width="100%"
          height="100%"
          style={{
            border: "none",
            objectFit: "contain", // Asigură că PDF-ul se încarcă corect
          }}
          title="Meniu"
        />
      </div>
    </>
  );
}
