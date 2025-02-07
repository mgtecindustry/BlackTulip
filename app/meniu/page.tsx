import Image from "next/image";

export default function Menu() {
  const pages = Array.from(
    { length: 22 },
    (_, i) => `/meniu/meniu${i + 1}.jpg`
  );

  return (
    <div>
      <div className="menu-images grid grid-cols-1 gap-4">
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
    </div>
  );
}
