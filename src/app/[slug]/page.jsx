import Image from "next/image";
import { MdOutlineDateRange, MdOutlineRemoveRedEye } from "react-icons/md";
import Facebook from "../../../public/icons/facebook.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Youtube from "../../../public/icons/youtube.svg";
import TikTok from "../../../public/icons/tiktok.svg";
import Whatsapp from "../../../public/icons/whatsapp.svg";

const SingleBlogPost = () => {
  return (
    <section className="mt-[50px] flex items-center justify-between font-primary">
      <main className="w-full flex justify-between ">
        <article className="bg-white w-8/12 p-6 rounded">
          <span className="bg-blue-500 px-2 py-1 uppercase text-[14px] font-semibold rounded text-white">
            Sports
          </span>
          <h3 className="text-2xl font-semibold capitalize my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            unde magnam facere recusandae a quos aliquid?
          </h3>
          <div className="flex gap-x-3 text-sm items-center">
            <p className="text-gray-500">
              By <span className="text-black">Jenny Frank</span>
            </p>
            <div className="bg-gray-400 w-[1px] h-4" />
            <p className="flex items-center gap-x-1 text-gray-500">
              <MdOutlineDateRange /> <span>12 August 2024</span>
            </p>
            <div className="bg-gray-400 w-[1px] h-4" />
            <p className="flex items-center gap-x-1 text-gray-500">
              <MdOutlineRemoveRedEye /> <span>2 mins read</span>
            </p>
          </div>
          <div className="relative h-[450px] w-full my-6 rounded overflow-hidden">
            <Image
              src="/images/lewy.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              qui beatae ipsum ipsam sint? Molestiae illum similique veniam iste
              eaque, sapiente nostrum? Qui, consequuntur repellat? Voluptatum
              fugiat doloribus sit numquam.
            </p>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              qui beatae ipsum ipsam sint? Molestiae illum similique veniam iste
              eaque, sapiente nostrum? Qui, consequuntur repellat? Voluptatum
              fugiat doloribus sit numquam.
            </p>
          </section>
        </article>
        <div className="w-3/12 border-2">
          <div className="bg-white px-2 py-6">
            <h3 className="font-semibold text-md uppercase">Social Networks</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-100 px-2 py-1 w-max flex items-center gap-x-2 rounded">
                <Image src={Facebook} width={13} height={13} />
                <p className="text-[12px]">Facebook</p>
              </div>
              <div className="bg-gray-100 px-2 py-1 w-max flex items-center gap-x-2 rounded">
                <Image src={Twitter} width={13} height={13} />
                <p className="text-[12px]">Twitter</p>
              </div>
              <div className="bg-gray-100 px-2 py-1 w-max flex items-center gap-x-2 rounded">
                <Image src={Youtube} width={13} height={13} />
                <p className="text-[12px]">Youtube</p>
              </div>
              <div className="bg-gray-100 px-2 py-1 w-max flex items-center gap-x-2 rounded">
                <Image src={TikTok} width={13} height={13} />
                <p className="text-[12px]">TikTok</p>
              </div>
              <div className="bg-gray-100 px-2 py-1 w-max flex items-center gap-x-2 rounded">
                <Image src={Whatsapp} width={13} height={13} />
                <p className="text-[12px]">WhatsApp</p>
              </div>
              <div className="bg-gray-100 px-2 py-1 w-max flex items-center gap-x-2 rounded">
                <Image src={Twitter} width={13} height={13} />
                <p className="text-[12px]">Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SingleBlogPost;
