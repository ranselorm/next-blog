import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-max py-[40px] mt-[50px]">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 font-semibold">Next-Blog</h2>
          <p className="text-[15px] lg:w-10/12 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            molestiae nobis fuga voluptatem, quis error exercitationem magnam
            amet dolorem, laudantium aut cum obcaecati? Non sunt, nobis dolorum
            laudantium repellat dicta?
          </p>
          <div className="flex gap-x-4 flex-1">
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
            <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between flex-1">
          <div>
            <h3 className="mb-4 font-semibold">Links</h3>
            <div className="flex flex-col text-[15px]">
              <Link href="#" className="mb-2">
                Home
              </Link>
              <Link href="#" className="mb-2">
                About
              </Link>
              <Link href="#" className="mb-2">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Categories</h3>
            <div className="text-[15px]">
              <p className="mb-2">Politics & Governance</p>
              <p className="mb-2">Sports & Recreation</p>
              <p className="mb-2">Science & Technology</p>
              <p className="mb-2">Entertainnment</p>
              <p className="mb-2">Lifestyle</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Socials</h3>
            <p className="mb-2">Facebook</p>
            <p className="mb-2">Instagram</p>
            <p className="mb-2">Twitter</p>
            <p className="mb-2">Youtube</p>
            <p className="mb-2">TikTok</p>
          </div>
          {/* <div>2</div>
          <div>3</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
