import Image from "next/image";
import Menu from "@/components/Menu";
import NewComment from "@/components/NewComment";
import Comments from "@/components/Comments";

const SingleBlogPost = () => {
  return (
    <div className="mt-[100px] flex items-center justify-between">
      <div className="lg:w-7/12">
        {/* text */}
        <article className="">
          <h1 className="text-[30px] leading-[37px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum sit
            deserunt animi vitae eaque quod!
          </h1>
          <div>
            <p className="text-[10px] mt-[10px] mb-[20px]">
              By <span className="font-bold">John Doe</span> - November 23, 2023
            </p>
          </div>
        </article>
        <div className="relative w-full lg:h-[400px] h-[300px] rounded-lg overflow-hidden">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="mt-[30px]">
          <p className="my-10 leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            ratione vero, dolore voluptatem nam adipisci eos praesentium quam
            numquam assumenda blanditiis tempora, repellat dolorem doloribus
            voluptatum? Aut excepturi sit atque.
          </p>
          <p className="my-10 leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            ratione vero, dolore voluptatem nam adipisci eos praesentium quam
            numquam assumenda blanditiis tempora, repellat dolorem doloribus
            voluptatum? Aut excepturi sit atque.
          </p>
          <p className="my-10 leading-[27px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            ratione vero, dolore voluptatem nam adipisci eos praesentium quam
            numquam assumenda blanditiis tempora, repellat dolorem doloribus
            voluptatum? Aut excepturi sit atque.
          </p>
          <NewComment />
          <Comments />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default SingleBlogPost;
