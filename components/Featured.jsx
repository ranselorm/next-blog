"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { posts } from "../data";
import { getLatestPostByCategory, formattedDate } from "../helpers";
import "swiper/css";

const politicsPosts = getLatestPostByCategory(posts, "Politics");
const techPosts = getLatestPostByCategory(posts, "Technology");
const sportsPosts = getLatestPostByCategory(posts, "Sports");
const entertainmentPosts = getLatestPostByCategory(posts, "Entertainment");

const Featured = () => {
  return (
    <section className="mt-[30px] font-primary">
      <main className="flex gap-3 h-full md:h-[320px] w-full">
        {/* Display slider on mobile screens */}
        <div className="w-full relative rounded md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.09}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="w-full h-[200px] relative overflow-hidden rounded-lg">
                <div className="w-full h-full relative">
                  <img
                    src={politicsPosts.coverImage}
                    alt=""
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute bottom-2 px-4 text-white">
                  <span className="bg-blue-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
                    {politicsPosts.category}
                  </span>
                  <article className="">
                    <Link href={`/12`}>
                      <h3 className="text-xl leading-[25px] my-2">
                        {politicsPosts.title}
                      </h3>
                    </Link>
                    <span className="text-sm">
                      {formattedDate(politicsPosts.createdAt)}
                    </span>
                  </article>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[200px] relative overflow-hidden rounded-lg">
                <div className="w-full h-full relative">
                  <img
                    src={techPosts.coverImage}
                    alt=""
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute bottom-2 px-4 text-white">
                  <span className="bg-blue-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
                    {techPosts.category}
                  </span>
                  <article className="">
                    <Link href={`/12`}>
                      <h3 className="text-xl leading-[25px] my-2">
                        {techPosts.title}
                      </h3>
                    </Link>
                    <span className="text-sm">
                      {formattedDate(techPosts.createdAt)}
                    </span>
                  </article>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Similar structure for other categories */}
        </div>
        {/* <div className="w-1/2 relative rounded overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src={politicsPosts.coverImage}
              alt=""
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute bottom-2 px-4 text-white">
            <span className="bg-blue-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
              {politicsPosts.category}
            </span>
            <article className="">
              <Link href={`/12`}>
                <h3 className="text-xl leading-[25px] my-2">
                  {politicsPosts.title}
                </h3>
              </Link>
              <span className="text-sm">
                {formattedDate(politicsPosts.createdAt)}
              </span>
            </article>
          </div>
        </div> */}
        {/* <div className="w-1/2 flex flex-col gap-y-3">
          <div className="h-1/2 relative rounded overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src="/images/zuck.jpeg"
                alt=""
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute bottom-2 px-4 text-white">
              <span className="bg-teal-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
                {techPosts.category}
              </span>
              <article className="">
                <Link href="/10">
                  <h3 className="text-lg leading-[20px] my-2">
                    {techPosts.title}
                  </h3>
                </Link>
                {formattedDate(techPosts.createdAt)}
              </article>
            </div>
          </div>
          <div className="h-1/2 flex gap-x-3">
            <div className="h-full w-1/2 relative rounded overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src={sportsPosts.coverImage}
                  alt=""
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute bottom-2 px-4 text-white">
                <span className="bg-black text-white px-2 py-1 uppercase text-[10px] font-semibold rounded">
                  {sportsPosts.category}
                </span>
                <article className="">
                  <h3 className="text-lg leading-[20px] my-2">
                    {sportsPosts.title}
                  </h3>
                  <span className="text-sm">
                    {formattedDate(sportsPosts.createdAt)}
                  </span>
                </article>
              </div>
            </div>
            <div className="relative h-full w-1/2 rounded overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src={entertainmentPosts.coverImage}
                  alt=""
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute bottom-2 px-4 text-white">
                <span className="bg-red-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
                  {entertainmentPosts.category}
                </span>
                <article className="">
                  <h3 className="text-lg leading-[20px] my-2">
                    {entertainmentPosts.title}
                  </h3>
                  {formattedDate(entertainmentPosts.createdAt)}
                </article>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </section>
  );
};

export default Featured;
