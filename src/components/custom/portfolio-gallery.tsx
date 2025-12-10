const images = [
  "/assets/images/profile.jpg",
  "https://images.unsplash.com/photo-1498435999018-6803de1f1c1f?q=80&w=3273&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541695226403-a09aa08e5135?q=80&w=3276&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1609951651467-713256d1a3be?q=80&w=3328&auto=format&fit=crop",
  "/assets/images/2.png",

  "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=3271&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=3270&auto=format&fit=crop",
  "/assets/images/1.JPG",

  "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=3230&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579888286284-692fa4bdc42b?q=80&w=3280&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1529369623266-f5264b696110?q=80&w=3174&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583513702439-2e611c58e93d?q=80&w=3269&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=3327&auto=format&fit=crop",
];

export default function DiamondGallery() {
  return (
    <div
    className="group grid gap-2 gallery_wrapper"
    style={{
        gridTemplateColumns: "repeat(6, calc(100px - 0.5rem / 2))",
        gridTemplateRows: "repeat(4, calc(100px - 0.5rem / 2))",
    }}
    >
    {images.map((src, i) => (
        <img
            key={i}
            src={src}
            className={`
                max-w-full aspect-square object-cover rounded-md
                transition-[clip-path,filter] duration-500
                clip-blob 
                hover:clip-hover 
                z-fix
                group-hover:brightness-50 group-hover:saturate-50
                hover:brightness-100 hover:saturate-150
                gallery_img
            `}
            style={{
                gridColumn:
                i === 3 || i === 8 ? "2 / span 2" : "span 2",
            }}
        />
    ))}
    </div>
  );
}
