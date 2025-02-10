import Image from "next/image";

export default function Menu() {
  const url =
    "https://oqjgdpuknnexaacahemq.supabase.co/storage/v1/object/sign/TerasaBlackTulip/meniu.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUZXJhc2FCbGFja1R1bGlwL21lbml1LnBkZiIsImlhdCI6MTczODkxNDAyNiwiZXhwIjoxODk2NTk0MDI2fQ.AvzALbKRhZzeBAnxMd9ouRWNb4DY9zDwpAIQXZyiD60";
  const pages = Array.from(
    { length: 22 },
    (_, i) => `/meniu/meniu${i + 1}.jpg`
  );

  return (
    <>
      <div className="hidden sm:block h-[100vh]">
        <iframe
          src={url}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Meniu PDF"
        ></iframe>
      </div>
      <div className=" grid grid-cols-1 gap-4 sm:hidden">
        {pages.map((page, index) => (
          <div key={index} className="menu-image ">
            <Image
              src={page}
              alt={`Pagina ${index + 1}`}
              layout="responsive"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
}
